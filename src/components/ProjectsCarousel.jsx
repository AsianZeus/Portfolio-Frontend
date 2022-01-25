import React from "react";
import { Carousel } from "react-responsive-carousel";
import ProjectCard from "./ProjectCard";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useTheme } from "@mui/system";
import { useMediaQuery } from "@mui/material";

export default function ProjectsCarousel(props) {
  const themex = useTheme();
  const matches = useMediaQuery(themex.breakpoints.up("sm"));

  return (
    <Box
      id="projects"
      sx={{
        flexGrow: 1,
        // paddingX: "2rem",
      }}
    >
      <Typography
        variant="h4"
        align="left"
        sx={{ fontFamily: "RussoOne", paddingBottom: "2rem", padding: "2rem" }}
      >
        Projects
      </Typography>
      <Box
        style={{
          paddingLeft: matches ? "4rem" : "2rem",
          paddingRight: matches ? "4rem" : "2rem",
          paddingBottom: "0rem",
          paddingTop: "1rem",
        }}
      >
        <Carousel showStatus={false} showThumbs={false} swipeable={false}>
          {props.data.map((d, idx) => (
            <div key={idx}>
              <ProjectCard data={d} matches={matches} />
            </div>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
}
