import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCrops } from "../redux/Crops";

export class Catalog extends Component {
  componentWillMount() {
    this.props.getCrops();
  }
  // goCrop= () => this.props.history.push("/singlecrop");

  renderCrops() {}

  render() {
    const { crops, loading } = this.props;
    return (
      <div>
        <h1>Catalog page</h1>
        <div>
          {loading && <p>Crops Loading...</p>}
          {!loading && crops.length > 0
            ? crops.map(crop => (
                <div key={crop.id}>
                  <Link to={`/crops/${crop.name}`}>{crop.name}</Link>
                  <p>{crop.category}</p>
                </div>
              ))
            : !loading && <p>No crops found...Come back next srping</p>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    crops: state.crops.crops,
    loading: state.crops.loading,
    auth: state.auth.authenticated
  };
};

const mapDispatchToProps = dispatch => ({
  getCrops: () => dispatch(getCrops())
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
