import Masonry from "@mui/lab/Masonry";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "./Card";

export default function VariableLengthSkillGrid(props) {
  return (
    <Box
      id="skills"
      sx={{
        flexGrow: 1,
        padding: "1.5rem",
      }}
    >
      <Typography
        variant="h4"
        align="left"
        sx={{ fontFamily: "RussoOne", paddingBottom: "2rem" }}
      >
        Skills
      </Typography>
      <Masonry
        component={Grid}
        spacing={{ xs: 2, sm: 2, md: 3 }}
        columns={{ xs: 2, sm: 3, md: 4 }}
      >
        {props.data.map((d, idx) => (
          <Card
            key={idx}
            title={d.Name}
            expertise={d.Expertise}
            type={d.Type}
            description={d.Description}
          />
        ))}
      </Masonry>
    </Box>
  );
}
