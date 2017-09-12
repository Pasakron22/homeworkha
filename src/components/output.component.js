import React , { Component } from 'react';
import Input from './input.component'

class Output extends Component {
  constructor(props){
    super(props)
   
  
  }
  
  

  render(){
    var show = this.props.location
    return (
      <div>
        <div>
         <h3>{show.props}</h3>
        </div>
      </div>
    );
  }
}


export default Output