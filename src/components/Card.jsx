import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Icon } from "@iconify/react";
import Divider from "@mui/material/Divider";
import LinearWithValueLabel from "./Slider";
import "./Colors.css";
import Box from "@mui/material/Box";

const IconDict = {
  Python: (
    <Icon icon="logos:python" inline style={{ paddingRight: "0.5rem" }} />
  ),
  Java: <Icon icon="logos:java" inline style={{ paddingRight: "0.5rem" }} />,
  HTML5: <Icon icon="logos:html-5" inline style={{ paddingRight: "0.5rem" }} />,
  "C++": (
    <Icon icon="logos:c-plusplus" inline style={{ paddingRight: "0.5rem" }} />
  ),
  CSS3: <Icon icon="logos:css-3" inline style={{ paddingRight: "0.5rem" }} />,
  JavaScript: (
    <Icon icon="logos:javascript" inline style={{ paddingRight: "0.5rem" }} />
  ),
  Docker: (
    <Icon icon="logos:docker-icon" inline style={{ paddingRight: "0.5rem" }} />
  ),
  Kubernetes: (
    <Icon icon="logos:kubernetes" inline style={{ paddingRight: "0.5rem" }} />
  ),
  Redis: (
    <Icon icon="logos:redis" inline style={{ paddingRight: "0.5rem" }} />
  ),
  PyTorch: (
    <Icon icon="logos:pytorch-icon" inline style={{ paddingRight: "0.5rem" }} />
  ),
  HuggingFace: (
    <Icon icon="fluent-emoji-flat:hugging-face" inline style={{ paddingRight: "0.5rem" }} />
  ),
  React: <Icon icon="logos:react" inline style={{ paddingRight: "0.5rem" }} />,
  TensorFlow: (
    <Icon icon="logos:tensorflow" inline style={{ paddingRight: "0.5rem" }} />
  ),
  GIT: <Icon icon="logos:git-icon" inline style={{ paddingRight: "0.5rem" }} />,
  Dialogflow: (
    <Icon icon="logos:dialogflow" inline style={{ paddingRight: "0.5rem" }} />
  ),
  FastAPI: (
    <Icon
      icon="simple-icons:fastapi"
      color="#008080"
      inline
      style={{ paddingRight: "0.5rem" }}
    />
  ),
  Flask: <Icon icon="cib:flask" inline style={{ paddingRight: "0.5rem" }} />,
  OpenCV: (
    <Icon icon="logos:opencv" inline style={{ paddingRight: "0.5rem" }} />
  ),
  Tailwind: (
    <Icon
      icon="vscode-icons:file-type-tailwind"
      inline
      style={{ paddingRight: "0.5rem" }}
    />
  ),
  "VS Code": (
    <Icon
      icon="vscode-icons:file-type-vscode"
      inline
      style={{ paddingRight: "0.5rem" }}
    />
  ),
  Linux: (
    <Icon icon="logos:linux-tux" inline style={{ paddingRight: "0.5rem" }} />
  ),
  "Postgres SQL": (
    <Icon icon="logos:postgresql" inline style={{ paddingRight: "0.5rem" }} />
  ),
  MongoDB: (
    <Icon
      icon="cib:mongodb"
      color="#3fa037"
      inline
      style={{ paddingRight: "0.5rem" }}
    />
  ),
  SQL: <Icon icon="carbon:sql" inline style={{ paddingRight: "0.5rem" }} />,
  GCP: (
    <Icon icon="logos:google-cloud" inline style={{ paddingRight: "0.5rem" }} />
  ),
  AWS: (
    <Icon
      icon="cib:amazon-aws"
      color="white"
      inline
      style={{ paddingRight: "0.5rem" }}
    />
  ),
  "IBM Cloud": (
    <Icon
      icon="carbon:ibm-cloud"
      color="#2bbce5"
      inline
      style={{ paddingRight: "0.5rem" }}
    />
  ),
  Heroku: (
    <Icon icon="logos:heroku-icon" inline style={{ paddingRight: "0.5rem" }} />
  ),
  Firebase: (
    <Icon icon="logos:firebase" inline style={{ paddingRight: "0.5rem" }} />
  ),
};

export default function Card(props) {
  return (
    <Box
      sx={{
        backgroundColor: "rgb(25, 39, 52, 0.5)",
        color: "white",
        boxShadow: "0px 0px 10px rgb(17, 25, 33, 0.6)",
      }}
    >
      <Accordion
        sx={{
          backgroundColor: "rgb(0,0,0, 0)",
          color: "white",
          boxShadow: "0px 0px 10px rgb(17, 25, 33, 0.6)",
          flexShrink: 0,
          flexGrow: 1,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "rgb(23, 162, 184)" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Box
            component="span"
            sx={{
              overflow: "hidden",
              display: "inline-flex",
              padding: "0rem",
              margin: "0rem",
              width: "100%",
              // backgroundColor: "primary.dark",
              "&:hover": {
                opacity: [0.9, 0.8, 0.7],
              },
            }}
          >
            <Typography
              noWrap
              sx={{
                typography: {
                  md: "h6",
                  sm: "h6",
                  xs: "subtitle2",
                },
                padding: "0",
                margin: "0",
                paddingLeft: "0.8rem",
                flexShrink: 0,
                fontSize: "1.3rem",
              }}
            >
              {IconDict[props.title]}
              {props.title}
              <Typography
                noWrap
                variant="overline"
                display="block"
                gutterBottom
                sx={{
                  fontSize: "0.6rem",
                  padding: "0",
                  margin: "0",
                }}
              >
                {props.type}
              </Typography>
            </Typography>
          </Box>
        </AccordionSummary>

        <AccordionDetails>
          <Typography
            paragraph
            sx={{
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 4,
            }}
          >
            {props.description}
          </Typography>

          <Divider
            textAlign="right"
            sx={{
              "&.MuiDivider-root": {
                "&::before": {
                  borderTop: (theme) => `thin solid white`,
                },
              },
            }}
            style={{
              marginTop: "0.5rem",
              marginBottom: "1rem",
              color: "white",
            }}
          // variant="middle"
          >
            Expertise
          </Divider>
          <LinearWithValueLabel value={props.expertise} />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
