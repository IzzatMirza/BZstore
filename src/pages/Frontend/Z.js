import React, { useState, useEffect } from 'react';

const SpinGame = () => {
  // State variables
  const [phoneNumber, setPhoneNumber] = useState('');
  const [hasPlayed, setHasPlayed] = useState(false);
  const [userBalance, setUserBalance] = useState(100); // Example initial balance
  const [bonus, setBonus] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [message, setMessage] = useState('');

  // Check if user has already played
  useEffect(() => {
    const played = localStorage.getItem('hasPlayed');
    if (played === 'true') {
      setHasPlayed(true);
      setMessage('You have already played the game!');
    }
  }, []);

  // Handle phone number input
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  // Handle phone number submission
  const handlePhoneSubmit = () => {
    if (phoneNumber === '') {
      setMessage('Please enter your phone number.');
      return;
    }
    localStorage.setItem('phoneNumber', phoneNumber); // Store phone number
    setMessage('Phone number saved. You can now spin the wheel.');
  };

  // Handle the spin action
  const handleSpin = () => {
    if (hasPlayed) {
      setMessage('You have already played this game.');
      return;
    }

    if (phoneNumber === '') {
      setMessage('Please enter your phone number first.');
      return;
    }

    setIsSpinning(true);
    setMessage('Spinning... Please wait.');

    setTimeout(() => {
      const bonuses = [0, 2, 5, 10]; // Bonus percentages
      const randomBonus = bonuses[Math.floor(Math.random() * bonuses.length)];
      setBonus(randomBonus);
      setUserBalance((prevBalance) => prevBalance + (prevBalance * randomBonus) / 100); // Add bonus to balance
      setIsSpinning(false);
      setMessage(`You won ${randomBonus}% bonus! Your new balance is: $${userBalance + (userBalance * randomBonus) / 100}`);
      setHasPlayed(true);
      localStorage.setItem('hasPlayed', 'true'); // Mark user as having played the game
    }, 2000); // Simulate spinning for 2 seconds
  };

  return (
    <div style={styles.container}>
      <h1>Spin the Wheel - Online Store Game</h1>

      {/* Phone number section */}
      {!hasPlayed && !phoneNumber && (
        <div style={styles.phoneNumberSection}>
          <h3>Enter Your Phone Number:</h3>
          <input
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="Enter phone number"
            style={styles.input}
          />
          <button onClick={handlePhoneSubmit} style={styles.submitButton}>Submit</button>
        </div>
      )}

      {/* Spin Game Section */}
      {!hasPlayed && phoneNumber && (
        <div style={styles.gameSection}>
          <h3>Your Store Balance: ${userBalance}</h3>
          <button onClick={handleSpin} disabled={isSpinning} style={styles.spinButton}>
            {isSpinning ? 'Spinning...' : 'Spin the Wheel'}
          </button>
        </div>
      )}

      {/* Game Result Section */}
      {bonus !== null && !isSpinning && (
        <div style={styles.resultSection}>
          <h3>You won: {bonus}% bonus</h3>
        </div>
      )}

      {/* Message Section */}
      {message && (
        <div style={styles.messageSection}>
          <h4>{message}</h4>
        </div>
      )}
    </div>
  );
};

// Styling
const styles = {
  container: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    backgroundColor: '#f4f4f4',
  },
  phoneNumberSection: {
    marginBottom: '30px',
  },
  gameSection: {
    marginTop: '30px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '200px',
  },
  submitButton: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  spinButton: {
    padding: '15px 30px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  resultSection: {
    marginTop: '20px',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#28a745',
  },
  messageSection: {
    marginTop: '20px',
    fontSize: '18px',
    color: '#dc3545',
  },
};

export default SpinGame;
