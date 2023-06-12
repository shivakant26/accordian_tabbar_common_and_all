import React from "react";
import { connect } from "react-redux";
import { addData, getEmployee ,updateData,deleteData } from "../redux/action/Action";


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      title: "",
      description: ""
    };
  }

  submit(e) {
    e.preventDefault();
    if(this.state.id !== null){
      this.props.updateData(this.state)
      this.setState({id:null})
    }else{
      this.props.addData(this.state);
    }
    this.setState({
      title: "",
      description: "",
    });
  }

  componentDidMount() {
    this.props.getEmployee();
  }

  editOp(id){
    let data = this.props.employees;
    let object = data[id];
    this.setState({
      id:id,
      title:object.title,
      description:object.description
    })
  }

  deleOp(id){
    this.props.deleteData(id)
  }

  render() {
    console.log("props",this.props.employees)
    console.log("id",this.state.id)
    return (
      <>
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
             {this.state.id !== null ? "Update" : "Submit"}
             </button>
            
          </div>
        </form>
        <table border="1">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this?.props?.employees?.map((item, index) => {
              return (
                <tr key={index}>
                    <td>{index}</td>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>
                    <button onClick={()=>{this.editOp(index)}}>Edit</button>
                    <button onClick={()=>{this.deleOp(index)}}>delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        </>)
      }
}
const mapStateToProps = (state) => {
    return state.myReducer
}

const mapDispatchToProps = {
  addData,
  getEmployee,
  updateData,
  deleteData
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
