import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {

    render() {
        var textStyle = {
        fontSize: 72,
        fontFamily: "sans-serif",
        color: "#333",
        fontWeight: "bold"
    };
    return (
        <div style={textStyle}>
            {this.props.display}
        </div>
        );
    }
}

class PlusCounter extends React.Component {
    render ()
    {
        return (
            <button onClick={this.props.clickHandler}>+</button>
        )
    }
}

class EventAttached extends React.Component {
    
    // constructor(props){
    //     super(props);
    //     //this.handleMyEvent = this.handleMyEvent.bind(this);
    // }

    handleMyEvent() {
        console.log('You clicked me');
    }

    componentDidMount() {
        ReactDOM.findDOMNode(this).addEventListener("click", this.handleMyEvent);
    }

    componentWillUnmount() {
        ReactDOM.findDOMNode(this).removeEventListener("click", this.handleMyEvent);
    }

    render() {
        return (
            <button>Hello!</button>
        );
    }
}

class CounterParent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
        this.increaseState = this.increaseState.bind(this);
    }

    increaseState(e){
        var currentCount = this.state.count;
        if(e.shiftKey)
            currentCount = this.state.count + 10;
        else 
            currentCount = this.state.count + 1;

        this.setState({
            count : currentCount
        });
    }

    render(){
        var backgroundStyle = {
            padding: 50,
            backgroundColor: "#FFC53A",
            width: 250,
            height: 100,
            borderRadius: 10,
            textAlign: "center"
        };
        var buttonStyle = {
            fontSize: "1em",
            width: 30,
            height: 30,
            fontFamily: "sans-serif",
            color: "#333",
            fontWeight: "bold",
            lineHeight: "3px"
        };
        return (
            <div style={backgroundStyle}>              
                <Counter display={this.state.count} />
                <button onClick={this.increaseState} style={buttonStyle}>+</button>
                <PlusCounter clickHandler={this.increaseState} />
                <br/>             
                <EventAttached />
            </div>
        );
    }
}

export default CounterParent;