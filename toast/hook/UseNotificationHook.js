import React, { useCallback, useState, useRef } from 'react';
import { Notification } from '../components/Notification';

export const UseNotificationHook = (position = 'top-right') => {
  const [notification, setNotification] = useState(null);
  const timer = useRef(null); // Use useRef to persist the timer across renders

  const triggerNotification = useCallback((notificationProps) => {
    if (timer.current) {
      clearTimeout(timer.current); // Clear the previous timer
    }

    setNotification(notificationProps);

    // Set a new timer
    timer.current = setTimeout(() => {
      setNotification(null);
    }, notificationProps.duration);
  }, []); // The dependency array remains empty as we don't rely on external variables

  const NotificationComponent = notification ? (
    <div>
      <Notification {...notification} />
    </div>
  ) : null;

  return { NotificationComponent, triggerNotification };
};
