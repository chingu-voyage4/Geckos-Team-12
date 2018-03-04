import React, { Component } from "react";
import { withRouter } from "react-router-dom";

export class Navbar extends Component {
  goHome = () => this.props.history.push("/");
  goCatalog = () => this.props.history.push("/catalog");
  goUser = () => this.props.history.push("/user");
  render() {
    return (
      <div>
        <div>
          <button onClick={this.goHome}>Home</button>
          <button onClick={this.goCatalog}>Catalog</button>
        </div>
        <div>
          <button onClick={this.goUser}>User</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Navbar);
