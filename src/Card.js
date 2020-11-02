import React,{Component} from 'react';

class Square extends Component {
   render(){
      var squareStyle = {
         height: 150,
         backgroundColor: this.props.color //"#FF6663"
      };
      return (
         <div style={squareStyle}>
         </div>  
      )
   }
}

class Label extends Component {
   render(){
      var labelStyle = {
         fontFamily: "sans-serif",
         fontWeight: "bold",
         padding: 13,
         margin: 0
      }
      return (
         <p style={labelStyle}>{this.props.color}</p>
      )
   }
}

class Card extends Component {
   render(){
      const cardStyle = {
         height: 200,
         width: 150,
         padding: 0,
         backgroundColor: "#FFF",
         boxShadow: "0px 0px 5px #666"
      };

      return (
         <div style={cardStyle}>
               <Square color={this.props.color} />
               <Label color={this.props.color} />
         </div>
      )
   }
}

export default Card;