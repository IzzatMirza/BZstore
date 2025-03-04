

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebookF, faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons';



const ZocialIcons = () => {
  // Inline styles for the header
  const headerStyle = {
    position: 'sticky',
    top: 0,
    backgroundColor: '#333',
    color: 'white',
    padding: '10px 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    zIndex: 1000, // Ensures the header is on top
  };

  const iconContainerStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '50%',
  };

  const iconStyle = {
    fontSize: '24px', // Size of the icons
    textDecoration: 'none', // No underline for links
    color: 'white', // Default icon color
  };



  return (
    <header style={headerStyle}>
      <div style={iconContainerStyle}>
        {/* WhatsApp */}
        <a
          href="https://chat.whatsapp.com/CvQq32Fs1kU0rBW07RtReE"
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...iconStyle, color: '#25D366' }} // WhatsApp brand color
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/profile.php?id=61572985407458&mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...iconStyle, color: '#1877F2' }} // Facebook brand color
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </a>

        {/* TikTok */}
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...iconStyle, color: 'white' }} // TikTok brand color (black)
        >
          <FontAwesomeIcon icon={faTiktok} />
        </a>

        {/* Instagram */}
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...iconStyle, color: 'orange' }} // Instagram brand color
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </header>
  );
};

export default ZocialIcons;
