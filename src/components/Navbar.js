import React, { useState } from "react";
import "../css/Navbar.css";
import gitHubLogo from "../static/github3.png";
import linkedInLogo from "../static/linkedin.png";
import resumePdf from "../static/resume.pdf";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const [showResume, setShowResume] = useState(false);

  const onGitClick = () => {
    window.open("https://github.com/aryanshs");
  };

  const onLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/aryansh-sharma-91a452129/");
  };

  const resumeClicked = () => {
    setShowResume(true);
  };
  const handleCloseClick = () => {
    setShowResume(false);
  };
  return (
    <div className="navbarContainer">
      <nav className="navbarRow">
        <ul className="leftNav">
          <img
            className="gitHubLogo"
            src={gitHubLogo}
            alt="github logo"
            onClick={onGitClick}
          />
          <img
            className="linkedInLogo"
            src={linkedInLogo}
            alt="linkedin logo"
            onClick={onLinkedInClick}
          />
          <li className="resume" onClick={resumeClicked}>
            Resume
          </li>
        </ul>
      </nav>
      {showResume && (
        <div className="resumeDiv">
          <button onClick={handleCloseClick}>Close</button>
          <iframe
            className="resumeIframe"
            src={resumePdf}
            title="Resume"
            style={{ display: "block", width: "100%", height: "700px" }}
          />
        </div>
      )}
    </div>
  );
}
