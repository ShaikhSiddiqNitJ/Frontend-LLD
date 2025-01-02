import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      {/* Button to open the modal */}
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      {/* Modal */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={() => setIsOpen(false)}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              width: "400px",
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <span
              style={{
                position: "absolute",
                top: "10px",
                right: "20px",
                fontSize: "24px",
                fontWeight: "bold",
                cursor: "pointer",
                color: "#aaa",
              }}
              onMouseEnter={(e) => (e.target.style.color = "red")}
              onMouseLeave={(e) => (e.target.style.color = "#aaa")}
              onClick={() => setIsOpen(false)}
            >
              &times;
            </span>
            <h2>Modal Header</h2>
            <p>This is a sample modal with navigation functionality.</p>

            {/* Navigate to previous page button */}
            <button
              onClick={() => navigate(-1)} // Navigate to the previous page
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                backgroundColor: "#007BFF",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Go Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
