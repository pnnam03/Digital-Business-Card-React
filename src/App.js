import profileImage from "./profile-image.png";
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
              <button>Email</button>
              <button>LinkedIn</button>
            </div>

            <div>
              <h2>About</h2>
              <h4 className="content">
                I am a frontend developer with a particular interest in making
                things simple and automating daily tasks. I try to keep up with
                security and best practices, and am always looking for new
                things to learn.
              </h4>
              <h2>Interests</h2>
              <h4 className="content">
                Food expert. Music scholar. Reader. Internet fanatic. Bacon
                buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee
                fanatic.
              </h4>
            </div>
          </div>

          <div className="icons"></div>
        </div>
      </div>

      <div className="option2">
        <div className="main-card">
          <div className="img">
            <img src={profileImage} alt="profile"></img>
          </div>
        </div>

        <div className="description"></div>
        <div className="icons"></div>
      </div>

      <div className="option3">
        <div className="main-card">
          <div className="img">
            <img src={profileImage} alt="profile"></img>
          </div>
        </div>

        <div className="description"></div>
        <div className="icons"></div>
      </div>

      <div className="option4">
        <div className="main-card">
          <div className="img">
            <img src={profileImage} alt="profile"></img>
          </div>
        </div>

        <div className="description"></div>
        <div className="icons"></div>
      </div>
    </div>
  );
}

export default App;
