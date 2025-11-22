import React, { useMemo } from "react";
import Chart from "react-apexcharts";

const WEEK_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function toDate(x) {
  if (!x) return null;
  if (x instanceof Date) return x;
  return new Date(x);
}

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

/**
 * props:
 *  - data: array of timestamps (string/number) OR objects having createdAt | timestamp
 *  - weekStartDate (optional): any Date/ISO that belongs to the week you want to visualize
 */
export default function WeeklyRegistrationsBar({
  data = [],
  weekStartDate = null,
}) {
  // Aggregate counts for each weekday (Sun..Sat)
  const countsByDay = useMemo(() => {
    const counts = Array(7).fill(0);
    if (!data || !data.length) return counts;

    // determine week range
    let sunday, saturday;
    if (weekStartDate) {
      const s = toDate(weekStartDate);
      const shift = s.getDay();
      sunday = new Date(s);
      sunday.setDate(s.getDate() - shift);
      sunday.setHours(0, 0, 0, 0);
      saturday = new Date(sunday);
      saturday.setDate(sunday.getDate() + 6);
      saturday.setHours(23, 59, 59, 999);
    } else {
      const r = getWeekRangeContaining(new Date());
      sunday = r.sunday;
      saturday = r.saturday;
    }

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
  }, [data, weekStartDate]);

  const options = useMemo(() => {
    return {
      chart: {
        toolbar: { show: false },
        animations: { enabled: true },
      },
      plotOptions: {
        bar: {
          borderRadius: 6,
          columnWidth: "50%",
        },
      },
      xaxis: {
        categories: WEEK_DAYS,
        labels: { style: { colors: "#6b7280" } },
      },
      yaxis: {
        labels: { style: { colors: "#6b7280" } },
        forceNiceScale: true,
      },
      dataLabels: { enabled: false },
      tooltip: {
        y: {
          formatter: (v) => `${v} registrations`,
        },
      },
      colors: ["#2563EB"], // Tailwind blue-600
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

      <div style={{ width: "100%", height: 260 }}>
        <Chart options={options} series={series} type="bar" height={220} />
      </div>
    </div>
  );
}
