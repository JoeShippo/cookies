import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = "1234567890"; // Replace with the actual phone number, in international format without '+'
  const message = "Hello, I'm interested in your services!"; // Customize your message here

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div
      onClick={openWhatsApp}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '60px',
        height: '60px',
        backgroundColor: '#25D366',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        zIndex: 1000,
      }}
      title="Chat with us on WhatsApp"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        style={{ width: '30px', height: '30px' }}
      />
    </div>
  );
};

export default WhatsAppButton;