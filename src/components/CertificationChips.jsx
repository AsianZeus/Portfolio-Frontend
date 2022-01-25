import * as React from "react";
import Chip from "@mui/material/Chip";
import { Icon } from "@iconify/react";
import Tooltip from "@mui/material/Tooltip";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";

const IconDict = {
  Coursera: (
    <Icon
      icon="simple-icons:coursera"
      inline
      style={{ paddingRight: "0.5rem", color: "#1769aa" }}
    />
  ),
  "Data Camp": (
    <Icon
      icon="simple-icons:datacamp"
      inline
      style={{
        paddingRight: "0.5rem",
        color: "white",
      }}
    />
  ),
};

export default function CertificationChips(props) {
  return (
    <Box
      id="certifications"
      sx={{
        flexGrow: 1,
        padding: "2rem",
      }}
    >
      <Typography
        variant="h4"
        align="left"
        sx={{ fontFamily: "RussoOne", paddingBottom: "2rem" }}
      >
        Certifications
      </Typography>

      {props.data.map(function (d, idx) {
        return (
          <Tooltip key={idx} title={"Certified by " + d.From}>
            <Chip
              component="a"
              href={d.Credential_URL}
              clickable
              icon={IconDict[d.Issuing_organization]}
              label={<Typography noWrap>{d.Title}</Typography>}
              style={{
                maxWidth: "100%",
                height: "3rem",
                marginRight: "0.5rem",
                marginTop: "0.5rem",
                marginBottom: "0.5rem",
                padding: "0.5rem",
                color: "white",
                backgroundColor: "rgb(25, 39, 52, 0.5)",
              }}
            />
          </Tooltip>
        );
      })}
    </Box>
  );
}
