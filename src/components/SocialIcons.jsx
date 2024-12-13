import React from 'react';

const SocialIcons = () => {
  return (
    <div className="d-flex justify-content-center align-items-center gap-5">

      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-light"
        aria-label="Instagram"
      >
        <i className="bi bi-instagram" style={{ fontSize: '1.5rem' }}></i>
      </a>


      <a
        href="https://whatsapp.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-light"
        aria-label="WhatsApp"
      >
        <i className="bi bi-whatsapp" style={{ fontSize: '1.5rem' }}></i>
      </a>


      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-light"
        aria-label="Twitter"
      >
        <i className="bi bi-twitter" style={{ fontSize: '1.5rem' }}></i>
      </a>


      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-light"
        aria-label="Facebook"
      >
        <i className="bi bi-facebook" style={{ fontSize: '1.5rem' }}></i>
      </a>
    </div>
  );
};

export default SocialIcons;
