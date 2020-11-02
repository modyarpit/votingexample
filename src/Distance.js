import React,{Component} from 'react';

class Distance extends Component {
   constructor(props){
      super(props);
      this.state ={
         speed : this.props.speed,
         time : this.props.time
      }
   }
   render(){
      return (
         <>
            <h1>Distance is : <span>{parseFloat(this.state.speed) * parseFloat(this.state.time)} </span> km</h1>
         </>
      )
   }
}

export default Distance;