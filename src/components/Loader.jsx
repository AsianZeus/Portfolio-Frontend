import React from "react";
import Lottie from "lottie-react";
import LoaderAnimation from "./lottiefiles/loader.json";
function Loader() {
  return (
    <div
      style={{
        backgroundColor: "black",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Lottie animationData={LoaderAnimation} style={{ maxWidth: "20rem" }} />
    </div>
  );
}

export default Loader;
