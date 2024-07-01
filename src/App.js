import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/containers/Navbar";
import Landing from "./Components/pages/Landing";
import Registration from "./Components/pages/Registration";
import About from "./Components/pages/About";
import OurMission from "./Components/pages/OurMission";

export default () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="*" element={<Landing />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-mission" element={<OurMission />} />
      </Routes>
    </BrowserRouter>
  );
};
