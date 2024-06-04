import React from "react";
import img1 from "./images/e-com.jpg";
import img2 from "./images/RMS.png";
import img3 from "./images/OBPS.jpg";
import img4 from "./images/recipe.jpg";
import git from "./images/github.png";
import web from "./images/website.png";
import Az from "./images/AZ-900.png";
import AWS from "./images/AWS.png";

function Projects() {
  return (
    <div
      className="projects"
      style={{
        // width: "100%",
        // height: "100%",
        // marginTop: "30px",
        marginBottom: "-400px",
      }}
    >
      <h1 style={{ paddingTop: "30px" }}>Projects</h1>
      <hr style={{ width: "70%", position: "relative", left: "15%" }}></hr>{" "}
      <br />
      <div>
        <div
          className="container-fluid our-services px-md-5"
          style={{ padding: "0 30px", marginBottom: "50px" }}
        >
          <div
            className="row d-flex justify-content-center flex-md-nowrap mt-5"
            style={{ borderRadius: "5px" }}
          >
            <div
              className="col-md-3 card mx-2 RP"
              style={{ border: "0", padding: "5px" }}
            >
              <div
                className="our-services-icon mx-auto pt-3"
                style={{ marginBottom: "-10px" }}
              >
                <img
                  src={img1}
                  className="card-img-top"
                  alt="..."
                  height={80}
                />
              </div>
              <div className="card-body text-center">
                <h5
                  className="card-title text-center"
                  style={{ margin: "10px 0" }}
                >
                  E-commerce (MERN)
                </h5>
                <p className="card-text" style={{ fontSize: "14px" }}>
                  Developed a dynamic e-commerce website using React, featuring
                  a user-friendly interface and seamless navigation.Integrated
                  functionalities include product browsing, a shopping cart,
                  secure checkout, and user authentication.
                </p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/bhavesh848785/Meta_Mart-e--commerce-"
                >
                  <img
                    style={{ color: "black" }}
                    src={git}
                    alt="..."
                    height={46}
                    width={46}
                  />{" "}
                </a>
                <a target="_blank" rel="noreferrer" href="">
                  <img
                    style={{ marginLeft: "10px" }}
                    src={web}
                    alt="..."
                    height={46}
                    width={46}
                  />{" "}
                </a>
              </div>
            </div>
            <div
              className="col-md-3 card API"
              style={{ border: "0", padding: " 5px" }}
            >
              <div
                className="our-services-icon mx-auto pt-3"
                style={{ marginBottom: "-10px" }}
              >
                <img
                  src={img2}
                  className="card-img-top"
                  alt="..."
                  height={80}
                />
              </div>
              <div className="card-body text-center">
                <h5
                  className="card-title text-center"
                  style={{ margin: "10px 0" }}
                >
                  Restaurant Management System (PHP, MySQL, JS)
                </h5>
                <p className="card-text" style={{ fontSize: "14px" }}>
                  Designed and implemented a comprehensive restaurant management
                  system using PHP and MySQL, featuring both admin and user
                  panels.The system enables users to order food, book tables,
                  and manage reservations efficiently. The admin panel allows
                  for easy management of menu items, orders, and table bookings.
                </p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/bhavesh848785/RMS"
                >
                  <img
                    style={{ color: "black" }}
                    src={git}
                    alt="..."
                    height={46}
                    width={46}
                  />{" "}
                </a>
                <a target="_blank" rel="noreferrer" href="">
                  <img
                    style={{ marginLeft: "10px" }}
                    src={web}
                    alt="..."
                    height={46}
                    width={46}
                  />{" "}
                </a>
              </div>
            </div>
            <div
              className="col-md-3 card mx-2 OS"
              style={{ border: "0", padding: " 5px" }}
            >
              <div
                className="our-services-icon mx-auto pt-3"
                style={{ marginBottom: "-10px" }}
              >
                <img
                  src={img3}
                  className="card-img-top"
                  alt="..."
                  height={80}
                />
              </div>
              <div className="card-body text-center">
                <h5
                  className="card-title text-center"
                  style={{ margin: "10px 0" }}
                >
                  Online Bus Pass System (PHP, MySQL, JS)
                </h5>
                <p className="card-text" style={{ fontSize: "14px" }}>
                  Developed an online bus pass management system using PHP and
                  MySQL, enabling students to apply for bus passes by uploading
                  required documents.The system includes a robust admin panel
                  for verifying document authenticity and approving
                  applications.
                </p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/bhavesh848785/Online_Bus_Pass_System"
                >
                  <img
                    style={{ color: "black" }}
                    src={git}
                    alt="..."
                    height={46}
                    width={46}
                  />{" "}
                </a>
                <a target="_blank" rel="noreferrer" href="">
                  <img
                    style={{ marginLeft: "10px" }}
                    src={web}
                    alt="..."
                    height={46}
                    width={46}
                  />{" "}
                </a>
              </div>
            </div>
            <div
              className="col-md-3 card IT"
              style={{ border: "0", padding: " 5px" }}
            >
              <div
                className="our-services-icon mx-auto pt-3"
                style={{ marginBottom: "-10px" }}
              >
                <img
                  src={img4}
                  className="card-img-top"
                  alt="..."
                  height={80}
                />
              </div>
              <div className="card-body text-center">
                <h5
                  className="card-title text-center"
                  style={{ margin: "10px 0" }}
                >
                  Recipe App (As frontend developer-HTML, CSS, JS, Django)
                </h5>
                <p className="card-text" style={{ fontSize: "14px" }}>
                  Worked as a front-end developer on an online recipe site built
                  with Django, HTML, CSS, and JavaScript. •The system allows
                  users to add their recipes, view others' recipes, and like
                  their favorites.
                </p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/bhavesh848785/Recipe"
                >
                  <img
                    style={{ color: "black" }}
                    src={git}
                    alt="..."
                    height={46}
                    width={46}
                  />{" "}
                </a>
                <a target="_blank" rel="noreferrer" href="">
                  <img
                    style={{ marginLeft: "10px" }}
                    src={web}
                    alt="..."
                    height={46}
                    width={46}
                  />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*cerificate or intership portion*/}
      {/* <div style={{ marginTop: "30px" }} className="certifications">
        <h1 style={{ paddingTop: "9px" }}>Certifications</h1>
        <hr
          style={{ width: "70%", position: "relative", left: "15%" }}
        ></hr>{" "}
        <br />
        <div className="img">
          <a
            id="AWS"
            onmouseover="cursor:'pointer'"
            target="_blank"
            rel="noreferrer"
            href="https://www.credly.com/badges/0d8a3cd4-65d5-4536-8484-e6207729daf9/public_url"
          >
            <img
              id="myAWS"
              alt="AWS Solution Architect"
              title="AWS Solution Architect Associate Certification"
              style={{
                width: "190px",
                height: "190px",
                backgroundColor: "aliceblue",
              }}
              src={AWS}
            ></img>
          </a>
          <a
            id="AZ"
            onmouseover="cursor:'pointer'"
            target="_blank"
            rel="noreferrer"
            href="https://www.credly.com/badges/e68b5950-30db-4e34-ba71-b3928f39a408/public_url"
          >
            <img
              id="myAZ"
              alt="Azure Fundamental Cetificate AZ-900"
              title="Azure Fundamental Certification"
              style={{ cursor: "pointer", marginLeft: "10px" }}
              src={Az}
            ></img>
          </a>
          <a
            id="Google"
            onmouseover="cursor:'pointer'"
            target="_blank"
            rel="noreferrer"
            href="https://www.credential.net/3f3764a4-151c-484f-9626-41f076d4799f#gs.10045np"
          >
            <img
              id="myGoogle"
              style={{ marginLeft: "10px", cursor: "pointer" }}
              alt="Google Cloud Digital Leader"
              title="Google Cloud Digital Leader Certification"
              src="https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/70951264?key=fd1b640dade2417f43ccfa1848122130055c397245e58883f2bbce165356002b"
            ></img>
          </a>
        </div>
      </div> */}
    </div>
  );
}

export default Projects;
