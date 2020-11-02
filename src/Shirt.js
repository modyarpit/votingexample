import React from 'react';

class Display extends React.Component {
    render() {
        const shirtStyle = {
            height: 200,
            width: 150,
            padding: 0,
            textAlign: "center",
            backgroundColor: "#FFF",
            boxShadow: "0px 0px 5px #666"
        };

        return (
            <div style={shirtStyle}>
                <p>{this.props.color}</p>
                <p>{this.props.num}</p>
                <p>{this.props.size}</p>
            </div>
        );
    }
}

class Label extends React.Component {
    render() {
        return (
            <Display {...this.props} />
        );
    }
}

class Shirt extends React.Component {
    render() {
        return (
            <div>
                <Label {...this.props} />
            </div>
        );
    }
}

export default Shirt;