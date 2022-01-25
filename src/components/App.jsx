import React from "react";
import ParticleBackground from "./ParticleBackground";
import "./App.css";
import Home from "./Home";
import FetchData from "./FetchData";
import Footer from "./Footer";
import ExperienceTimeline from "./ExperienceTimeline";
import EducationTimeline from "./EducationTimeline";
import VariableLengthSkillGrid from "./VariableLengthSkillGrid";
import ProjectsCarousel from "./ProjectsCarousel";
import CertificationChips from "./CertificationChips";
import Loader from "./Loader";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    FetchData("all").then((response) => {
      setData(response.data);
    });
  }, []);
  let Personal_Info = null;
  let Experiences = null;
  let Education = null;
  let Skills = null;
  let Certifications = null;
  let Projects = null;
  if (data != null) {
    Personal_Info = data.Personal_Info[0];
    Experiences = data.Experiences;
    Education = data.Education;
    Skills = data.Skills;
    Certifications = data.Certifications;
    Projects = data.Projects;
  }

  if (data == null) {
    return <Loader />;
  }

  return (
    <div style={{ margin: 0, padding: 0, backgroundColor: "black" }}>
      <ParticleBackground />
      <div className="App">
        {Personal_Info && <Home data={Personal_Info} />}
        {Skills && <VariableLengthSkillGrid data={Skills} />}
        {Experiences && <ExperienceTimeline data={Experiences} />}
        {Education && <EducationTimeline data={Education} />}
        {Projects && <ProjectsCarousel data={Projects} />}
        {Certifications && <CertificationChips data={Certifications} />}
        <Footer />
      </div>
    </div>
  );
}

export default App;
