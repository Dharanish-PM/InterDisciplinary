import React from "react";
import "../css/stylesheet.css";
import "../css/dues.css";
import "../css/login.css";
import { Http } from "./Http";
const Dues = (props) => {
  const Data = props.Data;

  const sampleRoll = "20 01 007";

  return (
    <div className="container">
      <div className="dues">
        <div className="student-details">
          <p>
            <span className="bold register-no">Register no:</span>
            <span className="values">{sampleRoll}</span>
            <br />
            <span className="bold name">Name:</span>
            <span className="values">{Data[sampleRoll]["Name"]}</span>
            <br />
            <span className="bold dept">Department:</span>
            <span className="values">Default</span>
            <br />
            <span className="bold course">Course:</span>
            <span className="values">B.E</span>
            <br />
            <span className="bold sem">Semseter:</span>
            <span className="values">Default</span>
            <br />
          </p>
        </div>
        <div className="pending-dues">
          <h4>Pending Dues</h4>
          <table>
            <tr>
              <th>Accounts</th>
              <td>0</td>
            </tr>
            <tr>
              <th>Library</th>
              <td>0</td>
            </tr>
            <tr>
              <th>Hostel</th>
              <td>{Data[sampleRoll]["Total"]}</td>
            </tr>

            <tr>
              <th>Total</th>
              <td>0</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dues;
