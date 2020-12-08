import React from "react";
import "antd/dist/antd.css";
import "./assessment.css";

import { MoreOutlined } from "@ant-design/icons";

class assessment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        {this.props.data.map((i) => {
          return (
            <div className="Child-Row">
              <div
                className="Child-Column"
                style={{ "padding-right": "8.5em" }}
              >
                <span>
                  <h2>Assessments {i.Year}</h2>
                </span>
                <span>
                  <nobr>
                    <h5>Created by {i.Coach}</h5>
                  </nobr>
                </span>
                <span>
                  <nobr>
                    <h5>
                      {i.Questions} Questions, Total Time Required: {i.Time}min
                      Level: <span style={{ color: "green" }}>{i.Level}</span>{" "}
                    </h5>
                  </nobr>
                </span>
              </div>

              {i.Attendance != "" ? (
                <div className="Child-Column">
                  <span>
                    <h3>Total Attendance </h3>{" "}
                  </span>
                  <span>
                    <h2>{i.Attendance}</h2>
                  </span>
                </div>
              ) : (
                <div className="Child-Column"></div>
              )}
              {i.Lead != "" ? (
                <div className="Child-Column">
                  <span>
                    <h3>Lead Generated </h3>{" "}
                  </span>
                  <span>
                    <h2>{i.Lead}</h2>
                  </span>
                </div>
              ) : (
                <div className="Child-Column"></div>
              )}
              <div className="Child-Column" style={{ textAlign: "center" }}>
                <MoreOutlined />
              </div>
            </div>
          );
        })}{" "}
      </div>
    );
  }
}

export default assessment;
