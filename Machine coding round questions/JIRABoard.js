import React, { useState } from "react";

const initialData = {
  todo: [
    { id: "1", text: "Design Login Page" },
    { id: "2", text: "Setup Backend API" }
  ],
  inprogress: [
    { id: "3", text: "Dashboard UI Work" }
  ],
  done: [
    { id: "4", text: "Project Setup" }
  ]
};

export default function App() {
  const [columns, setColumns] = useState(initialData);
  const [draggedTask, setDraggedTask] = useState(null);

  const handleDragStart = (e, task, sourceCol) => {
    setDraggedTask({ task, sourceCol });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetCol) => {
    if (!draggedTask) return;

    const { task, sourceCol } = draggedTask;

    if (sourceCol === targetCol) return;

    const newSource = columns[sourceCol].filter(t => t.id !== task.id);
    const newTarget = [...columns[targetCol], task];

    setColumns({
      ...columns,
      [sourceCol]: newSource,
      [targetCol]: newTarget
    });

    setDraggedTask(null);
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      padding: "20px",
      backgroundColor: "#f0f2f5",
      minHeight: "100vh",
      fontFamily: "sans-serif"
    }}>
      {Object.entries(columns).map(([colName, tasks]) => (
        <div
          key={colName}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, colName)}
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            width: "250px",
            minHeight: "400px",
            padding: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
          }}
        >
          <h2 style={{
            textAlign: "center",
            color: "#333"
          }}>
            {colName.toUpperCase()}
          </h2>
          {tasks.map(task => (
            <div
              key={task.id}
              draggable
              onDragStart={(e) => handleDragStart(e, task, colName)}
              style={{
                backgroundColor: "#1976d2",
                color: "white",
                padding: "12px",
                borderRadius: "4px",
                marginBottom: "10px",
                cursor: "grab",
                transition: "background 0.2s ease"
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.backgroundColor = "#0d47a1";
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.backgroundColor = "#1976d2";
              }}
            >
              {task.text}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
