import React from "react";

// SVG Icons (tum apne pasand ke daal sakte ho)
const statsData = [
  {
    title: "Total Users",
    count: 1284,
    icon: (
      <svg
        className="w-8 h-8 text-blue-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H9v-1a4 4 0 014-4h2a4 4 0 014 4v1z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Active Subscriptions",
    count: 342,
    icon: (
      <svg
        className="w-8 h-8 text-green-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Total Revenue",
    count: 88900,
    icon: (
      <svg
        className="w-8 h-8 text-purple-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

const DSectionOne = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-10xl mx-auto py-8 ">
      {statsData.map((stat, index) => (
        <div
          key={index}
          className={` rounded-2xl p-6 bg-[#f8f8f8] shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100`}
        >
          <div className=" flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm font-medium">{stat.title}</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">
                {stat.prefix && <span className="text-xl">{stat.prefix}</span>}
                {stat.count.toLocaleString()}
              </p>
            </div>
            <div className="p-3 bg-white rounded-xl shadow-sm">{stat.icon}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DSectionOne;
