import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCrops } from "../redux/Crops";
import { addCrop } from "../redux/Mygarden";
import "../assets/css/catalog.css";

export class Catalog extends Component {
  componentWillMount() {
    this.props.getCrops();
  }
  addCrop(cropId) {
    console.log(cropId);
    this.props.addCrop(this.props.auth, cropId);
  }
  render() {
    const { crops, loading } = this.props;
    return (
      <div className="container">
        <section className="choose">
          <h1>Choose your crop</h1>
          <input type="text" />
        </section>
        <div className="crop-container">
          {loading && <p>Crops Loading...</p>}
          {!loading && crops.length > 0
            ? crops.map(crop => (
                <div key={crop._id}>
                  <div className="crop-data">
                    <Link to={`/crops/${crop._id}`}>
                      <img src={crop.image_url_thumb} alt="Crop thumb" />
                      <h3>{crop.name}</h3>
                    </Link>
                    <button onClick={() => this.addCrop(crop._id)}>
                      <i className="far fa-plus-square fa-2x" />
                    </button>
                  </div>
                </div>
              ))
            : !loading && (
                <p className="crop-error">
                  No crops found...Come back next spring
                </p>
              )}
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
  getCrops: () => dispatch(getCrops()),
  addCrop: (username, cropId) => dispatch(addCrop(username, cropId))
});

// function changeImage(){
//  let
// }
export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
