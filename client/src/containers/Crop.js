import React, { Component } from "react";
import { connect } from "react-redux";
import { getCrop } from "../redux/Crop";
import Back from "../components/Back";
import "../assets/css/crop.css";

const CropHead = ({ title, image_url_header }) => (
  <div className="headbg" style={{ background: `url(${image_url_header})` }}>
    <h1 className="headText">{title} </h1>
  </div>
);

// adding description and bullet section
class CropInfo extends Component {
  render() {
    const { short_desc, difficulty_level, best_season, climate } = this.props;

    return (
      <div className="infoSection">
        <div className="infoDesc">
          <p>{short_desc}</p>{" "}
        </div>
        <div className="infoWrapper">
          <div className="infoItems">Difficulty : {difficulty_level}</div>
          <div className="infoItems">Best time to plant : {best_season}</div>
          <div className="infoItems">Suitable climate: {climate}</div>
        </div>
      </div>
    );
  }
}

// Final render of Crop page
class Crop extends Component {
  componentWillMount() {
    this.props.getCrop(this.props.match.params.name);
  }
  render() {
    const { crop, loading } = this.props;
    return (
      <div className="crop">
        <Back to="/catalog" text="Catalog" />
        {loading && <div>Loading Crop...</div>}
        {!loading && (
          <div>
            <CropHead
              title={crop.name}
              image_url_header={crop.image_url_header}
            />
            <CropInfo {...crop} />
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  loading: state.crop.loading,
  crop: state.crop.crop,
  error: state.crop.error
});
const mapDispatchToProps = dispatch => ({
  getCrop: name => dispatch(getCrop(name))
});
export default connect(mapStateToProps, mapDispatchToProps)(Crop);
