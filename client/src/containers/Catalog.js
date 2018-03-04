import React, { Component } from "react";
import { connect } from "react-redux";
import { getCrops } from "../redux/Crops";

export class Catalog extends Component {
  componentWillMount() {
    this.props.getCrops();
  }
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
                  <h3>{crop.name}</h3>
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
