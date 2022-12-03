import React from "react";
import "./Main.css";
import ParticleBackground from "./ParticleBackground";
import Home from "./Home";
import Footer from "./Footer";
import ExperienceTimeline from "./ExperienceTimeline";
import EducationTimeline from "./EducationTimeline";
import VariableLengthSkillGrid from "./VariableLengthSkillGrid";
import ProjectsCarousel from "./ProjectsCarousel";
import CertificationChips from "./CertificationChips";
import PublicationChips from "./Publications";
import {useQuery} from 'react-query'
import Loader from "./Loader";
import {ref, get} from "firebase/database";
import db from './FirebaseConfig';


function Main() {

  const dbRef = ref(db, '/');
    const {data, status} = useQuery('db', () => get(dbRef).then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    }));

  return (
    <div style={{ margin: 0, padding: 0, backgroundColor: "black" }}>
      <ParticleBackground />
      {status === 'loading' && (
      <Loader />
    )}
    {status === 'error' && (
      <div>An error has occured...</div>
    )}
    {status === 'success' && (
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
    )}
      
    </div>
  );
}

export default Main;
