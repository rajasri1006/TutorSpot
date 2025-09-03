// Display.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Display() {
  const navigate = useNavigate();
  const [subject, setSubject] = useState("");
  const [location, setLocation] = useState("");


  const handleSearch = (e) => {
    e.preventDefault(); // prevent page reload
    navigate("/tutorsList", { state: { subject, location } }); // go to Results page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Search Qualified Home Tutors</h1>

      <form onSubmit={handleSearch} className="flex w-full max-w-4xl">
        <input
          type="text"
          placeholder="Enter subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="flex-1 px-4 py-3 border rounded-l-xl"
        />
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="flex-1 px-4 py-3 border-t border-b"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-success text-white rounded-r-xl hover:bg-blue-700"
        >
           Search
        </button>
      </form>
    </div>
  );
}
