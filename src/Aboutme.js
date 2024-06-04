import React from "react";
import myimage from "./images/profile2.jpeg";
function Aboutme() {
  return (
    <div className="aboutme">
      <h1 style={{ paddingTop: "30px" }}>About Me</h1>
      <hr style={{ width: "70%", position: "relative", left: "15%" }}></hr>{" "}
      <br />
      <div style={{ justifyContent: "center", display: "flex" }}>
        <img className="myimage" alt="" src={myimage}></img>
      </div>{" "}
      <br />
      <p style={{ justifyContent: "center", display: "flex" }}>
        💬 Student, self-taught coder <br />
        📙 Studies at Lalbhai Dalpatbhai College of Engineering, Ahmedabad{" "}
        <br />
        {/* 🔭 Intrested in Cloud computing, DevOps, web-development, anything tech <br/> */}
        🔭 web-development, anything tech <br />
        🖥 Develops webapps. front-end works. <br />
        📚 Branch Computer Engineering <br />
        🧩 Likes gaming. cycling. and obviously coding <br />
      </p>
    </div>
  );
}

export default Aboutme;

// import React from "react";
// import myimage from "./images/profile.jpeg";

// function Aboutme() {
//   const imageStyle = {
// maxWidth: "10%",
// height: "20%",
//     display: "block",
//     borderRadius: "50%",
//   };

//   const containerStyle = {
//     justifyContent: "center",
//     display: "flex",
//   };

//   const paragraphStyle = {
//     justifyContent: "center",
//     display: "flex",
//     textAlign: "center",
//   };

//   return (
//     <div className="aboutme">
//       <h1 style={{ paddingTop: "30px" }}>About Me</h1>
//       <hr style={{ width: "70%", position: "relative", left: "15%" }}></hr>{" "}
//       <br />
//       <div style={containerStyle}>
//         <img style={imageStyle} alt="Profile" src={myimage}></img>
//       </div>{" "}
//       <br />
//       <p style={paragraphStyle}>
//         💬 Student, self-taught coder <br />
//         📙 Studies at Lalbhai Dalpatbhai College of Engineering, Ahmedabad{" "}
//         <br />
//         {/* 🔭 Interested in Cloud computing, DevOps, web-development, anything tech <br/> */}
//         🔭 Web-development, anything tech <br />
//         🖥 Develops webapps, front-end works <br />
//         📚 Branch Computer Engineering <br />
//         🧩 Likes gaming, cycling, and obviously coding <br />
//       </p>
//     </div>
//   );
// }

// export default Aboutme;
