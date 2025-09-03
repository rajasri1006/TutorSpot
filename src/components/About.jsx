import React from "react";

export default function About() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">About TutorSpot</h2>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
        <strong>TutorSpot</strong> is a platform designed to connect students
        with qualified home tutors in their local area. Our goal is to make
        learning simple, personalized, and accessible for every student. Whether
        you are preparing for school exams, competitive tests, or want to
        strengthen subject knowledge, TutorSpot helps you find the right tutor
        who matches your requirements.
      </p>

      <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
        Students can search for tutors based on <strong>subject</strong> and{" "}
        <strong>location</strong>. Each tutor profile includes details such as
        name, qualification, specialization, and contact information. This makes
        it easy for parents and learners to select the most suitable tutor for
        their academic journey.
      </p>

      <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>
        Our mission is to create a trusted educational network that empowers
        students and provides opportunities for talented tutors to share their
        knowledge. With TutorSpot, learning is no longer limited by boundaries –
        it’s personalized, flexible, and just a click away.
      </p>
    </div>
  );
}
