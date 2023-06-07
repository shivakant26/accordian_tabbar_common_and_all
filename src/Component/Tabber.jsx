import React from "react";

class Tabber extends React.Component{
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }
    display(key){
        if(key === 'tab1'){
            document.getElementById("tab1").style.display="block"
            document.getElementById("tab2").style.display="none"
            document.getElementById("tab3").style.display="none"
        }else if( key === 'tab2'){
            document.getElementById("tab1").style.display="none"
            document.getElementById("tab2").style.display="block"
            document.getElementById("tab3").style.display="none"
        }else if( key === 'tab3'){
            document.getElementById("tab1").style.display="none"
            document.getElementById("tab2").style.display="none"
            document.getElementById("tab3").style.display="block"
        }
    }
    render(){
        return(
            <>
            <h4>Tabber</h4>
            <div className="tabber">
                <ul>
                    <li className="active" onClick={()=>{this.display("tab1")}}>tabone</li>
                    <li onClick={()=>{this.display("tab2")}}>tabtwo</li>
                    <li onClick={()=>{this.display("tab3")}}>tabthree</li>
                </ul>
            </div>
            <div className="tabdata" id="tab1">
                <p>this is first tab</p>
            </div>
            <div className="tabdata" id="tab2">
                <p>this is second tab</p>
            </div>
            <div className="tabdata" id="tab3">
                <p>this is third tab</p>
            </div>
            </>
        )
    }
}


export default Tabber;