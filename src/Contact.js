import React, { useState } from "react";
import git from "./images/github.png";
import linkedin from "./images/linkedin.png";
import resume from "./images/BHAVESH_VAGHELA.pdf";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const mailtoLink = `mailto:bhaveshvaghela4545@gmail.com?subject=Contact Form Submission&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    window.location.href = mailtoLink;
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "30px",
  };

  const leftSideStyle = {
    flex: "1",
    marginRight: "20px",
  };

  const rightSideStyle = {
    flex: "1",
    marginLeft: "20px",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const inputStyle = {
    marginBottom: "20px",
    padding: "12px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    width: "100%",
    boxSizing: "border-box",
  };

  const buttonStyle = {
    padding: "12px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    width: "100%",
  };

  const staticLineStyle = {
    backgroundColor: "black",
    color: "white",
    padding: "10px",
    textAlign: "center",
    marginTop: "20px",
  };

  return (
    <div className="contact" style={{ marginTop: "-90px" }}>
      <h1 style={{ paddingTop: "30px" }}>Contact</h1>
      <hr style={{ width: "70%", position: "relative", left: "15%" }} />
      <div style={containerStyle}>
        <div style={leftSideStyle}>
          <div style={{ fontSize: "30px" }}>Get in contact:</div>
          <br />
          <a
            className="myemail"
            style={{ textDecorationLine: "none", color: "white" }}
            target="_blank"
            rel="noreferrer"
            href="mailto:bhaveshvaghela4545@gmail.com"
          >
            bhaveshvaghela4545@gmail.com
          </a>
          <br />
          <a
            style={{ cursor: "pointer" }}
            target="_blank"
            rel="noreferrer"
            href="https://github.com/bhavesh848785"
          >
            <img
              style={{ color: "white" }}
              src={git}
              alt="GitHub"
              height={46}
              width={46}
            />
          </a>
          <a
            style={{ cursor: "pointer" }}
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/bhavesh-va/"
          >
            <img src={linkedin} alt="LinkedIn" height={50} width={50} />
          </a>
          <br />
          <br />
          <div style={{ fontSize: "30px" }}>Employment:</div>
          <br />
          <div className="mine">
            I'm always open to new
            <br />
            opportunities, so feel free
            <br />
            to take a look at
            <a
              style={{ cursor: "pointer" }}
              target="_blank"
              rel="noreferrer"
              href={resume}
            >
              my resume!
            </a>
          </div>
        </div>
        <div style={rightSideStyle}>
          <form style={formStyle} onSubmit={handleSubmit}>
            <label>
              Enter Your Name:
              <input
                type="text"
                style={inputStyle}
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <label>
              Enter Your Email:
              <input
                type="email"
                style={inputStyle}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label>
              Your Message:
              <textarea
                style={inputStyle}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </label>
            <button type="submit" style={buttonStyle}>
              Submit
            </button>
          </form>
        </div>
      </div>
      <div style={staticLineStyle}>
        To use this template as your website, go to{" "}
        <a
          style={{ cursor: "pointer", color: "white" }}
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Divya4242/Portfolio"
        >
          this repository
        </a>
        , download the source code and change relevant information!
      </div>
    </div>
  );
}

export default Contact;
