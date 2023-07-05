import React from "react";
import "../css/Home.css";
import Navbar from "./Navbar";
import link from "../static/link.png";
import wave from "../static/wave.png";

export default function Home() {
  const shareSquareClicked = () => {
    window.open("https://sharesquare.onrender.com/");
  };
  const driveToPayClicked = () => {
    window.open("https://github.com/aryanshs/DriveToPay");
  };
  const securitySensorClicked = () => {
    window.open("https://github.com/aryanshs/CSE321_Project3");
  };
  return (
    <div className="homeContainer">
      <div className="headingDiv">
        <div className="heading">
          <h1>Hey, I am Aryansh</h1>
          <img className="waveImage" src={wave} alt="wave icon" />
        </div>
        <div className="italicLocationDiv">
          <p>Software Engineer based in Buffalo, NY</p>
        </div>

        <div className="shortIntroDiv">
          <p className="descriptionParagraph">
            I love creating <span>Applications</span> and bringing{" "}
            <span>Ideas</span> to life, check out some of my work below!
          </p>
        </div>
      </div>
      <div className="lowerBodyDIv">
        <div className="workExperienceDiv">
          <h3>Work Experience</h3>
          <hr />
          <div className="workExpOne">
            <h4 className="title">
              Software Engineer Intern <span>- WTW</span>
            </h4>
            <p className="desc">
              Building full stack software using C#, .NET COre,<br></br>{" "}
              Angular, SQL Server, and Azure technologies.
            </p>
          </div>
          <div className="workExpTwo">
            <h4 className="title">
              Software Engineer Intern <span>- NomanIT</span>
            </h4>
            <p className="desc">
              Built new and robust web applications using Angular,<br></br>{" "}
              Typescript, and Java
            </p>
          </div>
          <div className="workExpThree">
            <h4 className="title">
              Student Software Engineer <span>- CCR, UB</span>
            </h4>
            <p className="desc">
              Helped faculty staff with all things linus, running<br></br>{" "}
              docker containers for reasearch, and customizing<br></br> software
              and website for better user experience.
            </p>
          </div>
        </div>
        <div className="projectsDiv">
          <h3>Projects</h3>
          <hr />
          <div className="projectOne" onClick={shareSquareClicked}>
            <h4 className="ptitle">
              Sharesquare<span> - Founder</span>
            </h4>

            <p className="desc">
              Sharesquare is a campus-based marketplace<br></br> app designed
              for college students to buy and sell <br></br>goods, offer
              services, and connect with peers on campus.
            </p>
          </div>
          <div className="projectTwo" onClick={driveToPayClicked}>
            <h4 className="ptitle">DriveToPay</h4>
            <p className="desc">
              A blockchain app created to help people pay for their <br></br>{" "}
              meal or parking ticket through their car's number plate
            </p>
          </div>
          <div className="projectThree" onClick={securitySensorClicked}>
            <h4 className="ptitle">Security Sensor</h4>
            <p className="desc">
              A prototype security sensor that calls the authorities <br></br>if
              a sound is deteced a number of times
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
