import React, { Component } from "react";
import { withRouter } from "react-router-dom";

let heroImg = "https://images.unsplash.com/photo-1467020323552-36f7bf0e30e6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=531319c82648653fd61091ddd2141768&auto=format&fit=crop&w=750&q=80";

class CropHead extends Component{
	constructor(props){
		super(props);
		this.state = {
      headerText: "Tomato",
      headerImg: heroImg;
		}
    render(){
      return (
        <CropHead />  
      )
    }
	}
}


// Final render of Crop page
class SingleCrop extends Component {
	<CropHead/>		
}

export default SingleCrop;
