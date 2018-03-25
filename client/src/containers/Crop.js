import React, { Component } from "react";
import { connect } from "react-redux";
import { getCrop } from "../redux/Crop";
import "../assets/css/crop.css";

// let heroImg = "https://images.unsplash.com/photo-1467020323552-36f7bf0e30e6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=531319c82648653fd61091ddd2141768&auto=format&fit=crop&w=750&q=80";

// adding the crop header ( background pic / title )
const CropHead = ({ title, image_url }) => (
  <div className="headbg" style={{ background: `url(${image_url})` }}>
    <h1 className="headText">{title} </h1>
  </div>
);

// adding description and bullet section
class CropInfo extends Component {
  render() {
    const { info, description } = this.props;

    const listItems =
      info &&
      info.map(infoItem => (
        <li key={infoItem} className="infoItems">
          {infoItem}
        </li>
      ));
    return (
      <div className="infoSection">
        <div className="infoDesc">
          <p>{description}</p>{" "}
        </div>
        <ul className="infoWrapper">{listItems}</ul>
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
      <div>
        Single Crop Page
        {loading && <div>Loading Crop...</div>}
        {!loading && (
          <div>
            <CropHead title={crop.name} image_url={crop.image_url} />
            <CropInfo info={crop.info} description={crop.description} />
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
