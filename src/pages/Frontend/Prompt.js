import React, { useState, useEffect } from 'react';
import { toast,  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  // Define an array of 5 messages
  const messages = [
    "923075609811 Thanks for Shopping",
    "923057790007 Thanks for Shopping ",
    "Ahmad Thanks for Shopping ",
    "Rana Thanks for Shopping ",
    "Ayesha Thanks for Shopping ",
    "000777 Thanks for Shopping ",
    "Qasim Thanks for Shopping ",
    "Saim Thanks for Shopping ",
    "923278956144 Thanks for Shopping ",
    "12345 Thanks for Shopping ",
    "Arshad Thanks for Shopping ",
    "Iqra Thanks for Shopping ",
    "Mishal Thanks for Shopping ",
    "Arham  Thanks for Shopping ",
    "Komal Thanks for Shopping ",

    "Kinza Thanks for Shopping ",
    "Zahid Thanks for Shopping  ",
    "MInahil Thanks for Shopping ",
    "923049011122 Thanks for Shopping "

  ];

  useEffect(() => {
    let messageIndex = 0;

    const interval = setInterval(() => {
      // Show the current message as a toast
      toast(messages[messageIndex]);

      // Update the message index to loop back to the first message after the 5th
      messageIndex = (messageIndex + 1) % messages.length;
    }, 15000); // 5000ms = 5 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div>
      {/* <h1>Message Loop with Toast Notifications</h1> */}

      {/* ToastContainer to render the toasts */}
{/* <ToastContainer/>       */}
    </div>
  );
};

export default App;

