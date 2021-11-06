import React, {Component} from 'react';

class Search extends Component {
    constructor(props){
      super(props)

      // Binding this keyword
      this.handleClick = this.handleClick.bind(this)

      const img1 = require('../img/googlelogo.png');
      const img2 = require('../img/side-hustle.png');


        // Set initial state
        this.state = {
            index: 0,
            imgList: [img1, img2]
        }
    }
    
    handleClick(){

    if (this.state.index + 1 === this.state.imgList.length){
        this.setState({
            index: 0
        })
    }
        else{
            this.setState({
                index: this.state.index + 1
            })
        }
    
    }
      
    render(){
      return (
        <div>
          <h2>SideHustle:</h2>
          <img src={this.state.imgList[this.state.index]} alt="Logos" /><br />
         <input type="text" id="logo-search" placeholder="Search"/>
         {/* Set hundle */}
          <button onClick={this.handleClick}>
            Search
          </button>
        </div>
      )
    }
  }
    
  export default Search