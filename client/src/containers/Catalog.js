import React, { Component } from "react";
import { connect } from "react-redux";
import { getCrops } from "../redux/Crops";
import "./catalog.css";

export class Catalog extends Component {
  componentWillMount() {
    this.props.getCrops();
  }
  renderCrops() {}

 
 function displayCrop(){

  for (var i = 0; i < mock_crops.length; i++){
if (crop.name === input){

  
  }



}

 }
  render() {
    const { crops, loading } = this.props;
    return (
      <div>

        <nav>   
          <h3 className="logo">Name</h3>
          <a href ="index.html">My Garden</a>
        </nav>   
        <section className="choose">
          <h1>Choose your crop</h1>
          <div className="crop-input">
            <input type="text" oninput={this.displayCrop}/>
          </div>
      </section>






        <div className="crop-container" >
          {loading && <p>Crops Loading...</p>}
          {!loading && crops.length > 0
            ? crops.map(crop => (
                <div key={crop.id}>
                  <div className="crop-data">
                    <img alt="test"src={crop.url}/>
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











// changeImage(){
// //  let 
// // }
export default connect(mapStateToProps, mapDispatchToProps)(Catalog);

// var changeImage = () => {
//   let img1 = document.querySelector(id)
// }