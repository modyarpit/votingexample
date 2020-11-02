import React,{Component} from 'react';

class LightningCounter extends Component {
    constructor(props){
        super(props);

        this.state={
            strikes : 0
        };

        this.timerTicks = this.timerTicks.bind(this);
    }

    timerTicks(){
        this.setState((prevState,props) => {
            return {
                    strikes: prevState.strikes + parseInt(props.counter)
                };
            }
        );
    }
    // when Component fully render then this is called to do any
    // logical calculation or any computation
    componentDidMount(){
        setInterval(this.timerTicks,1000);
    }

    render() {
        var counterStyle = {
            color: "#66FFFF",
            fontSize: 50
        };

        return (
            <h1 style={counterStyle}>{this.state.strikes.toLocaleString()}</h1>
        );
    }
}

class LightningCounterDisplay extends Component {
    render() {

        var commonStyle = {
            margin: 0,
            padding: 0
        };

        var divStyle = {
            marginTop:10,
            width: 250,
            textAlign: "center",
            backgroundColor: "black",
            padding: 40,
            fontFamily: "sans-serif",
            color: "#999",
            borderRadius: 10
        };

        var textStyles = {
            emphasis: {
                fontSize: 38,
                ...commonStyle
            },
            smallEmphasis: {
                ...commonStyle
            },
            small: {
                fontSize: 17,
                opacity: 0.5,
                ...commonStyle
            }
        };

        return (
            <div style={divStyle}>
                <LightningCounter {...this.props}/>            
                <h2 style={textStyles.smallEmphasis}>LIGHTNING STRIKES</h2>
                <h2 style={textStyles.emphasis}>WORLDWIDE</h2>
                <p style={textStyles.small}>(since you loaded this example)</p>
            </div>
        );
    }
}

export default LightningCounterDisplay;