import React from "react";
import { connect } from "react-redux";
import { deleteData, editData } from "../redux/action/Action";

class Listing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        id: 0,
      title: "",
      description: ""
    };
  }
  editOp(item){
    console.log("editable id",item)
    this.setState({
        id: item.id,
        title: item.title,
        description: item.description
      });
  }

  deleOp(id){
    this.props.deleteData(id)
  }

  render() {
    console.log(123456,this.props)
    return (
      <>
        <h3>Listing </h3>
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
                    <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>
                    <button onClick={()=>{this.editOp(item)}}>Edit</button>
                    <button onClick={()=>{this.deleOp(item.id)}}>delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

const mapStateToProps = (state) => {
    return state.myReducer
}

const mapDispatchToProps = {
    deleteData,
    editData
}

export default connect(mapStateToProps  , mapDispatchToProps)(Listing);
