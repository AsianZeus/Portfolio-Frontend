import React from "react";
import "./Main.css";
import ParticleBackground from "./ParticleBackground";
import Home from "./Home";
import axios from "axios";
import Footer from "./Footer";
import ExperienceTimeline from "./ExperienceTimeline";
import EducationTimeline from "./EducationTimeline";
import VariableLengthSkillGrid from "./VariableLengthSkillGrid";
import ProjectsCarousel from "./ProjectsCarousel";
import CertificationChips from "./CertificationChips";
import PublicationChips from "./Publications";
import {useQuery} from 'react-query'
import Loader from "./Loader";


function Main() {

  const {data,status} = useQuery("info", async () => {

    const { data } = await axios.get(
      "https://akshat-surolia-portfolio.herokuapp.com/all",
      {
        headers: {
          key: process.env.REACT_APP_SECRET_KEY,
        }
      }
    );
    return data;
  });

  if (status === "loading") {
    return <Loader />;
  }

  if (status === "error") {
    return <div>An error has occured...</div>;
  }

  return (
    <div style={{ margin: 0, padding: 0, backgroundColor: "black" }}>
      <ParticleBackground />
      <div className="Main">
        <Home data={data.Personal_Info[0]} />
        <ExperienceTimeline data={data.Experiences} />
        <ProjectsCarousel data={data.Projects} />
        <VariableLengthSkillGrid data={data.Skills} />
        <EducationTimeline data={data.Education} />
        <PublicationChips data={data.Publications} />
        <CertificationChips data={data.Certifications} />
        
        <Footer />
      </div>
    </div>
  );
}

export default Main;
