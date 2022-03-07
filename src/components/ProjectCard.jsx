import * as React from "react";
import Typography from "@mui/material/Typography";
import { Icon } from "@iconify/react";
import Lottie from "lottie-react";
import { Stack } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Grid } from "@mui/material";
import { Chip } from "@mui/material";
import ArtificialIntelligence from "./lottiefiles/ai-animation.json";
import PIRDS from "./lottiefiles/PIRDS.json";
import Ooze from "./lottiefiles/Ooze.json";
import Photo3D from "./lottiefiles/3DPhoto.json";
import AceTech from "./lottiefiles/AceTech.json";
import Edversity from "./lottiefiles/Edversity.json";
import FaceEdit from "./lottiefiles/FaceEdit.json";
import FaceMask from "./lottiefiles/FaceMask.json";
import ICD10 from "./lottiefiles/ICD10.json";
import ImageEnhancement from "./lottiefiles/ImageEnhancement.json";
import Maze from "./lottiefiles/Maze.json";
import Twilio from "./lottiefiles/Twilio.json";
import Portfolio from "./lottiefiles/Portfolio.json";


const theme = createTheme();

const getJson = (name) => {
  switch (name) {
    case "Ace Tech":
      return AceTech;
    case "Digitalizing Prescription Image":
      return PIRDS;
    case "Ooze - Handwritten Text Generator":
      return Ooze;
    case "Portfolio":
      return Portfolio;
    case "3D-Photography with Image Inpainting and Depth Estimation":
      return Photo3D;
    case "Real-Time Call Transcription and Sentimental Analysis":
      return Twilio;
    case "FaceMask Classification with SOTA Models":
      return FaceMask;
    case "Image Enhancement and Super Resolution":
      return ImageEnhancement;
    case "Diverse Facial Edit":
      return FaceEdit;
    case "Maze Runner":
      return Maze;
    case "Edversity":
      return Edversity;
    case "Clinical ICD-10 Code Prediction":
      return ICD10;
    default:
      return ArtificialIntelligence;
  }
};

const month = {
  "01": "Janauary",
  "02": "February",
  "03": "March",
  "04": "April",
  "05": "May",
  "06": "June",
  "07": "July",
  "08": "August",
  "09": "September",
  10: "October",
  11: "November",
  12: "December",
};

function date2string(date) {
  let temp = date.split("-");
  let y = temp[0];
  let m = temp[1];
  return `${month[m]}, ${y}`;
}

theme.typography.h3 = {
  fontSize: "1.1rem",
  "@media (min-width:600px)": {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.3rem",
  },
};
export default function ProjectCard(props) {
  return (
    <div
      style={{
        backgroundColor: "rgb(21, 32, 43, 0.6)",
        padding: props.matches ? "2rem" : "1rem",
        color: "white",
        borderRadius: "20px",
        boxShadow: "0px 0px 10px rgb(17, 25, 33, 0.6)",
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "column", md: "row" }}
        spacing={{ xs: 2, sm: 3 }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // padding: "1rem",
          }}
        >
          <Lottie
            animationData={getJson(props.data.Title)}
            loop={true}
            style={{
              maxWidth: props.matches ? "20rem" : "15rem",
              width: props.matches && "20rem",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
          }}
        >
          <ThemeProvider theme={theme}>
            <Typography variant="h3" align="center" component="div">
              <Icon
                icon="icon-park-outline:more-app"
                color="white"
                inline
                style={{ paddingRight: "0.5rem" }}
              />
              {props.data.Title}
              <Typography
                variant="overline"
                display="block"
                gutterBottom
                sx={{
                  padding: "0",
                  margin: "0",
                }}
              >
                {date2string(props.data.Date.Start_Date.split("T")[0])} -{" "}
                {props.data.Date.End_Date
                  ? date2string(props.data.Date.End_Date.split("T")[0])
                  : "Present"}
              </Typography>
            </Typography>
          </ThemeProvider>
          <Stack
            direction={{ xs: "column", sm: "column", md: "row" }}
            spacing={{ xs: 2, sm: 3 }}
          >
            <Divider sx={{ backgroundColor: "rgba(255,255,255,0.3)" }} />
            <Box>
              <ThemeProvider theme={theme}>
                <Typography
                  style={{
                    padding: "0.5rem",
                    marginBottom: "0.5rem",
                    borderRadius: "20px",
                    boxShadow: "0px 0px 10px rgb(17, 25, 33, 0.6)",
                    backgroundColor: "rgb(25, 39, 52, 0.5)",
                  }}
                >
                  <Icon
                    icon="akar-icons:stack-overflow-fill"
                    color="white"
                    inline
                    style={{ paddingRight: "0.3rem" }}
                  />
                  Tech Stack
                </Typography>
              </ThemeProvider>
              <Grid container direction="row">
                {props.data.Tech_Stacks.map(function (obj, idxx) {
                  return (
                    <Grid key={idxx} sx={{ padding: "0.3rem" }}>
                      <Chip
                        icon={
                          <Icon
                            icon="file-icons:codekit"
                            color="#17a3b8"
                            style={{ marginLeft: "0.5rem" }}
                          />
                        }
                        label={obj.Name}
                        variant="outlined"
                        style={{
                          color: "rgb(23, 162, 184)",
                          borderColor: "rgb(23, 162, 184)",
                          cursor: "pointer",
                        }}
                      />
                    </Grid>
                  );
                })}
              </Grid>
              <Divider
                variant="middle"
                sx={{
                  backgroundColor: "rgba(255,255,255,0.3)",
                  marginTop: "0.5rem",
                  marginBottom: "0.9rem",
                }}
              />

              <Stack direction="row" spacing={{ xs: 2, sm: 3 }}>
                {props.data.Repo_URL && (
                  <Chip
                    component="a"
                    icon={
                      <Icon
                        icon="akar-icons:github-fill"
                        color="#17a3b8"
                        style={{ marginLeft: "0.5rem" }}
                      />
                    }
                    href={props.data.Repo_URL}
                    clickable
                    label="Repository"
                    variant="outlined"
                    style={{
                      color: "rgb(23, 162, 184)",
                      borderColor: "rgb(23, 162, 184)",
                    }}
                  />
                )}
                {props.data.Hosting_URL && (
                  <Chip
                    component="a"
                    href={props.data.Hosting_URL}
                    clickable
                    icon={
                      <Icon
                        icon="whh:cloudhosting"
                        color="#17a3b8"
                        style={{ marginLeft: "0.5rem" }}
                      />
                    }
                    label="Hosted on"
                    variant="outlined"
                    style={{
                      color: "rgb(23, 162, 184)",
                      borderColor: "rgb(23, 162, 184)",
                    }}
                  />
                )}
              </Stack>
            </Box>

            <Box>
              {props.matches
                ? props.data.Summary && (
                    <div>
                      <Typography
                        align="center"
                        sx={{
                          padding: "0.5rem",
                          marginBottom: "0.5rem",
                          borderRadius: "20px",
                          boxShadow: "0px 0px 10px rgb(17, 25, 33, 0.6)",
                          backgroundColor: "rgb(25, 39, 52, 0.5)",
                        }}
                      >
                        <Icon
                          icon="akar-icons:text-align-right"
                          color="white"
                          inline
                          style={{ paddingRight: "0.5rem" }}
                        />
                        Project Summary
                      </Typography>

                      <List>
                        {props.data.Summary.map(function (obj, idxx) {
                          return (
                            <div key={idxx}>
                              <ListItem disablePadding>
                                <ListItemText primary={obj} />
                              </ListItem>
                              <Divider
                                sx={{
                                  backgroundColor: "rgba(255,255,255,0.2)",
                                }}
                              />
                            </div>
                          );
                        })}
                      </List>
                    </div>
                  )
                : props.data.Summary && (
                    <Accordion
                      defaultExpanded={false}
                      sx={{
                        backgroundColor: "rgb(25, 39, 52, 0.5)",
                        color: "white",
                        borderRadius: "20px",
                        boxShadow: "0px 0px 10px rgb(17, 25, 33, 0.6)",
                      }}
                    >
                      <AccordionSummary
                        expandIcon={
                          <ExpandMoreIcon sx={{ color: "rgb(23, 162, 184)" }} />
                        }
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography align="inherit">
                          <Icon
                            icon="akar-icons:text-align-right"
                            color="white"
                            inline
                            style={{ paddingRight: "0.5rem" }}
                          />
                          Project Summary
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <List>
                          {props.data.Summary.map(function (obj, idxx) {
                            return (
                              <div key={idxx}>
                                <ListItem disablePadding>
                                  <ListItemText primary={obj} />
                                </ListItem>
                                <Divider
                                  sx={{
                                    backgroundColor: "rgba(255,255,255,0.2)",
                                  }}
                                />
                              </div>
                            );
                          })}
                        </List>
                      </AccordionDetails>
                    </Accordion>
                  )}
            </Box>
          </Stack>
        </Box>
      </Stack>
    </div>
  );
}
