import React, { Component } from "react";
import { connect } from "react-redux";

export class Landing extends Component {
  render() {
    const { auth } = this.props;
    return (
      <div>
        {" "}
        {auth && <p>Welcome Grower</p>} {!auth && <p>Welcome futur Grower</p>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth.authenticated
  };
};

export default connect(mapStateToProps, null)(Landing);
