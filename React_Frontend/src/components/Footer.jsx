import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white py-1 text-center">
  <div className="container mx-auto">
    <div className="text-lg">
      <p className="mb-4">
      <FontAwesomeIcon icon={faCopyright} />2023, Bookstagram, Inc.</p>
    </div>
    <div className="mb-4">
    <p className="mb-4">Quickies : 
      <a href="#" className="text-gray-300 hover:text-white hover:underline mx-2">
        Privacy Policy
      </a>
      <a href="#" className="text-gray-300 hover:text-white hover:underline mx-2">
        FAQ's
      </a>
      <a href="#" className="text-gray-300 hover:text-white hover:underline mx-2">
        Terms and Conditions
      </a>
      </p>
      <a href="https://www.facebook.com/" className="text-gray-300 hover:text-white hover:underline mx-2">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="https://www.instagram.com/" className="text-gray-300 hover:text-white hover:underline mx-2">
      <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="https://www.twitter.com/" className="text-gray-300 hover:text-white hover:underline mx-2">
      <FontAwesomeIcon icon={faTwitter}/>
      </a>
      <a href="https://www.linkedin.com/" className="text-gray-300 hover:text-white hover:underline mx-2">
      <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
  </div>
</footer>

  );
}

export default Footer;
