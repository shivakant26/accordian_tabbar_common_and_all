import React from "react";
import { connect } from "react-redux";
import { addData, getEmployee } from "../redux/action/Action";
import Listing from "./Listing";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        id: 0,
      title: "",
      description: "",
      isLoading:true,
    };
  }

  submit(e) {
    e.preventDefault();
    this.props.addData(this.state);
    this.setState({
      title: "",
      description: "",
    });
  }

  componentDidMount() {
    this.props.getEmployee();
    setTimeout(()=>{
      this.setState({isLoading:false})
    },2000)
  }

  render() {
    console.log("props",this.props.employees)
    return (
      <>
      {
        this.state.isLoading ? (<>
        <div className="loading">
        <p>Loading....</p>
        </div>
        </>) : (<>
          <h2>Fill Information</h2>
        <form>
          <div className="form-field">
            <input
              type="text"
              placeholder="title"
              onChange={(e) => this.setState({ title: e.target.value })}
              value={this.state.title}
            />
          </div>
          <div className="form-field">
            <input
              type="text"
              placeholder="discription"
              onChange={(e) => this.setState({ description: e.target.value })}
              value={this.state.description}
            />
          </div>
          <div className="form-field">
            <button
              onClick={(e) => {
                this.submit(e);
              }}
            >
              Submit
            </button>
          </div>
        </form>
        <Listing />
        </>)
      }
        
      </>
    );
  }
}
const mapStateToProps = (state) => {
    return state.myReducer
}

const mapDispatchToProps = {
  addData,
  getEmployee,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
