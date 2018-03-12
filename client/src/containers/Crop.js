import React, { Component } from "react";
import { connect } from "react-redux";
import '../styles/Crop.css'; 


// let heroImg = "https://images.unsplash.com/photo-1467020323552-36f7bf0e30e6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=531319c82648653fd61091ddd2141768&auto=format&fit=crop&w=750&q=80";

// adding the crop header ( background pic / title )
 function CropHead(props){ 
    return (
      <div className='headbg'>
        <h1 className='headText'>{props.title} </h1>
      </div>
    );
  
}

// adding description and bullet section
class CropInfo extends Component{
  constructor(props){
    super(props);
    this.state={
      // adding and array of info elemenst to loop through
      info:[
        'Cornhole etsy sriracha shoreditch tacos ugh. Air plant gentrify hammock venmo franzen kale chips.  Single-origin coffee lo-fi etsy, umami organic qui',
        'Cornhole etsy sriracha shoreditch tacos ugh. Air plant gentrify hammock venmo franzen kale chips.  Single-origin coffee lo-fi etsy, umami organic qui',
        'Cornhole etsy sriracha shoreditch tacos ugh. Air plant gentrify hammock venmo franzen kale chips. Single-origin coffee lo-fi etsy, umami organic qui',
        'Cornhole etsy sriracha shoreditch tacos ugh. Air plant gentrify hammock venmo franzen kale chips.  Single-origin coffee lo-fi etsy, umami organic qui'
      ], 
      description: "Cornhole etsy sriracha shoreditch tacos ugh. AirCornhole etsy sriracha shoreditch tacos ugh. Air plant gentrify hammock venmo franzen kale chips.Single-origin coffee lo-fi etsy, umami organic qui- noa post-ironic yuccie meh pok pok chartreuse til- de distillery whatever 3 wolf moon. coffee lo-fi etsy"
    }
  }
  render(){
    const listItems = this.state.info.map((infoItem) =>   <li className='infoItems'>{infoItem}</li>);
    return(
      <div className='infoSection'>
        <div className='infoDesc'><p>{this.state.description}</p>        </div>
        <ul className='infoWrapper'>{listItems}</ul>
      </div>
    )
  }
}

// addingl crop How to section
class HowTo extends Component{
  render(){
    return (
      <div>
        <h2>How to grow {CropHead.state.title}</h2>
      </div>
    )
  }
}
// Final render of Crop page
class SingleCrop extends Component {
  render(){
    return(
      <div>
       <CropHead title='tomato'/>
       <CropInfo/>
       {/* <HowTo/> */}
      </div>
    )
  }  
}

export default SingleCrop;
