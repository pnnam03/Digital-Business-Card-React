import profileImage from "./profile-image.svg";
import emailIcon from "./email.svg";
import facebookIcon from "./facebook.svg";
import githubIcon from "./github.svg";
import linkedinIcon from "./linkedin.svg";
import instagramIcon from "./instagram.svg";
import twitterIcon from "./twitter.svg";
import linkedinIcon2 from "./Linkedin Icon.svg";
import React from "react";
import "./App.css";
function App() {
  return (
    <div className="body">
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      ></link>
      <div className="option1">
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
            <img src={githubIcon} alt="" className="icon"></img>
          </div>
        </div>
      </div>

      <div className="option2">
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
            <img src={linkedinIcon2} alt="" className="icon"></img>
            <img src={githubIcon} alt="" className="icon"></img>
          </div>
        </div>
      </div>

      <div className="option3">
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
            <img src={githubIcon} alt="" className="icon"></img>
          </div>
        </div>
      </div>

      <div className="option4">
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
            <img src={linkedinIcon2} alt="" className="icon"></img>
            <img src={githubIcon} alt="" className="icon"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
