import React from "react";
import Category from "./Category";

const SidebarSmall = ({
  mobilesidebar,
  sidebarOpen,
  indexOpen,
  setIndexOpen,
}) => {
  return (
    <div>
      {mobilesidebar && (
        <div
          className={` fixed top-16 left-0   h-screen bg-[#f8f9f8] pt-5  lg:hidden ${
            mobilesidebar ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="px-2 text-gray-500  ">
            <div className=" pb-3 ml-6.5">
              <button className=" flex items-center ">
                <a
                  className="flex items-center  font-semibold gap-2  hover:text-blue-500 active:text-blue-500"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z" />
                  </svg>

                  <span>Dashboard</span>
                </a>
              </button>
            </div>

            <Category
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
                </svg>
              }
              sidebarOpen={sidebarOpen}
              title="Category"
              items={["Category", "SubCategory"]}
              categoryOpen={indexOpen === 0}
              onToggle={
                () => setIndexOpen(indexOpen === 0 ? null : 0) // Toggle this category
              }
            />
            <Category
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
                </svg>
              }
              sidebarOpen={sidebarOpen}
              title="Subscription"
              items={["All Orders", "OrdersHere"]}
              categoryOpen={indexOpen === 1}
              onToggle={
                () => setIndexOpen(indexOpen === 1 ? null : 1) // Toggle this category
              }
            />
            <div className=" py-4 ml-6.5">
              <button className="w-40 flex justify-between   ">
                <a
                  className="flex items-center font-semibold gap-2  hover:text-blue-500 active:text-blue-500"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="21 16 12 21 3 16 3 8 12 3 21 8 21 16"></polygon>
                    <line x1="12" y1="3" x2="12" y2="21"></line>
                    <line x1="3" y1="8" x2="21" y2="8"></line>
                    <line x1="3" y1="16" x2="21" y2="16"></line>
                  </svg>

                  <span>Packages</span>
                </a>
              </button>
            </div>
            <div className=" py-4 ml-6.5">
              <button className="w-40 flex justify-between  ">
                <a
                  className="flex items-center font-semibold gap-2  hover:text-blue-500 active:text-blue-500"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="48"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 512 512"
                  >
                    <path d="M262.29 192.31a64 64 0 1057.4 57.4 64.13 64.13 0 00-57.4-57.4zM416.39 256a154.34 154.34 0 01-1.53 20.79l45.21 35.46a10.81 10.81 0 012.45 13.75l-42.77 74a10.81 10.81 0 01-13.14 4.59l-44.9-18.08a16.11 16.11 0 00-15.17 1.75A164.48 164.48 0 01325 400.8a15.94 15.94 0 00-8.82 12.14l-6.73 47.89a11.08 11.08 0 01-10.68 9.17h-85.54a11.11 11.11 0 01-10.69-8.87l-6.72-47.82a16.07 16.07 0 00-9-12.22 155.3 155.3 0 01-21.46-12.57 16 16 0 00-15.11-1.71l-44.89 18.07a10.81 10.81 0 01-13.14-4.58l-42.77-74a10.8 10.8 0 012.45-13.75l38.21-30a16.05 16.05 0 006-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 00-6.07-13.94l-38.19-30A10.81 10.81 0 0149.48 186l42.77-74a10.81 10.81 0 0113.14-4.59l44.9 18.08a16.11 16.11 0 0015.17-1.75A164.48 164.48 0 01187 111.2a15.94 15.94 0 008.82-12.14l6.73-47.89A11.08 11.08 0 01213.23 42h85.54a11.11 11.11 0 0110.69 8.87l6.72 47.82a16.07 16.07 0 009 12.22 155.3 155.3 0 0121.46 12.57 16 16 0 0015.11 1.71l44.89-18.07a10.81 10.81 0 0113.14 4.58l42.77 74a10.8 10.8 0 01-2.45 13.75l-38.21 30a16.05 16.05 0 00-6.05 14.08c.33 4.14.55 8.3.55 12.47z" />
                  </svg>

                  <span>Settings</span>
                </a>
              </button>
            </div>
            <div className=" py-4 ml-6.5">
              <button className="w-40 flex justify-between  ">
                <a
                  className="flex items-center font-semibold gap-2  hover:text-blue-500 active:text-blue-500"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <polygon points="21 16 12 21 3 16 3 8 12 3 21 8 21 16"></polygon>
                    <line x1="12" y1="3" x2="12" y2="21"></line>
                    <line x1="3" y1="8" x2="21" y2="8"></line>
                    <line x1="3" y1="16" x2="21" y2="16"></line>
                  </svg>

                  <span>Users</span>
                </a>
              </button>
            </div>
            <Category
              sidebarOpen={sidebarOpen}
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1Z" />
                  <path d="M3 12C3 14.0902 3.71255 16.014 4.90798 17.5417C6.55245 15.3889 9.14627 14 12.0645 14C14.9448 14 17.5092 15.3531 19.1565 17.4583C20.313 15.9443 21 14.0524 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12Z" />
                  <path d="M12 21C9.84977 21 7.87565 20.2459 6.32767 18.9878C7.59352 17.1812 9.69106 16 12.0645 16C14.4084 16 16.4833 17.1521 17.7538 18.9209C16.1939 20.2191 14.1881 21 12 21Z" />
                </svg>
              }
              title="Profile"
              items={["Profile", "Password"]}
              categoryOpen={indexOpen === 2}
              onToggle={
                () => setIndexOpen(indexOpen === 2 ? null : 2) // Toggle this category
              }
            />
            <div className=" flex items-center font-semibold justify-center pt-6 hover:text-blue-500 active:text-blue-500">
              <h1>Current Version:</h1>
              <h1>1.1</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarSmall;
