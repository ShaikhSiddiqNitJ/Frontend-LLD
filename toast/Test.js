import React from 'react';
import { UseNotificationHook } from './hook/UseNotificationHook';

export const Test = () => {
  const { NotificationComponent, triggerNotification } = UseNotificationHook('top-right'); // Correctly destructuring the returned object

  return (
    <>
      <div>toast component</div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          padding: '20px',
          width: '400px',
          border: '4px solid green',
          position: 'absolute',
          left: '20%',
          top: '20%',
        }}
      >
        {NotificationComponent} {/* Include the NotificationComponent here */}
        <button
          onClick={() =>
            triggerNotification({
              type: 'success',
              message: 'This is a success message!',
              duration: 3000,
              animation: 'pop',
            })
          }
          style={{ width: '180px', height: '40px' }}
        >
          Show success
        </button>
        <button
          onClick={() =>
            triggerNotification({
              type: 'info',
              message: 'This is an info message!',
              duration: 3000,
              animation: 'pop',
            })
          }
          style={{ width: '180px', height: '40px' }}
        >
          Show info
        </button>
        <button
          onClick={() =>
            triggerNotification({
              type: 'error',
              message: 'This is an error message!',
              duration: 3000,
              animation: 'pop',
            })
          }
          style={{ width: '180px', height: '40px' }}
        >
          Show error
        </button>
        <button
          onClick={() =>
            triggerNotification({
              type: 'warning',
              message: 'This is a warning message!',
              duration: 3000,
              animation: 'pop',
            })
          }
          style={{ width: '180px', height: '40px' }}
        >
          Show warning
        </button>
      </div>
    </>
  );
};
