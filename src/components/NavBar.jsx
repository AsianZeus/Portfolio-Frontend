import React from "react";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./Fonts.css";
import DrawerComponent from "./DrawerComponent";
import { Link } from "react-scroll";

function NavBar(props) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const matches = useMediaQuery("(max-width:750px)");

  return (
    <>
      <AppBar elevation={0} position="static" color="transparent">
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "left",
              pt: 3,
              pb: 2,
            }}
          >
            <Typography
              ccomponent="div"
              sx={{
                fontFamily: "Signature",
                cursor: "default",
              }}
            >
              {props.name}
            </Typography>
          </Box>
          {matches ? (
            <DrawerComponent
              openDrawer={openDrawer}
              setOpenDrawer={setOpenDrawer}
            />
          ) : (
            <Box
              sx={{
                display: "flex",
                flexGrow: 2,
                justifyContent: "center",
                float: "center",
              }}
            >
              <Typography
                sx={{
                  mr: "20px",
                  cursor: "pointer",
                  ":hover": { color: "#37CAE0" },
                  fontFamily: "Montserrat",
                }}
              >
                Home
              </Typography>
              <Link to="skills" smooth={true} duration={1000}>
                <Typography
                  sx={{
                    mr: "20px",
                    cursor: "pointer",
                    ":hover": { color: "#37CAE0" },
                    fontFamily: "Montserrat",
                  }}
                >
                  Skills
                </Typography>
              </Link>
              <Link to="experiences" smooth={true} duration={1000}>
                <Typography
                  sx={{
                    mr: "20px",
                    cursor: "pointer",
                    fontFamily: "Montserrat",
                    ":hover": { color: "#37CAE0" },
                  }}
                >
                  Experiences
                </Typography>
              </Link>
              <Link to="education" smooth={true} duration={1000}>
                <Typography
                  sx={{
                    mr: "20px",
                    cursor: "pointer",
                    ":hover": { color: "#37CAE0" },
                    fontFamily: "Montserrat",
                  }}
                >
                  Education
                </Typography>
              </Link>
              <Link to="projects" smooth={true} duration={1000}>
                <Typography
                  sx={{
                    mr: "20px",
                    cursor: "pointer",
                    fontFamily: "Montserrat",
                    ":hover": { color: "#37CAE0" },
                  }}
                >
                  Projects
                </Typography>
              </Link>
              <Link to="contact" smooth={true} duration={1000}>
                <Typography
                  sx={{
                    mr: "20px",
                    fontFamily: "Montserrat",
                    cursor: "pointer",
                    ":hover": { color: "#37CAE0" },
                  }}
                >
                  Contact
                </Typography>
              </Link>
            </Box>
          )}

          {matches && (
            <Box
              sx={{
                position: "absolute",
                right: "20px",
              }}
            >
              <IconButton
                name="menuicon"
                size="large"
                edge="start"
                color="inherit"
                onClick={() => setOpenDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;
