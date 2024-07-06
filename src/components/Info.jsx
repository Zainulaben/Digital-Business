import React from "react";
import image from "../images/Mine.jpg";
import { MdEmail } from "react-icons/md";
import { BiLogoLinkedinSquare } from "react-icons/bi";

const Info = () => {
  return (
    <>
      <img src={image} alt='Image.jpg' />
      <div className='Name'>
        <h3>Muhammad Zain ul Abideen</h3>
        <h4>Software Engineer</h4>
      </div>
      <div className='social--button'>
        <a
          href='mailto:zainm2432003@gmail.com'
          className='email'
          target='_blank'
        >
          <MdEmail className='icon' />
          <span className='icon--text'>Email</span>
        </a>
        <a
          href='https://www.linkedin.com/in/zain688/'
          className='linkedin'
          target='_blank'
        >
          <BiLogoLinkedinSquare className='icon' />
          <span className='icon--text'>LinkedIn</span>
        </a>
      </div>
    </>
  );
};

export default Info;
