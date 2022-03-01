/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.facebook.com/handikater.handikater.5"
        target="_blank"
      >
        <FaFacebookSquare />
      </a>
      <a
        href="https://www.instagram.com/p/CSZOPxeBecF/?utm_medium=copy_link"
        target="_blank"
      >
        <FaInstagramSquare />
      </a>
      <a
        href="https://www.linkedin.com/in/handika-sutajaba-98b5a115b"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/handikasutajaba" target="_blank">
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
