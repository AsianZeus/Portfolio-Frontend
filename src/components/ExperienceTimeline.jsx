import * as React from "react";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import ExperienceCard from "./ExperienceCard";
import { Icon } from "@iconify/react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";

export default function ExperienceTimeline(props) {
  const matches = useMediaQuery("(min-width:670px)");
  return (
    <Box
      id="experiences"
      sx={{
        flexGrow: 1,
      }}
    >
      <Typography
        variant="h4"
        align="left"
        sx={{ fontFamily: "RussoOne", paddingBottom: "2rem", padding: "2rem" }}
      >
        Experience
      </Typography>
      {matches ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {/* <Timeline position="alternate"> */}
          {props.data.map((d, idx) => (
            <TimelineItem
              position={idx % 2 === 0 ? "left" : "right"}
              key={idx}
              sx={{ maxWidth: "65rem" }}
            >
              <TimelineSeparator>
                <TimelineConnector />
                <Icon
                  icon="fluent:code-circle-20-filled"
                  color="white"
                  width="2rem"
                  style={{ margin: "0.4rem" }}
                />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                {/* <div style={{ maxWidth: "30rem" }}> */}
                <ExperienceCard data={d} />
                {/* </div> */}
              </TimelineContent>
            </TimelineItem>
          ))}
        </Box>
      ) : (
        //  if small screen
        <div>
          {props.data.map((d, idx) => (
            <div key={idx} style={{ padding: "0.7rem" }}>
              <ExperienceCard data={d} />
            </div>
          ))}
        </div>
      )}
    </Box>
  );
}
