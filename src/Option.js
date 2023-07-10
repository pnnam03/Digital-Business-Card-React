import React from "react";
import profileImage from "./img/profile-image.svg";
import emailIcon from "./img/email.svg";
import facebookIcon from "./img/facebook.svg";
import githubIcon from "./img/github.svg";
import linkedinIcon from "./img/linkedin.svg";
import instagramIcon from "./img/instagram.svg";
import twitterIcon from "./img/twitter.svg";
import linkedinIcon2 from "./img/Linkedin Icon.svg";
import "./Option.css";

const Option = (props) => {
  return (
    <div className={props.name}>
    <div className="main-card">
        <div className="img">
            <img src={profileImage} alt="profile"></img>
          </div>

          <div className="description">
            <div className="type1">Laura Smith</div>
            <div className="type2">Frontend Developer</div>
            <div className="type3">laurasmith.website</div>
            <div>
              <button class="email-btn">
                <img src={emailIcon} alt="" className="email-icon">
                </img>
                Email
              </button>
              <button class="linkedin-btn">
                <img src={linkedinIcon} alt="" className="linkedin-icon">
                </img>
                LinkedIn
              </button>
            </div>

            <div className="group143">
              <div className="desc-title title1">About</div>
              <div className="desc-content content1">
                I am a frontend developer with a particular interest in making
                things simple and automating daily tasks. I try to keep up with
                security and best practices, and am always looking for new
                things to learn.
              </div>
              <div className="desc-title title2">Interests</div>
              <div className="desc-content content2">
                Food expert. Music scholar. Reader. Internet fanatic. Bacon
                buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee
                fanatic.
              </div>
            </div>
          </div>

          <div className="icons">
            <img src={twitterIcon} alt="" className="icon"></img>
            <img src={facebookIcon} alt="" className="icon"></img>
            <img src={instagramIcon} alt="" className="icon"></img>
            <img src={linkedinIcon2} alt="" className="icon linkedinIcon"></img>
            <img src={githubIcon} alt="" className="icon"></img>
            </div>
    </div>
    </div>
  );
};

export default Option;
