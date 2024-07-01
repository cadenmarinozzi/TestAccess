import { Link } from "react-router-dom";
import ButtonArrow from "../../shared/ButtonArrow";

export default () => {
  return (
    <div className="hero flex flex-col my-52">
      <div className="flex flex-col items-center text-center gap-10 mx-10">
        <h1 className="text-4xl sm:text-6xl font-semibold text-wrap">
          <span className="font-black">No one</span> should have to travel
          <br />
          100 miles for an SAT.
        </h1>
        <p>
          TestAccess is dedicated to changing Collegeboard testing availability
          in California.
        </p>
        <div className="flex flex-col md:flex-row gap-5 items-center place-content-center">
          <button className="btn btn-primary group">
            <Link to="/our-mission">
              <span>Let's make a change</span>
            </Link>
            <ButtonArrow />
          </button>
          <button className="btn btn-outline group">
            <Link to="/registration">
              <span>Register a testing site</span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
