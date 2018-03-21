import React, { Component } from "react";
import { connect } from "react-redux";
import { getCrops } from "../redux/Crops";
import "../assets/css/catalog.css";

export class Catalog extends Component {
  componentWillMount() {
    this.props.getCrops();
  }
  renderCrops() {}
// function displayCrops() {
//   for var i = 0; i< mock_crops.length; i++{
//     if(input === mock_crops.name[i]){

//     }
//   }
  
// }
  render() {
    const { crops, loading } = this.props;
    return (
      <div className="container">

          
        <section className="choose">
        <h1>Choose your crop</h1>
        <input type="text"/>
      </section>






        <div className="crop-container" >
          {loading && <p>Crops Loading...</p>}
          {!loading && crops.length > 0
            ? crops.map(crop => (
                <div key={crop.id}>
                  <div className="crop-data">
                    <img alt=""src={crop.url}/>
                    <h3>{crop.name}</h3>
                    <p>{crop.category}</p>
                  </div>
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

// function changeImage(){
//  let 
// }
export default connect(mapStateToProps, mapDispatchToProps)(Catalog);