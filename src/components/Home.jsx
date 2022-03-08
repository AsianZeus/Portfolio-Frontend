import "./home.css";
import { Avatar, Typography } from "@mui/material";
import NavBar from "./NavBar";
import { Icon } from "@iconify/react";
import "./Fonts.css";
import Resume from "./documents/Akshat_Surolia_Resume.pdf";

export default function Home(props) {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "0",
        margin: "0",
      }}
    >
      <NavBar name={props.data.First_Name + " " + props.data.Last_Name} />
      <section className="s1">
        <div className="intro-wrapper">
          <div className="nav-wrapper">
            <div className="dots-wrapper">
              <div id="dot-1" className="browser-dot"></div>
              <div id="dot-2" className="browser-dot"></div>
              <div id="dot-3" className="browser-dot"></div>
            </div>
          </div>

          <div className="left-column">
            <Avatar
              alt={props.data.First_Name + " " + props.data.Last_Name}
              src={props.data.Profile_Picture_URL}
              sx={{ width: 140, height: 140, boxShadow: "0px 0px 5px #000" }}
            />
            <h2>{props.data.First_Name + " " + props.data.Last_Name}</h2>
            <div className="desloc">
              <Icon
                icon="eos-icons:data-scientist-outlined"
                color="white"
                style={{ paddingRight: "10px" }}
              />
              <h4>{props.data.Current_Title} &emsp;| &emsp; </h4>
              <Icon
                icon="akar-icons:location"
                color="white"
                style={{ paddingRight: "10px" }}
              />
              <h4>{props.data.Address.Country}</h4>
            </div>

            <div className="social">
              {props.data.Social && (
                <a name="github" href={props.data.Social.GitHub}>
                  <Icon icon="cib:github" color="white" />
                </a>
              )}
              {props.data.Social && (
                <a name="linkedin" href={props.data.Social.Linkedin}>
                  <Icon icon="logos:linkedin-icon" />
                </a>
              )}
              {props.data.Social && (
                <a name="twitter" href={props.data.Social.Twitter}>
                  <Icon icon="logos:twitter" />
                </a>
              )}
              {props.data.Mail_ID && (
                <a name="mail" href={`mailto:${props.data.Mail_ID}`}>
                  <Icon icon="flat-ui:mail" />
                </a>
              )}

              {props.data.Mobile_Number && (
                <a name="phone" href={`tel:${props.data.Mobile_Number}`}>
                  <Icon icon="bi:phone-fill" color="white" />
                </a>
              )}
              <a
                href={Resume}
                name="resume"
                download="Akshat_Surolia_Resume.pdf"
              >
                <Icon icon="bi:file-earmark-pdf-fill" color="white" />
              </a>

              {/* {props.data.Social && (
                <a name="instagram" href={props.data.Social.Instagram}>
                  <Icon icon="cib:instagram" color="#bc2a8d" />
                </a>
              )} */}
              {props.data.Social && (
                <a name="spotify" href={props.data.Social.Spotify}>
                  <Icon icon="logos:spotify-icon" />
                </a>
              )}
            </div>
          </div>

          <div className="right-column">
            <div id="preview-shadow">
              <div id="preview">
                <div id="corner-tl" className="corner"></div>
                <div id="corner-tr" className="corner"></div>
                <h3>Who Am I?</h3>
                  <Typography sx={{
                    fontFamily: "Montserrat",
                  wordBreak: "break-word"
                }}>
                  {props.data.Professional_Summary}
                  </Typography>
                <div id="corner-br" className="corner"></div>
                <div id="corner-bl" className="corner"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
