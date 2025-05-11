import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [workList, setWorkList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleSave = () => {
    if (title.trim() === "") return;

    if (editIndex !== null) {
      const updatedList = [...workList];
      updatedList[editIndex] = title;
      setWorkList(updatedList);
      setEditIndex(null);
    } else {
      setWorkList([...workList, title]);
    }
    setTitle("");
  };

  const handleEdit = (index) => {
    setTitle(workList[index]);
    setEditIndex(index);
  };

  const handleRemove = (index) => {
    const filtered = workList.filter((_, i) => i !== index);
    setWorkList(filtered);
    if (editIndex === index) {
      setEditIndex(null);
      setTitle("");
    } else if (editIndex > index) {
      setEditIndex(editIndex - 1);
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h2 style={{ fontSize: "24px", color: "#333" }}>ToDo List</h2>

      <div style={{ marginBottom: "15px" }}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task"
          style={{
            width: "250px",
            height: "30px",
            padding: "5px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginRight: "10px",
            outline: editIndex !== null ? "2px solid orange" : "none",
          }}
        />
        <button
          onClick={handleSave}
          style={{
            width: "80px",
            height: "35px",
            cursor: "pointer",
            borderRadius: "5px",
            border: "none",
            backgroundColor: editIndex !== null ? "#FFA500" : "#4CAF50",
            color: "white",
            fontWeight: "bold",
          }}
        >
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>

      {workList.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "400px",
            margin: "auto",
            marginBottom: "10px",
            padding: "10px",
            border: "1px solid #ddd",
            borderRadius: "5px",
          }}
        >
          <span>{item}</span>
          <div>
            <button
              onClick={() => handleEdit(index)}
              style={{
                marginRight: "8px",
                padding: "4px 10px",
                backgroundColor: "#2196F3",
                color: "white",
                border: "none",
                borderRadius: "3px",
                cursor: "pointer",
              }}
            >
              Edit
            </button>
            <button
              onClick={() => handleRemove(index)}
              style={{
                padding: "4px 10px",
                backgroundColor: "#f44336",
                color: "white",
                border: "none",
                borderRadius: "3px",
                cursor: "pointer",
              }}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
