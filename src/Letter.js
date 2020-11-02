import React,{Component} from 'react';

class Letter extends Component {
   render(){
      const letterStyle={
         padding:10,
         margin:2,
         backgroundColor: this.props.bgColor,
         color: "#333",
         display: "inline-block",
         fontFamily: "monospace",
         fontSize:29,
         textAlign: "center"
      }

      return (
         <div style={letterStyle}>{this.props.children}</div> 
      )
   }
}

export default Letter;