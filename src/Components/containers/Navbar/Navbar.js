import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="flex flex-row justify-between p-5 px-10 items-center">
      <div className="flex-1">
        <Link to="/">
          <h2 className="font-semibold text-xl">TestAccess</h2>
        </Link>
      </div>
      <div className="flex-none flex gap-5">
        <Link to="/our-mission">
          <span>Our mission</span>
        </Link>
        <Link to="/about">
          <span>About</span>
        </Link>
      </div>
    </div>
  );
};
