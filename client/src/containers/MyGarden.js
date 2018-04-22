import React, { Component } from "react";
import "../assets/css/mygarden.css";
class MyGarden extends Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="mygarden">
        <div className="mygarden-header" id="header">
          <div className="mygarden-header-left">
            My<span>Garden</span>
          </div>
          <div className="mygarden-header-right">
            <h2>Welcome to your garden</h2>
            <h4>Here are some stats</h4>
            <ul>
              <li>
                You have completed <span>3 tutorials</span> since you joigned.
              </li>
              <li>
                You have planted <span>12 crops.</span>
              </li>
              <li>
                You have harvested <span>2 differents crops </span> so far this
                year.
              </li>
            </ul>
          </div>
        </div>
        <div className="mygarden-body">
          <div className="mygarden-body-top">
            <div className="mygarden-body-user">User</div>
            <div className="mygarden-body-today-tasks">Today's Tasks</div>
          </div>
          <div className="mygarden-body-center">
            <div className="mygarden-body-week-tasks">Week's Tasks</div>
          </div>
          <div className="mygarden-body-bottom">
            <div className="mygarden-body-crops">MyCrops</div>
            <div className="mygarden-body-suggestion">Crop Suggestions</div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyGarden;
