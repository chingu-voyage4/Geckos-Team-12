import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getTasks } from "../redux/Tasks";
import "../assets/css/weeklytasks.css";


    

    render() {
      const { tasks, loading } = this.props;
      return (

        <div className="taskContainer">
          <h2>This Weeks Tasks</h2>
          <div className="WeekdayContainer">
            <div className="weekday monday">
              <h3>Monday</h3>
              <p className="date"></p>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div className="weekday tuesday">
            <h3>Tuesday</h3>
              <p className="date"></p>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div className="weekday wednesday">
            <h3>Wednesday</h3>
              <p className="date"></p>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div className="weekday thursday">
            <h3>Thursday</h3>
              <p className="date"></p>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div className="weekday friday">
            <h3>Friday</h3>
              <p className="date"></p>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div className="weekday saturday">
            <h3>Saturday</h3>
              <p className="date"></p>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div className="weekday sunday">
              <h3>Sunday</h3>
                <p className="date"></p>
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>  
            </div>
          </div>
        </div>
     );
    }
    export class WeeklyTasks extends Component {
    }