import React, { useState } from "react";
import Lang from "../../assets/countryPic.a405156e5e231114f17b.webp";
import SignUp from "../../assets/download.png";

const HeaderSection = ({
  setSidebarOpen,
  sidebarOpen,
  setMobileSideBar,
  mobilesidebar,
}) => {
  const [dropOpen, setDropOpen] = useState(false);
  return (
    <div className="bg-[#F8F8F8] w-full max-w-10xl px-6 flex items-center justify-between h-16 sticky top-0 z-50">
      <div className="flex items-center gap-2 ">
        <a href="#" className="flex items-center gap-x-3">
          <h1 className="text-3xl font-semibold ">Hammad's Dashboard</h1>
        </a>
        <svg
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="hidden lg:block h-7 w-7 text-gray-800"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="currentColor"
        >
          <path d="M21 17.9995V19.9995H3V17.9995H21ZM6.59619 3.90332L8.01041 5.31753L4.82843 8.49951L8.01041 11.6815L6.59619 13.0957L2 8.49951L6.59619 3.90332ZM21 10.9995V12.9995H12V10.9995H21ZM21 3.99951V5.99951H12V3.99951H21Z" />
        </svg>
        <svg
          onClick={() => setMobileSideBar(!mobilesidebar)}
          className="lg:hidden h-7 w-7 text-gray-800"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="currentColor"
        >
          <path d="M21 17.9995V19.9995H3V17.9995H21ZM6.59619 3.90332L8.01041 5.31753L4.82843 8.49951L8.01041 11.6815L6.59619 13.0957L2 8.49951L6.59619 3.90332ZM21 10.9995V12.9995H12V10.9995H21ZM21 3.99951V5.99951H12V3.99951H21Z" />
        </svg>
      </div>
      <div className="flex items-center gap-3 ">
        <div>
          <img className="h-5 rounded-full" src={Lang} alt="" />
        </div>
        <div>
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
            <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </div>
        <div>
          <button
            onClick={() => setDropOpen(!dropOpen)}
            className="flex items-center gap-1"
          >
            <img className="h-5 w-5 rounded-full" src={SignUp} alt="" />
            <h5 className="font-semibold">Hammad Ashraf</h5>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="18"
              height="18"
              fill="currentColor"
            >
              <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />
            </svg>
          </button>
        </div>
        {dropOpen && (
          <div className="bg-white absolute top-15 right-8 rounded-lg z-70 shadow-sm  shadow-black">
            <ul className="">
              <li className="flex items-center rounded-lg px-4 py-2 font-semibold border-b  text-gray-700 hover:text-gray-900 hover:bg-[#F8F8F8]">
                <svg
                  className="w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.866 0-7 2.239-7 5v1h14v-1c0-2.761-3.134-5-7-5z" />
                </svg>
                <span className="">Profile</span>
              </li>
              <li className="flex items-center rounded-lg px-4 py-2  font-semibold border-b text-gray-700 hover:text-gray-900 hover:bg-[#F8F8F8]">
                <svg
                  className="w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19.14,12.94a7.14,7.14,0,0,0,0-1.88l2.11-1.65a.5.5,0,0,0,.12-.63l-2-3.46a.5.5,0,0,0-.6-.22l-2.49,1a7,7,0,0,0-1.62-.94L14.5,2.5a.5.5,0,0,0-.5-.5H10a.5.5,0,0,0-.5.5L9.34,5.16a7,7,0,0,0-1.62.94l-2.49-1a.5.5,0,0,0-.6.22l-2,3.46a.5.5,0,0,0,.12.63l2.11,1.65a7.14,7.14,0,0,0,0,1.88L2.86,14.59a.5.5,0,0,0-.12.63l2,3.46a.5.5,0,0,0,.6.22l2.49-1a7,7,0,0,0,1.62.94L9.5,21.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5l.16-2.66a7,7,0,0,0,1.62-.94l2.49,1a.5.5,0,0,0,.6-.22l2-3.46a.5.5,0,0,0-.12-.63Zm-7.14,2.06a3,3,0,1,1,3-3A3,3,0,0,1,12,15Z" />
                </svg>
                <span>Settings</span>
              </li>
              <li className="flex items-center rounded-lg px-4 py-2 font-semibold  text-gray-700 hover:text-gray-900 hover:bg-[#F8F8F8]">
                <svg
                  className="w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M16 13v-2H7V8l-5 4 5 4v-3h9zm3-11H10a2 2 0 0 0-2 2v4h2V4h9v16h-9v-4H8v4a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
                </svg>
                <span>Logout</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderSection;
