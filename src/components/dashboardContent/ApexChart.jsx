import React, { useMemo, useEffect, useState } from "react";
import Chart from "react-apexcharts";

const WEEK_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getWeekRangeContaining(date = new Date()) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  const day = d.getDay(); // 0 = Sun
  const sunday = new Date(d);
  sunday.setDate(d.getDate() - day);
  sunday.setHours(0, 0, 0, 0);
  const saturday = new Date(sunday);
  saturday.setDate(sunday.getDate() + 6);
  saturday.setHours(23, 59, 59, 999);
  return { sunday, saturday };
}

export default function WeeklyRegistrationsBar({
  data = [],
  weekStartDate = null,
  weekMode = "previous", // "previous" or "current"
}) {
  // referenceDate is computed once in an effect — avoids calling Date.now() during render
  const [referenceDate, setReferenceDate] = useState(null);

  useEffect(() => {
    if (weekStartDate) {
      // safe to set directly because it's an external value, but still we can defer
      setTimeout(() => setReferenceDate(new Date(weekStartDate)), 0);
      return;
    }

    if (weekMode === "previous") {
      const t = setTimeout(() => {
        setReferenceDate(new Date(Date.now() - 24 * 60 * 60 * 1000));
      }, 0);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => setReferenceDate(new Date()), 0);
    return () => clearTimeout(t);
  }, [weekStartDate, weekMode]);

  // If referenceDate not ready yet, render a placeholder (or zeros) — prevents using impure funcs in render
  const countsByDay = useMemo(() => {
    const counts = Array(7).fill(0);
    if (!referenceDate) return counts;
    if (!data || !data.length) return counts;

    const { sunday, saturday } = getWeekRangeContaining(referenceDate);

    const extractDate = (it) => {
      if (!it) return null;
      if (typeof it === "string" || typeof it === "number") return new Date(it);
      if (it.createdAt) return new Date(it.createdAt);
      if (it.timestamp) return new Date(it.timestamp);
      return null;
    };

    for (const it of data) {
      const dt = extractDate(it);
      if (!dt || isNaN(dt.getTime())) continue;
      if (dt >= sunday && dt <= saturday) {
        counts[dt.getDay()] += 1;
      }
    }
    return counts;
  }, [data, referenceDate]);

  // ensure chart reflows after mount (helps when inside collapsing sidebar)
  useEffect(() => {
    const t = setTimeout(() => window.dispatchEvent(new Event("resize")), 320);
    return () => clearTimeout(t);
  }, []);

  const options = useMemo(() => {
    return {
      chart: { toolbar: { show: false }, animations: { enabled: true } },
      plotOptions: { bar: { borderRadius: 6, columnWidth: "50%" } },
      xaxis: {
        categories: WEEK_DAYS,
        labels: { style: { colors: "#6b7280" } },
      },
      yaxis: { labels: { style: { colors: "#6b7280" } }, forceNiceScale: true },
      dataLabels: { enabled: false },
      tooltip: { y: { formatter: (v) => `${v} registrations` } },
      colors: ["#2563EB"],
      grid: { strokeDashArray: 4, borderColor: "#eef2f7" },
    };
  }, []);

  const series = useMemo(
    () => [{ name: "Registrations", data: countsByDay }],
    [countsByDay]
  );
  const total = countsByDay.reduce((a, b) => a + b, 0);

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-gray-800 font-semibold">
          Weekly Registrations (Sun → Sat)
        </h3>
        <div className="text-sm text-gray-500">Total: {total}</div>
      </div>

      <div className="w-[88%]" style={{ height: "230px" }}>
        <Chart
          className=""
          options={options}
          series={series}
          type="bar"
          height={230}
        />
      </div>
    </div>
  );
}
