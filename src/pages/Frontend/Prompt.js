// import React, { useEffect, useState } from 'react';

// function App() {
//   const [message, setMessage] = useState('');  // Store the message
//   const [color, setColor] = useState('');      // Store the color of the message

//   useEffect(() => {
//     // Function to generate random color
//     const getRandomColor = () => {
//       const letters = '0123456789ABCDEF';
//       let color = '#';
//       for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//       }
//       return color;
//     };

//     // Set an interval to show the message and change the color every 1 minute (60000ms)

//     const intervalId1 = setInterval(() => {
//       window.toastify('Another Product Sold "THANKS❤"');
//       setColor(getRandomColor());  // Change the color
//     }, 5000);

//     const intervalId = setInterval(() => {
//       window.toastify('Another Product has been Sold "THANKS❤"');
//       setColor(getRandomColor());  // Change the color
//     }, 15000);




//     // Clear the interval when the component is unmounted
//     return () => clearInterval(intervalId , intervalId1);
//   }, []);

//   return (
//    <>
   
//    </>
//   );
// }

// export default App;








import React, { useState, useEffect } from 'react';
import { toast,  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  // Define an array of 5 messages
  const messages = [
     " Hello!",
    " How are you?",
    " Good morning!",
    " Have a great day!",
    "Goodbye!"
  ];

  useEffect(() => {
    let messageIndex = 0;

    const interval = setInterval(() => {
      // Show the current message as a toast
      toast(messages[messageIndex]);

      // Update the message index to loop back to the first message after the 5th
      messageIndex = (messageIndex + 1) % messages.length;
    }, 5000); // 5000ms = 5 seconds

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

