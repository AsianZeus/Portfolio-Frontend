import { Box, Stack } from "@mui/material";
import React from "react";
import ContactUs from "./lottiefiles/contact.json";
import Lottie from "lottie-react";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/system";
import { useMediaQuery } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import FaceIcon from "@mui/icons-material/Face";
import EmailIcon from "@mui/icons-material/AlternateEmail";
import MessageIcon from "@mui/icons-material/Message";
import { useState } from "react";
import axios from "axios";
import swal from 'sweetalert2';

function Footer() {
  const themex = useTheme();
  const matches = useMediaQuery(themex.breakpoints.up("sm"));

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    console.log(event.target.name);
    event.target.id === "name"
      ? setName(event.target.value)
      : event.target.id === "email"
        ? setEmail(event.target.value)
        : event.target.id === "message"
          ? setMessage(event.target.value)
          : console.log(event)
  };

  function sendData(e) {
    e.preventDefault()
    const payload = { Name: name, Email: email, Message: message };
    axios.post('https://akshat-surolia-portfolio.herokuapp.com/requests', payload, {
      headers: {
        key: process.env.REACT_APP_SECRET_KEY,
      }
    })
      .then(response => response.data.created_id ? swal.fire({icon:'success', title: 'Your response has been recorded!', toast:true, iconColor:"rgb(23, 162, 184)", background:"rgb(17, 26, 34, 0.9)", color:"white", confirmButtonColor:"rgb(23, 162, 184)"}): swal.fire({icon:'Error', title:'Something went wrong', toast:true, iconColor:"red", background:"rgb(17, 26, 34, 0.9)", color:"white", confirmButtonColor:"rgb(23, 162, 184)"}));

    setName("");
    setMessage("");
    setEmail("");
  }

  return (
    <Box
      id="contact"
      alignItems="center"
      sx={{
        paddingLeft: "5rem",
        paddingBottom: "1rem",
        paddingTop: matches ? "2rem" : "1rem",
        paddingRight: "5rem",
        backgroundColor: "rgba(25, 39, 52, 0.7)",
        borderRadius: "3rem 3rem 0 0",
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row", md: "row" }}
        spacing={{ xs: 2, sm: 3 }}
      >
        <div
          style={{
            width: matches ? "50%" : "100%",
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Lottie
            loop={true}
            animationData={ContactUs}
            style={{ maxWidth: matches ? "20rem" : "12rem" }}
          />
        </div>
        <Box sx={{ padding: "0rem", margin: "0rem" }}>
          <Typography
            align="center"
            variant="h5"
            style={{ marginBottom: "1.5rem" }}
          >
            Get in Touch
          </Typography>
          <div
            style={{
              width: "100%",
              borderRadius: "1.4rem",
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <form action="/" method="POST" onSubmit={sendData}>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  paddingBottom: "1rem",
                }}
              >
                <FaceIcon sx={{ color: "rgb(23, 162, 184)", mr: 1, my: 0.5 }} />
                <TextField
                  id="name"
                  value={name}
                  label="Name"
                  onChange={handleChange}
                  placeholder="Drop your name..."
                  variant="standard"
                  sx={{
                    "& .MuiInput-underline:before": {
                      borderBottomColor: "white",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "rgb(23, 162, 184)",
                    },
                    "& .MuiInput-underline:hover:before": {
                      borderBottomColor: "rgb(23, 162, 184)",
                    },
                    "& .MuiInput-underline:hover:after": {
                      borderBottomColor: "rgb(23, 162, 184)",
                    },
                    "& .MuiInput-input": {
                      color: "white",
                      fontSize: "1rem",
                    },
                    "& label.MuiInputLabel-root": {
                      color: "white",
                    },
                    "& label.Mui-focused": {
                      color: "rgb(23, 162, 184)",
                    },
                  }}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  paddingBottom: "1rem",
                }}
              >
                <EmailIcon sx={{ color: "rgb(23, 162, 184)", mr: 1, my: 0.5 }} />
                <TextField
                  label="Email"
                  id="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Drop your email..."
                  variant="standard"
                  sx={{
                    "& .MuiInput-underline:before": {
                      borderBottomColor: "white",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "rgb(23, 162, 184)",
                    },
                    "& .MuiInput-underline:hover:before": {
                      borderBottomColor: "rgb(23, 162, 184)",
                    },
                    "& .MuiInput-underline:hover:after": {
                      borderBottomColor: "rgb(23, 162, 184)",
                    },
                    "& .MuiInput-input": {
                      color: "white",
                      fontSize: "1rem",
                    },
                    "& label.MuiInputLabel-root": {
                      color: "white",
                    },
                    "& label.Mui-focused": {
                      color: "rgb(23, 162, 184)",
                    },
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  paddingBottom: "2rem",
                }}
              >
                <MessageIcon
                  sx={{ color: "rgb(23, 162, 184)", mr: 1, my: 0.5 }}
                />
                <TextField
                  id="message"
                  label="Message"
                  onChange={handleChange}
                  value={message}
                  placeholder="Drop your message..."
                  variant="standard"
                  multiline
                  maxRows={3}
                  sx={{
                    "& .MuiInput-underline:before": {
                      borderBottomColor: "white",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "rgb(23, 162, 184)",
                    },
                    "& .MuiInput-underline:hover:before": {
                      borderBottomColor: "rgb(23, 162, 184)",
                    },
                    "& .MuiInput-underline:hover:after": {
                      borderBottomColor: "rgb(23, 162, 184)",
                    },
                    "& .MuiInput-input": {
                      color: "white",
                      fontSize: "1rem",
                    },
                    "& label.MuiInputLabel-root": {
                      color: "white",
                    },
                    "& label.Mui-focused": {
                      color: "rgb(23, 162, 184)",
                    },
                  }}
                />
              </Box>
              <Button
                type="submit"
                variant="outlined"
                startIcon={<SendIcon />}
                sx={{
                  color: "white",
                  "&:hover": {
                    backgroundColor: "rgba(23, 162, 184, 0.5)",
                    color: "white",
                  },
                  "&.MuiButton-outlined": {
                    borderColor: "white",
                  },
                }}
              >
                Submit
              </Button>
            </form>
          </div>
        </Box>
      </Stack>
    </Box>
  );
}

export default Footer;
