import React from "react";
import ApexChart from "./ApexChart";
import DSectionOne from "./DSectionOne";
import DSectionThree from "./DSectionThree";

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
    <div className="w-auto mx-2 max-w-10xl px-5 z-50  py-8 rounded-3xl bg-white ">
      <section>
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <p className="text-gray-500">Welcome back, Super Admin</p>
        <DSectionOne />
      </section>
      <section className="py-4  z-0   bg-[#f8f8f8] rounded-lg shadow ">
        <ApexChart data={demoRegistrations} weekStartDate={"2025-11-16"} />
      </section>
      <section>
        <DSectionThree />
      </section>
    </div>
  );
};

export default Dashboard;
