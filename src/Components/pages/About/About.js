import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonArrow from "../../shared/ButtonArrow";
import { Link } from "react-router-dom";
import { createRef, useState } from "react";
import Arrow, { DIRECTION } from "react-arrows";

export default () => {
  const [readMore1, setReadMore1] = useState(false);
  const [readMore2, setReadMore2] = useState(false);
  const SebastianRef = createRef();
  const WhoAreWeRef = createRef();
  const CadenRef = createRef();

  const toggleReadMore1 = () => {
    setReadMore1(!readMore1);
  };

  const toggleReadMore2 = () => {
    setReadMore2(!readMore2);
  };

  return (
    <div className="flex flex-col hero gap-10 my-10 sm:my-52 w-full items-center justify-center">
      <div className="flex flex-col sm:flex-row gap-52 sm:gap-10 justify-center items-center w-4/5">
        <div className="flex flex-col w-full items-center">
          <div className="flex flex-col gap-10   pr-10">
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
            <div className="flex flex-col gap-2 pr-10" ref={SebastianRef}>
              <p>
                {readMore1
                  ? `Sebastian is a student at Tamalpais High School. He has
                published an opinion piece in the LA Times and has been featured
                on TV concerning SAT availability in California.`
                  : "Publisher of an opinion piece in the LA Times and featured on TV concerning SAT availability in California."}
              </p>
              <span
                className="cursor-pointer text-neutral-content"
                onClick={toggleReadMore1}
              >
                {readMore1 ? "Read Less..." : "Read More..."}
              </span>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col order-first sm:order-none text-center gap-10 sm:mb-52 pb-5"
          ref={WhoAreWeRef}
        >
          <h1 className="text-2xl sm:text-4xl">Who are we?</h1>
          <p className="text-wrap">
            TestAccess is a student-led organization dedicated to increasing
            Collegeboard testing availability in California.
          </p>
        </div>
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
        <div className="flex flex-col w-full items-center">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2  pl-10">
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
            <div className="flex flex-col gap-2 pl-10" ref={CadenRef}>
              <p>
                {readMore2
                  ? `Caden is a student at Tamalpais High School and is the developer
                of TestAccess. He is central in TestAccess's mission of widening
                SAT availability in Marin County.`
                  : "Developer of TestAccess and central in TestAccess's mission of widening SAT availability in Marin County."}
              </p>
              <span
                className="cursor-pointer text-neutral-content"
                onClick={toggleReadMore2}
              >
                {readMore2 ? "Read Less..." : "Read More..."}
              </span>
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
