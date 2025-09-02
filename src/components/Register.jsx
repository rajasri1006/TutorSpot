import React, { useState } from "react";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    qualification: "",
    location: "",
    subjects: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can send data to backend here
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "#f8f9fa"
    }}>
      <form 
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          padding: "30px",
          border: "1px solid #ddd",
          borderRadius: "12px",
          width: "300px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "10px" }}>Register</h2>

        <label>
          Name
          <input 
            type="text" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginTop: "4px" }}
          />
        </label>

        <label>
          Qualification
          <input 
            type="text" 
            name="qualification" 
            value={formData.qualification}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginTop: "4px" }}
          />
        </label>

        <label>
          Location
          <input 
            type="text" 
            name="location" 
            value={formData.location}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginTop: "4px" }}
          />
        </label>

        <label>
          Subjects
          <input 
            type="text" 
            name="subjects" 
            value={formData.subjects}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginTop: "4px" }}
          />
        </label>

        <label>
          Email
          <input 
            type="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginTop: "4px" }}
          />
        </label>

        <label>
          Password
          <input 
            type="password" 
            name="password" 
            value={formData.password}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px", marginTop: "4px" }}
          />
        </label>

        <button 
          type="submit" 
          style={{
            padding: "10px",
            marginTop: "12px",
            backgroundColor: "green",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
