import React , { Component } from 'react';
import {Output} from '.';
import {BrowserRouter , Switch , Route , Link } from 'react-router-dom';
class Input extends Component {
  constructor(props){
      super(props)
      this.state = {1:""}
  }

  change(in){
    const out = o.target.1
    this.setState({value:out});
  }

  

  render(){
    
    return (
      <div>
        <form>
          <input type="text" onChange={this.change.bind(this)}/>
        </form>
        <button><Link to={{pathname:"/output",prop : this.state.value}}>OK</Link></button>
        <Route path="/output" component={Output} />
      </div>
    );
  }
}


export default Input