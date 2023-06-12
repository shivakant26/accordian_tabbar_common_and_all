import React from "react";

class Test extends React.Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then((res)=>res.json())
        .then((result)=>this.setState({data:result}))
    }
    render(){
        console.log(this.state.data)
        return(
            <>
            <h4>Test Application</h4>
            {/* {
                this.state.data?.map((item,id)=>{
                    return(
                        <img src={item.thumbnailUrl} />
                    )
                })
            } */}
            </>
        )
    }
}

export default Test;