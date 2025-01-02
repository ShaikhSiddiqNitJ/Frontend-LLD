import React, { useState, useRef, useEffect } from "react";

const Popover = ({ content, children, position = "bottom" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const popoverRef = useRef(null);
  const triggerRef = useRef(null);

  // Toggle popover visibility
  const togglePopover = () => setIsVisible((prev) => !prev);

  // Hide popover when clicking outside
  const handleClickOutside = (event) => {
    if (
      popoverRef.current &&
      !popoverRef.current.contains(event.target) &&
      !triggerRef.current.contains(event.target)
    ) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Determine position style
  const getPopoverStyle = () => {
    if (!triggerRef.current || !popoverRef.current) return {};
    const triggerRect = triggerRef.current.getBoundingClientRect();
    const popoverRect = popoverRef.current.getBoundingClientRect();

    const styles = {
      top: { left: triggerRect.left, top: triggerRect.top - popoverRect.height - 10 },
      bottom: { left: triggerRect.left, top: triggerRect.bottom + 10 },
      left: { left: triggerRect.left - popoverRect.width - 10, top: triggerRect.top },
      right: { left: triggerRect.right + 10, top: triggerRect.top },
    };

    return styles[position] || styles.bottom;
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {/* Trigger element */}
      <button
        ref={triggerRef}
        onClick={togglePopover}
        style={{
          padding: "10px 15px",
          cursor: "pointer",
          border: "1px solid #ccc",
          borderRadius: "5px",
          background: "#f9f9f9",
        }}
      >
        {children}
      </button>

      {/* Popover content */}
      {isVisible && (
        <div
          ref={popoverRef}
          style={{
            position: "absolute",
            ...getPopoverStyle(),
            background: "#fff",
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "10px",
            zIndex: 1000,
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Popover