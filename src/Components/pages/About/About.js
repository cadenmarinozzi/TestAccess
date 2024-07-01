import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonArrow from "../../shared/ButtonArrow";
import { Link } from "react-router-dom";
import { createRef, useState } from "react";
import Arrow, { DIRECTION } from "react-arrows";

export default () => {
  const SebastianRef = createRef();
  const WhoAreWeRef = createRef();
  const CadenRef = createRef();
  const innerWidth = window.innerWidth;

  return (
    <div className="flex flex-col hero gap-10 my-10 sm:my-52 w-full items-center justify-center">
      <div className="flex flex-col sm:flex-row gap-24 sm:gap-10 justify-center items-center w-4/5">
        <div className="flex flex-col w-full items-center">
          <div className="flex flex-col gap-10 sm:pr-10 pr-0">
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-5 items-center justify-center">
                <h2 className="text-xl sm:text-2xl text-nowrap">
                  Sebastian Gillmore
                </h2>
                <span>Founder</span>
              </div>
              <div className="flex flex-row gap-3 justify-center">
                <a href="https://www.linkedin.com/in/caden-m">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
            <div
              className="flex flex-col gap-2 sm:pr-10 pr-0 w-full"
              ref={SebastianRef}
            >
              <p className="w-full">
                Sebastion has published an opinion piece in the LA Times, and
                been on TV in order to push for more SAT availability. He is the
                founder of TestAccess and is a student at Tamalpais High School.
              </p>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col order-first sm:order-none text-center gap-10 sm:mb-52 sm:pb-5 pb-0"
          ref={WhoAreWeRef}
        >
          <h1 className="text-2xl sm:text-4xl text-nowrap">Who are we?</h1>
          <p className="text-wrap">
            TestAccess is a student-led organization dedicated to increasing
            Collegeboard testing availability in California.
          </p>
        </div>
        {innerWidth >= 480 && (
          <>
            <Arrow
              className="arrow"
              from={{
                direction: DIRECTION.BOTTOM,
                node: () => WhoAreWeRef?.current,
                translation: [0, 0],
              }}
              to={{
                direction: DIRECTION.RIGHT,
                node: () => SebastianRef?.current,
                translation: [1, 0],
              }}
            />
            <Arrow
              className="arrow"
              from={{
                direction: DIRECTION.BOTTOM,
                node: () => WhoAreWeRef?.current,
                translation: [0, 0],
              }}
              to={{
                direction: DIRECTION.LEFT,
                node: () => CadenRef?.current,
                translation: [-1, 0],
              }}
            />
          </>
        )}
        <div className="flex flex-col w-full items-center">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2 sm:pl-10 pl-0">
              <div className="flex flex-row gap-3 items-center justify-center ">
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
            <div
              className="flex flex-col gap-2 sm:pl-10 pl-0 w-full"
              ref={CadenRef}
            >
              <p className="w-full">
                Caden is a software engineer and a student at Tamalpais High
                School, and is the developer of TestAccess. He is crucial in
                TestAccess's mission of widening SAT availability in Marin
                County.
              </p>
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-primary">
        <Link to="/our-mission">
          <span>Learn about our mission</span>
        </Link>
        <ButtonArrow />
      </button>
    </div>
  );
};
