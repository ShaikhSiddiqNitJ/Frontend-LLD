import React, { useState } from 'react';

const DayCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState({});

  // Get the days of the month for the current month
  const getDaysInMonth = () => {
    const days = [];
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const lastDateOfMonth = new Date(year, month + 1, 0).getDate();

    // Fill the days array with blank spaces for the first row before the 1st day
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }

    // Fill the days of the month
    for (let i = 1; i <= lastDateOfMonth; i++) {
      days.push(i);
    }

    return days;
  };

  // Handle the next and previous month
  const changeMonth = (direction) => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + direction)));
  };

  // Add event for selected date
  const addEvent = (date) => {
    const eventText = prompt(`Add an event for ${date}`);
    if (eventText) {
      setEvents({
        ...events,
        [date]: eventText
      });
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <button onClick={() => changeMonth(-1)}>&lt;</button>
        <h2>{currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}</h2>
        <button onClick={() => changeMonth(1)}>&gt;</button>
      </div>
      <div style={styles.grid}>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} style={styles.dayHeader}>
            {day}
          </div>
        ))}
        {getDaysInMonth().map((day, index) => (
          <div
            key={index}
            style={styles.dayCell}
            onClick={() => day && addEvent(day)}
          >
            {day ? (
              <div style={styles.dayContent}>
                <span>{day}</span>
                {events[day] && <div style={styles.event}>{events[day]}</div>}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

// Calendar Styles
const styles = {
  container: {
    width: '300px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gridTemplateRows: 'auto',
    gap: '5px',
  },
  dayHeader: {
    fontWeight: 'bold',
    padding: '5px',
    backgroundColor: '#f0f0f0',
  },
  dayCell: {
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    border: '1px solid #ddd',
    backgroundColor: '#fff',
  },
  dayContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  event: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    padding: '2px 5px',
    fontSize: '10px',
    borderRadius: '5px',
    marginTop: '5px',
  },
};

export default DayCalendar;
