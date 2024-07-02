import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonArrow from "../../shared/ButtonArrow";
import { Link } from "react-router-dom";
import { createRef, useState } from "react";
import Arrow, { DIRECTION } from "react-arrows";
import SebastianHeadshot from "../../../assets/images/headshots/SebastianHeadshot.jpg";
import CadenHeadshot from "../../../assets/images/headshots/CadenHeadshot.jpg";

export default () => {
  const SebastianRef = createRef();
  const WhoAreWeRef = createRef();
  const CadenRef = createRef();
  const innerWidth = window.innerWidth;

  return (
    <div className="flex flex-col hero gap-10 my-10 w-full items-center justify-center">
      <div className="flex flex-col sm:flex-row gap-24 sm:gap-10 justify-center items-center w-4/5">
        <div className="flex flex-col w-full items-center" ref={SebastianRef}>
          <div className="flex flex-col gap-10 items-center">
            <div className="flex flex-col gap-2 items-center">
              <img src={SebastianHeadshot} className="w-2/3" />
              <div className="flex flex-row gap-5 items-center justify-center pt-10">
                <h2 className="text-xl sm:text-2xl text-nowrap">
                  Sebastian Gillmore
                </h2>
                <span>Founder</span>
              </div>
              <div className="flex flex-row gap-3 justify-center items-center">
                <a href="https://www.linkedin.com/in/caden-m">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://www.latimes.com/opinion/story/2024-05-31/sat-test-college-board-exams-applications">
                  <img
                    width={15}
                    height={25}
                    src="https://www.vectorlogo.zone/logos/latimes/latimes-icon.svg"
                  />
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <p className="w-full text-center sm:text-left">
                Sebastion has published an opinion piece in the LA Times and
                been featured on TV with the objective od pushing for more SAT
                availability. He is the founder of TestAccess and is a student
                at Tamalpais High School.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col order-first sm:order-none text-center gap-10 sm:mb-52 sm:pb-5 pb-0">
          <h1 className="text-2xl sm:text-4xl text-nowrap">Who are we?</h1>
          <p className="text-wrap" ref={WhoAreWeRef}>
            TestAccess is a student-led organization dedicated to increasing
            standardized testing availability in California.
          </p>
          <Link to="/our-mission">
            <button className="btn btn-primary flex-nowrap text-nowrap">
              <span>Learn about our mission</span>
              <ButtonArrow />
            </button>
          </Link>
        </div>
        {/* {innerWidth >= 480 &s */}
        <div className="flex flex-col w-full items-center" ref={CadenRef}>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2 items-center">
              <img src={CadenHeadshot} className="w-2/3" />
              <div className="flex flex-row gap-3 items-center justify-center pt-10 ">
                <h2 className="text-xl sm:text-2xl text-nowrap">
                  Caden Marinozzi
                </h2>
                <span>CTO</span>
              </div>
              <div className="flex flex-row gap-3 justify-center">
                <a href="https://www.linkedin.com/in/caden-m">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://www.github.com/cadenmarinozzi">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <p className="w-full text-center sm:text-left">
                Caden is a software engineer and a student at Tamalpais High
                School, and is the developer of TestAccess. He is crucial in
                TestAccess's mission of widening SAT availability in California.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
