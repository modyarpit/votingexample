import React from 'react';
//import ReactDOM from 'react-dom';

class Increment extends React.Component {

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

class LifeCycle extends React.Component {
    constructor(props) {
        super(props);
        console.log("constructor: Default state time!");
        this.state = {
            count: 0
        };
        this.increase = this.increase.bind(this);
    }
    increase() {
        this.setState({
            count: this.state.count + 1
        });
    }

    componentWillUpdate(newProps, newState) {
        console.log("componentWillUpdate: Component is about to update!")
    }

    componentDidUpdate(currentProps, currentState) {
        console.log("componentDidUpdate: Component just updated!");
    }

    componentWillMount() {
        console.log("componentWillMount: Component is about to mount!")
    }

    componentDidMount() {
        console.log("componentDidMount: Component just mounted!");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount: Component is about to be removed")
    }

    shouldComponentUpdate(newProps, newState) {
        console.log("shouldComponentUpdate: Should component update?")
        if (newState.count < 5) {
            console.log("shouldComponentUpdate: Component should update!")
            return true;
        } else {
            //ReactDOM.unmountComponentAtNode(destination);
            console.log("shouldComponentUpdate: Component should not update!")
            return false;
        }
    }
    componentWillReceiveProps(newProps) {
        console.log("componentWillReceiveProps: Component will get new props!")
    }
    render() {
        var backgroundStyle = {
            padding: 50,
            border: "#333 2px dotted",
            width: 250,
            height: 100,
            borderRadius: 10,
            textAlign: "center"
        };
        return (
            <div style={backgroundStyle}>
                <Increment display={this.state.count} />
                <button onClick={this.increase}>+</button>
            </div>
        );
    }
}
console.log("defaultProps: Default prop time!");
LifeCycle.defaultProps = {
    name:"Arpit"
};

export default LifeCycle;