import React from "react";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className='footer--icons'>
        <a href='https://x.com/zain_abide96540' target='_blank'>
          <FaTwitterSquare className='icon' />
        </a>
        <a
          href='https://www.facebook.com/profile.php?id=100041201747717'
          target='_blank'
        >
          <FaFacebookSquare className='icon' />
        </a>
        <a href='https://www.instagram.com/zainulabideen510/' target='_blank'>
          <FaInstagramSquare className='icon' />
        </a>
        <a href='https://github.com/Zainulaben/' target='_blank'>
          <FaGithubSquare className='icon' />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
