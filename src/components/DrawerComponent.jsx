import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-scroll";

const DrawerComponent = ({ openDrawer, setOpenDrawer }) => {
  return (
    <Drawer
      PaperProps={{
        sx: {
          backgroundColor: "rgb(25, 39, 52, 0.7)",
          color: "white",
          paddingTop: "3rem",
        },
      }}
      anchor="right"
      open={openDrawer}
      onClose={(ev, reason) => setOpenDrawer(false)}
    >
      <List>
        <ListItem divider button onClick={() => setOpenDrawer(false)}>
          <ListItemIcon>
            <ListItemText sx={{ color: "white" }}>Home</ListItemText>
          </ListItemIcon>
        </ListItem>
        <ListItem divider button onClick={() => setOpenDrawer(false)}>
          <ListItemIcon>
            <Link to="skills" smooth={true} duration={1000}>
              <ListItemText sx={{ color: "white" }}>Skills</ListItemText>
            </Link>
          </ListItemIcon>
        </ListItem>
        <ListItem divider button onClick={() => setOpenDrawer(false)}>
          <ListItemIcon>
            <Link to="experiences" smooth={true} duration={1000}>
              <ListItemText sx={{ color: "white" }}>Experience</ListItemText>
            </Link>
          </ListItemIcon>
        </ListItem>
        <ListItem divider button onClick={() => setOpenDrawer(false)}>
          <ListItemIcon>
            <Link to="education" smooth={true} duration={1000}>
              <ListItemText sx={{ color: "white" }}>Education</ListItemText>
            </Link>
          </ListItemIcon>
        </ListItem>
        <ListItem divider button onClick={() => setOpenDrawer(false)}>
          <ListItemIcon>
            <Link to="projects" smooth={true} duration={1000}>
              <ListItemText sx={{ color: "white" }}>Project</ListItemText>
            </Link>
          </ListItemIcon>
        </ListItem>
        <ListItem divider button onClick={() => setOpenDrawer(false)}>
          <ListItemIcon>
            <Link to="certifications" smooth={true} duration={1000}>
              <ListItemText sx={{ color: "white" }}>Certification</ListItemText>
            </Link>
          </ListItemIcon>
        </ListItem>
        <ListItem divider button onClick={() => setOpenDrawer(false)}>
          <ListItemIcon>
            <Link to="contact" smooth={true} duration={1000}>
              <ListItemText sx={{ color: "white" }}>Contact</ListItemText>
            </Link>
          </ListItemIcon>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default DrawerComponent;
