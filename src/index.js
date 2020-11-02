import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Demo from './Demo';
import Distance from './Distance';
import Buttonify from './Buttonify';
import Letter from './Letter';
import Card from './Card';
import Shirt from './Shirt';
import LightningCounterDisplay from './LightningCounter';
import Circle from './Circle';

import * as serviceWorker from './serviceWorker';


// function showCircle() {
//   var colors = ["#393E41", "#E94F37", "#1C89BF", "#A1D363"];
//   var ran = Math.floor(Math.random() * colors.length);
//   // return a Circle with a randomly chosen color
//   return <Circle bgColor={colors[ran]} />;
// }

var colors = ["#393E41", "#E94F37", "#1C89BF", "#A1D363","#85FFC7", "#297373", "#FF8552", "#A40E4C"];
var renderData = [];
// for (var i = 0; i < colors.length; i++) {
//   renderData.push(<Circle bgColor={colors[i]} />);
// }

for (var i = 0; i < colors.length; i++) {
  var color = colors[i];
  renderData.push(<Circle key={i.toLocaleString() + color} bgColor={color} />);
}

ReactDOM.render(
  // <React.StrictMode>
  <>
    <Demo />
    <Distance speed="50" time="50" />
    <Distance speed="100" time="15" />
    <Distance speed="85" time="3.25" />
    <Buttonify behavior="submit">Send Data</Buttonify> 
    <div>
      <Letter bgColor="Yellow">A</Letter>
      <Letter bgColor="Red">B</Letter>
      <Letter bgColor="Green">C</Letter>
      <Letter bgColor="Orange">D</Letter>
      <Letter bgColor="Blue">E</Letter>
    </div>
    <Card color="#FFA737" /><br/>
    <Card color="#CCA737" />
    <Shirt color="Steelblue" num="3.14" size="medium" />
    <LightningCounterDisplay counter="50" />
    {/*{showCircle()}
    {showCircle()}
    {showCircle()} */}
    {renderData}
  </>
  // </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
