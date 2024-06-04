import React from "react";

function Timeline() {
  return (
    <div className="timeline">
      <h1 style={{ paddingTop: "30px" }}>Timeline</h1>
      <hr style={{ width: "70%", position: "relative", left: "15%" }}></hr>{" "}
      <br />
      <div className="d-flex" style={{ justifyContent: "center" }}>
        <ul className="rb">
          <li className="rb-item myrb ng-start-inserted">
            <div className="timestamp">
              2019-2022
              <div style={{ color: "white" }}>
                Diploma <br />
                GMB Polytechinc, RAJULA 9.63 - CGPA
              </div>
            </div>
          </li>
          <li className="rb-item ng-start-inserted">
            <div className="timestamp">
              2022-2025
              <div style={{ color: "white" }}>
                B.E Computer Engineering <br />
                L.D College of Engineering, Ahmedabad
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Timeline;
