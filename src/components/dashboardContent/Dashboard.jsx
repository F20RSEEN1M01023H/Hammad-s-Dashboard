import React from "react";
import WeeklyRegistrationsChart from "./WeeklyRegisterationsChart";
import ApexChart from "./ApexChart";

const Dashboard = () => {
  const demoRegistrations = [
    "2025-11-16T09:00:00Z", // Sun
    "2025-11-16T11:00:00Z",
    "2025-11-17T08:30:00Z", // Mon
    "2025-11-18T10:00:00Z", // Tue
    "2025-11-18T13:00:00Z",
    "2025-11-20T14:00:00Z", // Thu
    "2025-11-21T15:00:00Z", // Fri
    "2025-11-22T16:00:00Z",
  ];

  return (
    <div className="w-auto mx-2 max-w-10xl px-5   py-4 rounded-3xl bg-white h-screen">
      <section>
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <p className="text-gray-500">Welcome back, Super Admin</p>
      </section>
      <section className="py-4   bg-white rounded-lg shadow ">
        <ApexChart data={demoRegistrations} weekStartDate={"2025-11-16"} />
      </section>
    </div>
  );
};

export default Dashboard;
