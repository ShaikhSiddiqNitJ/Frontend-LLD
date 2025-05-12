import React, { useState } from "react";

const Test = () => {
  const [messages, setMessages] = useState([]);
  const [sender, setSender] = useState("You"); // Add sender toggle

  const handleSend = (text) => {
    if (text.trim() !== "") {
      setMessages((prev) => [...prev, { text, sender }]);
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: "auto" }}>
      <h2>Chat App</h2>

      {/* Sender Toggle */}
      <div style={{ marginBottom: 10 }}>
        <label>Sender: </label>
        <select value={sender} onChange={(e) => setSender(e.target.value)}>
          <option value="You">You</option>
          <option value="Friend">Friend</option>
        </select>
      </div>

      {/* Chat Box */}
      <div
        style={{
          border: "1px solid #ccc",
          height: "400px",
          overflowY: "auto",
          padding: "10px",
          marginBottom: "10px",
        }}
      >
        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={{
              textAlign: msg.sender === "You" ? "right" : "left",
              margin: "5px 0",
            }}
          >
            <span
              style={{
                background: msg.sender === "You" ? "#dcf8c6" : "#f1f0f0",
                padding: "8px 12px",
                borderRadius: "15px",
                display: "inline-block",
              }}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>

      <MessageInput onSend={handleSend} />
    </div>
  );
};

const MessageInput = ({ onSend }) => {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    onSend(text);
    setText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && text.trim() !== "") {
      handleSubmit();
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <input
        style={{ flex: 1, padding: "10px" }}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown} // Add Enter key handler here
        placeholder="Type a message..."
      />
      <button onClick={handleSubmit}>Send</button>
    </div>
  );
};

export default Test;
