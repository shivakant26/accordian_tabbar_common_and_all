import React from "react";

class About extends React.Component{
    constructor(){
        console.log("construtor")
        super();
        this.state={
            value:8
        }
        // this.update = this.update.bind(this);
    }

    update = () => {
        this.setState({value:this.state.value + 1})
    }

    componentDidMount(){
        console.log("component Did Mount")
    }

    componentDidUpdate(){
        console.log("component Did Update")
    }

    componentWillUnmount(){
        console.log("component will Unmount")
    }

    render(){
        console.log("render")
        return(
            <>
            <h2>Class Component = {this.state.value}</h2>
            <button onClick={this.update}>click</button>
            </>
        )
    }
}

export default About;