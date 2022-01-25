import * as React from "react";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import EducationCard from "./EducationCard";
import { Icon } from "@iconify/react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import TimelineDot from "@mui/lab/TimelineDot";
export default function EducationTimeline(props) {
  const matches = useMediaQuery("(min-width:670px)");
  return (
    <Box
      id="education"
      sx={{
        flexGrow: 1,
      }}
    >
      <Typography
        variant="h4"
        align="left"
        sx={{ fontFamily: "RussoOne", paddingBottom: "2rem", padding: "2rem" }}
      >
        Education
      </Typography>
      {matches ? (
        <center>
          {props.data.map((d, idx) => (
            <TimelineItem
              position={idx % 2 === 0 ? "left" : "right"}
              key={idx}
              sx={{ maxWidth: "60rem" }}
            >
              <TimelineSeparator>
                <TimelineConnector />

                <TimelineDot
                  sx={{
                    backgroundColor: "white",
                    padding: "0.1rem",
                  }}
                >
                  <Icon
                    icon="ion:school-outline"
                    color="black"
                    width="1.4rem"
                  />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <EducationCard
                  data={d}
                  alignleft={idx % 2 === 0 ? true : false}
                />
              </TimelineContent>
            </TimelineItem>
          ))}
        </center>
      ) : (
        //  if small screen
        <div>
          {props.data.map((d, idx) => (
            <div key={idx} style={{ padding: "0.7rem" }}>
              <EducationCard data={d} />
            </div>
          ))}
        </div>
      )}
    </Box>
  );
}
