import React, { useMemo } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

/**
 * WeeklyRegistrationsChart
 * Props:
 *  - data: optional array of { timestamp: number | string } or already-bucketed [{ weekLabel, count }]
 *
 * Example usage:
 *  <WeeklyRegistrationsChart data={rawRegistrationArray} />
 */

function groupByWeek(registrations = []) {
  // Accepts items like { timestamp: 1699999999999 } or ISO string.
  // Groups into week labels (Mon YYYY-MM-DD to Sun YYYY-MM-DD or simple Mon/WeekNumber).
  // Returns { weekLabel, count } sorted ascending.
  if (!registrations.length) return [];

  // Convert timestamps to Date and find ISO week start (Monday) — we'll use a simple weekStart date string.
  const getWeekStartStr = (ts) => {
    const d = new Date(ts);
    // move to Monday of the same week (ISO-style)
    const day = d.getDay(); // 0=Sun,1=Mon...
    const diffToMon = (day === 0 ? -6 : 1) - day; // shift to Monday
    const monday = new Date(d);
    monday.setDate(d.getDate() + diffToMon);
    monday.setHours(0, 0, 0, 0);
    return monday.toISOString().slice(0, 10); // YYYY-MM-DD
  };

  const map = new Map();
  registrations.forEach((item) => {
    const ts =
      typeof item === "number" || typeof item === "string"
        ? item
        : item.timestamp;
    const start = getWeekStartStr(ts);
    map.set(start, (map.get(start) || 0) + 1);
  });

  // build sorted array
  const arr = Array.from(map.entries())
    .map(([weekStart, count]) => ({ weekStart, count }))
    .sort((a, b) => new Date(a.weekStart) - new Date(b.weekStart));

  // Convert weekStart to a user-friendly label e.g. "Mon 2025-11-10"
  return arr.map((r) => ({ weekLabel: r.weekStart, count: r.count }));
}

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null;
  const value = payload[0].value;
  return (
    <div className="bg-white shadow rounded p-2 text-sm border">
      <div className="font-semibold text-gray-700">{label}</div>
      <div className="text-gray-600">
        Registrations: <span className="font-bold">{value}</span>
      </div>
    </div>
  );
};

export default function WeeklyRegistrationsChart({ data = [] }) {
  // If incoming data is already bucketed, accept format [{weekLabel, count}]
  const chartData = useMemo(() => {
    if (!data || !data.length) {
      // demo fallback for empty data
      return [
        { weekLabel: "2025-10-13", count: 5 },
        { weekLabel: "2025-10-20", count: 9 },
        { weekLabel: "2025-10-27", count: 7 },
        { weekLabel: "2025-11-03", count: 12 },
        { weekLabel: "2025-11-10", count: 8 },
      ];
    }
    // detect raw registration list vs already-bucketed
    const first = data[0];
    if (
      first &&
      (first.timestamp ||
        typeof first === "number" ||
        typeof first === "string")
    ) {
      return groupByWeek(data);
    }
    // else assume already bucketed
    return data;
  }, [data]);

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-gray-800 font-semibold">Weekly Registrations</h3>
        <div className="text-sm text-gray-500">
          Last {chartData.length} weeks
        </div>
      </div>

      <div style={{ width: "100%", height: 240 }}>
        <ResponsiveContainer>
          <AreaChart
            data={chartData}
            margin={{ top: 10, right: 18, left: 0, bottom: 0 }}
          >
            {/* nice faint grid */}
            <defs>
              <linearGradient id="colorReg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2563EB" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#2563EB" stopOpacity={0.05} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="#e6e6e6" />
            <XAxis
              dataKey="weekLabel"
              tickFormatter={(v) => {
                // show just month-day for compactness
                return v.slice(5);
              }}
              stroke="#6b7280"
              tick={{ fontSize: 12 }}
            />
            <YAxis
              allowDecimals={false}
              stroke="#6b7280"
              tick={{ fontSize: 12 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="count"
              stroke="#2563EB"
              strokeWidth={2}
              fill="url(#colorReg)"
              activeDot={{ r: 5 }}
              dot={{ r: 3 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
