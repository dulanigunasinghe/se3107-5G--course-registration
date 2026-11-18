
import { useState } from "react";

function App() {
  const [studentName, setStudentName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [courseName, setCourseName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  const wrapperStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#0f172a",
    padding: "20px",
    boxSizing: "border-box"
  };

  const cardStyle = {
    width: "100%",
    maxWidth: "600px",
    padding: "40px",
    backgroundColor: "#1e293b",
    borderRadius: "16px",
    color: "#f8fafc",
    fontFamily: "system-ui, sans-serif",
    boxShadow: "0 20px 25px -5px rgba(0,0,0,0.4)",
    boxSizing: "border-box"
  };

  const formRowStyle = {
    display: "grid",
    gridTemplateColumns: "120px 1fr",
    alignItems: "center",
    gap: "15px",
    marginBottom: "24px"
  };

  const labelStyle = {
    fontSize: "15px",
    color: "#94a3b8",
    fontWeight: "500"
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 16px",
    backgroundColor: "#334155",
    border: "1px solid #475569",
    borderRadius: "8px",
    color: "#fff",
    fontSize: "16px",
    boxSizing: "border-box",
    outline: "none"
  };

  const buttonStyle = {
    width: "100%",
    padding: "14px",
    backgroundColor: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    marginTop: "12px"
  };

  return (
    <div style={wrapperStyle}>
      <div style={cardStyle}>

        <h1 style={{
          fontSize: "26px",
          textAlign: "center",
          marginTop: 0,
          marginBottom: "40px",
          color: "#fff",
          fontWeight: "700"
        }}>
          University Course Registration System
        </h1>

        <form onSubmit={handleSubmit}>

          {/* Student Name */}
          <div style={formRowStyle}>
            <label style={labelStyle}>
              Student Name
            </label>

            <input
              type="text"
              style={inputStyle}
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="Enter Student Name"
              required
            />
          </div>

          {/* Student ID */}
          <div style={formRowStyle}>
            <label style={labelStyle}>
              Student ID
            </label>

            <input
              type="text"
              style={inputStyle}
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              placeholder="Enter Student ID"
              required
            />
          </div>

          {/* Course Name */}
          <div style={formRowStyle}>
            <label style={labelStyle}>
              Course Name
            </label>

            <input
              type="text"
              style={inputStyle}
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              placeholder="Enter Course Name"
              required
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) =>
              e.target.style.backgroundColor = "#1d4ed8"
            }
            onMouseOut={(e) =>
              e.target.style.backgroundColor = "#2563eb"
            }
          >
            Register
          </button>

        </form>

      </div>
    </div>
  );
}

export default App;
