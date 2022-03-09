import * as React from "react";
import Chip from "@mui/material/Chip";
import { Icon } from "@iconify/react";
import Tooltip from "@mui/material/Tooltip";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avatar from "@mui/material/Avatar";
import { Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import Masonry from "@mui/lab/Masonry";

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
  let d = temp[2];
  return `${d}\xa0${month[m]},\xa0\xa0${y}`;
}

export default function PublicationChips(props) {
  return (
    <Box
      id="publications"
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
        Publications
      </Typography>

      <Masonry
        component={Grid}
        spacing={{ xs: 2, sm: 2, md: 3 }}
        columns={{ xs: 1, sm: 1, md: 2 }}
      >
        {props.data.map(function (d, idx) {
          return (
            <div
              key={idx}
              style={{
                backgroundColor: "rgb(21, 32, 43, 0.6)",
                padding: "1rem",
                color: "white",
                borderRadius: "20px",
                marginBottom: "1.5rem",
                marginRight: "1.5rem",
                boxShadow: "0px 0px 10px rgb(17, 25, 33, 0.6)",
              }}
            >
              <Box
                sx={{
                  display: "inline-flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <Avatar
                  alt={d.Publishing_Journal}
                  src={d.Institute_Logo}
                  style={{
                    marginRight: "0.7rem",
                  }}
                />

                <Stack direction="column" spacing={0}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    align="left">
                    {d.Title}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    align="left">
                    {date2string(d.Publishing_Date.split("T")[0])}
                  </Typography>
                </Stack>

              </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between"}}>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontFamily: "RussoOne"}}
                  >
                    How to cite
                  </Typography>
                
                      <Tooltip key={idx} title={"Published by " + d.Publishing_Journal} >
                        <Chip
                          component="a"
                          href={d.Publishing_URL}
                          clickable

                          icon={<Icon
                            icon="ooui:journal-ltr"
                            inline
                            style={{ paddingRight: "0.5rem", color: "#1769aa" }}
                          />}
                          label={<Typography noWrap>See Publication</Typography>}
                          style={{
                            maxWidth: "100%",
                            marginRight: "0.5rem",
                            marginTop: "0.5rem",
                            marginBottom: "0.5rem",
                            padding: "0.5rem",
                            color: "white",
                            backgroundColor: "rgb(25, 39, 52, 0.5)",
                          }}
                        />
                      </Tooltip>
                </Box>

              <div
                style={{
                  display: "block",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  padding: "10px",
                  marginBottom: "1rem",
                  borderRadius: "3px",
                }}
              >
                <Typography sx={{
                  wordBreak: "break-word",
                }}>
                  {d.Citation}
                </Typography>
              </div>
              <Divider />
              <Accordion
                sx={{
                  backgroundColor: "rgb(25, 39, 52, 0.5)",
                  color: "white",
                  borderRadius: "20px",
                  boxShadow: "0px 0px 10px rgb(17, 25, 33, 0.6)",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "rgb(23, 162, 184)" }} />}
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
                    Abstract
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {d.Abstract}
                </AccordionDetails>
              </Accordion>

            </div>
          );
        })}

      </Masonry>

    </Box>
  );
}

