import React from "react";

// Fake Data for Orders
const recentOrders = [
  {
    id: 1,
    package: "Gold Plan",
    total: "₹4,999",
    gateway: "Razorpay",
    date: "12 Nov 2025",
    status: "Success",
  },
  {
    id: 2,
    package: "Silver Plan",
    total: "₹2,499",
    gateway: "Stripe",
    date: "11 Nov 2025",
    status: "Pending",
  },
  {
    id: 3,
    package: "Platinum Pro",
    total: "₹9,999",
    gateway: "PayPal",
    date: "10 Nov 2025",
    status: "Success",
  },
  {
    id: 4,
    package: "Basic Plan",
    total: "₹999",
    gateway: "Razorpay",
    date: "09 Nov 2025",
    status: "Failed",
  },
  {
    id: 5,
    package: "Gold Plan",
    total: "₹4,999",
    gateway: "Stripe",
    date: "08 Nov 2025",
    status: "Success",
  },
  {
    id: 6,
    package: "Gold Plan",
    total: "₹4,999",
    gateway: "Stripe",
    date: "08 Nov 2025",
    status: "Success",
  },
];

// Fake Data for Subscriptions
const recentSubscriptions = [
  {
    name: "Amit Sharma",
    monthly: "₹2,499",
    yearly: "₹24,999",
    status: "Active",
  },
  { name: "Priya Verma", monthly: "₹999", yearly: "₹9,999", status: "Active" },
  {
    name: "Rohan Singh",
    monthly: "₹4,999",
    yearly: "₹49,999",
    status: "Expired",
  },
  {
    name: "Neha Gupta",
    monthly: "₹2,499",
    yearly: "₹24,999",
    status: "Active",
  },
  {
    name: "Vikram Patel",
    monthly: "₹9,999",
    yearly: "₹99,999",
    status: "Active",
  },
];

const DSectionThree = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
      <div className="bg-[#f8f8f8] rounded-2xl shadow-sm border border-gray-200 overflow-hidden ">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-800">Recent Orders</h3>
          <button className="text-sm font-medium text-blue-600 hover:text-blue-700 transition">
            View All →
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider bg-gray-200/60">
                <th className="px-6 py-4">Package</th>
                <th className="px-6 py-4">Total</th>
                <th className="px-6 py-4">Gateway</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 w-10"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-100 transition">
                  <td className="px-6 py-5 text-sm font-medium text-gray-900">
                    {order.package}
                  </td>
                  <td className="px-6 py-5 text-sm text-gray-700">
                    {order.total}
                  </td>
                  <td className="px-6 py-5 text-sm text-gray-600">
                    {order.gateway}
                  </td>
                  <td className="px-6 py-5 text-sm text-gray-600">
                    {order.date}
                  </td>
                  <td className="px-6 py-5">
                    <span
                      className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                        order.status === "Success"
                          ? "bg-green-100 text-green-800"
                          : order.status === "Pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <button className="text-gray-400 hover:text-gray-700">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path d="M10 6a2 2 0 100-4 2 2 0 000 4z" />
                        <path d="M10 18a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-[#f8f8f8] rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-gray-800">
            Recent Subscriptions
          </h3>
          <button className="text-sm font-medium text-blue-600 hover:text-blue-700 transition">
            View All →
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider bg-gray-200/60">
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Monthly</th>
                <th className="px-6 py-4">Yearly</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 w-10"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentSubscriptions.map((sub, index) => (
                <tr key={index} className="hover:bg-gray-100 transition">
                  <td className="px-6 py-5 text-sm font-medium text-gray-900 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                      {sub.name.charAt(0)}
                    </div>
                    {sub.name}
                  </td>
                  <td className="px-6 py-5 text-sm text-gray-700">
                    {sub.monthly}
                  </td>
                  <td className="px-6 py-5 text-sm text-gray-700">
                    {sub.yearly}
                  </td>
                  <td className="px-6 py-5">
                    <span
                      className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                        sub.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {sub.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <button className="text-gray-400 hover:text-gray-700">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path d="M10 6a2 2 0 100-4 2 2 0 000 4z" />
                        <path d="M10 18a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DSectionThree;
