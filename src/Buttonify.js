import React,{Component} from 'react';

class Buttonify extends Component {
   render(){
      return (          
         <button type={this.props.behavior}>{this.props.children}</button>         
      )
   }
}

export default Buttonify;