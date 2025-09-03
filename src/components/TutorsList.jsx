// TutorsList.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import tutors from "./TutorsData"; // import the array you created

export default function TutorsList() {
  const location = useLocation();
  const { subject, location: searchLocation } = location.state || {};

  // Filter tutors
  const filteredTutors = tutors.filter((tutor) => {
    const subjectMatch = subject
      ? tutor.subject.toLowerCase().includes(subject.toLowerCase())
      : true;
    const locationMatch = searchLocation
      ? tutor.location.toLowerCase().includes(searchLocation.toLowerCase())
      : true;
    return subjectMatch && locationMatch;
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Available Tutors</h1>

      {filteredTutors.length > 0 ? (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Qualification</th>
              <th className="border border-gray-300 px-4 py-2">Location</th>
              <th className="border border-gray-300 px-4 py-2">Subject</th>
              <th className="border border-gray-300 px-4 py-2">Contact</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
            </tr>
          </thead>
          <tbody>
            {filteredTutors.map((tutor, index) => (
              <tr key={index} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{tutor.name}</td>
                <td className="border border-gray-300 px-4 py-2">{tutor.qualification}</td>
                <td className="border border-gray-300 px-4 py-2">{tutor.location}</td>
                <td className="border border-gray-300 px-4 py-2">{tutor.subject}</td>
                <td className="border border-gray-300 px-4 py-2">{tutor.contact}</td>
                <td className="border border-gray-300 px-4 py-2">{tutor.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-600">No tutors found for your search.</p>
      )}
    </div>
  );
}
