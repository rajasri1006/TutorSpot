// Display.jsx
import React from "react";

export default function Display() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Search Qualified Home Tutors
      </h1>

      {/* Search Row */}
      <div className="flex flex-centre w-full max-w-4xl">
        {/* Subject Input */}
        <input
          type="text"
          placeholder="Enter subject"
          className="flex-1 px-4 py-3 border rounded-l-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Location Input */}
        <input
          type="text"
          placeholder="Enter location"
          className="flex-1 px-4 py-3 border-t border-b border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Search Button */}
        <button className="px-6 py-3 bg-success text-white font-medium rounded-r-xl hover:bg-warning transition flex items-center">
           Search
        </button>
      </div>
    </div>
  );
}
