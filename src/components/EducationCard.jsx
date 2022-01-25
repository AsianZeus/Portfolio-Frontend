import * as React from "react";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Icon } from "@iconify/react";
import Link from "@mui/material/Link";
import Avatar from "@mui/material/Avatar";
import { Stack } from "@mui/material";

const theme = createTheme();

theme.typography.h3 = {
  fontSize: "1.1rem",
  "@media (min-width:600px)": {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.2rem",
  },
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

export default function EducationCard(props) {
  return (
    <div
      style={{
        backgroundColor: "rgb(21, 32, 43, 0.6)",
        padding: "1rem",
        color: "white",
        borderRadius: "20px",
        boxShadow: "0px 0px 10px rgb(17, 25, 33, 0.6)",
      }}
    >
      <div
        style={{
          display: "inline-block",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          padding: "10px",
          marginBottom: "1rem",
          borderRadius: "3px",
        }}
      >
        <Typography noWrap>
          <Icon
            icon="uil:calender"
            color="white"
            inline
            style={{ paddingRight: "0.5rem" }}
          />
          {date2string(props.data.Date.Start_Date.split("T")[0])} -{" "}
          {props.data.Date.End_Date
            ? date2string(props.data.Date.End_Date.split("T")[0])
            : "Present"}
        </Typography>
      </div>
      <Divider />
      <ThemeProvider theme={theme}>
        {props.alignleft ? (
          <Link
            href={props.data.Institute_URL}
            color="inherit"
            underline="none"
            sx={{
              display: "inline-flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Stack direction="column" spacing={0}>
              <Typography variant="h3" component="div" noWrap>
                {props.data.University_or_Board}
              </Typography>
              <Typography variant="overline">
                {props.data.College_or_School}
              </Typography>
            </Stack>
            <Avatar
              alt={props.data.College_or_School}
              src={props.data.Institute_Logo}
              style={{
                marginLeft: "0.7rem",
              }}
            />
          </Link>
        ) : (
          <Link
            href={props.data.Institute_URL}
            color="inherit"
            underline="none"
            sx={{
              display: "inline-flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar
              alt={props.data.College_or_School}
              src={props.data.Institute_Logo}
              style={{
                marginRight: "0.7rem",
              }}
            />
            <Stack direction="column" spacing={0}>
              <Typography variant="h3" component="div" noWrap>
                {props.data.University_or_Board}
              </Typography>
              <Typography variant="overline">
                {props.data.College_or_School}
              </Typography>
            </Stack>
          </Link>
        )}

        <Typography
          variant="overline"
          display="block"
          gutterBottom
          sx={{
            padding: "0",
            margin: "0",
          }}
        >
          <Icon
            icon="gg:work-alt"
            color="white"
            inline
            style={{ paddingRight: "0.3rem" }}
          />
          {props.data.Degree}
        </Typography>
        <Typography
          variant="overline"
          display="block"
          gutterBottom
          sx={{
            padding: "0",
            margin: "0",
          }}
        >
          <Icon
            icon="akar-icons:location"
            color="white"
            inline
            style={{ paddingRight: "0.3rem" }}
          />

          {props.data.Address.City + ", " + props.data.Address.Country}
        </Typography>
        <Typography
          variant="overline"
          display="block"
          gutterBottom
          sx={{
            padding: "0",
            margin: "0",
          }}
        >
          <Icon
            icon="carbon:result"
            color="white"
            inline
            style={{ paddingRight: "0.3rem" }}
          />
          {props.data.Grades}
        </Typography>
      </ThemeProvider>
      {props.data.Achievements && (
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
              Achivements
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {props.data.Achievements.map(function (obj, idxx) {
                return (
                  <div key={idxx}>
                    <ListItem disablePadding>
                      <ListItemText
                        primary={obj}
                        // style={{
                        //   display: "-webkit-box",
                        //   overflow: "hidden",
                        //   WebkitBoxOrient: "vertical",
                        //   WebkitLineClamp: 4,
                        // }}
                      />
                    </ListItem>
                    <Divider
                      sx={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                    />
                  </div>
                );
              })}
            </List>
          </AccordionDetails>
        </Accordion>
      )}
    </div>
  );
}
