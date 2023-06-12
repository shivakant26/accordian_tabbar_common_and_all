import React from "react";
import { connect } from "react-redux";
import { getAllData , SaveAllData , deleteProduct , updateApiData } from "../redux/action/Action";

class Crud extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
    };
  }
  
   componentDidMount() {
     this.props.getAllData();
   }

  componentDidUpdate(prevProps) {
    if (this.props.message !== prevProps.message) {
      this.props.getAllData();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.updatedata.message !== prevProps.updatedata.message) {
      this.props.getAllData();
    }
  }

   addWish(e){
     e.preventDefault();
     console.log("data",this.state)
     if(this.state.id){
        this.props.updateApiData(this.state)
        this.setState({id:""})
     }else{
       this.props.SaveAllData(this.state);
     }
     this.setState({
       title: "",
       description: "",
     });
   }
 
   removeProduct(id){
    let sure = window.confirm("Are you sure to Delete?")
    if(sure){
      this.props.deleteProduct(id)
    }else{
      return false
    }
   }

   editProduct(item){
   this.setState({
    id:item._id,
    title:item.title,
    description:item.description
   })
   }
  render() {
    return (
      <>
        <h2>Class Based Component Api Integration</h2>
        <div className="wish_form">
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
                this.addWish(e);
              }}
            >
              {
                this.state.id ? "Update" : "submit"
              }
            </button>
          </div>
        </form>
        </div>
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
            {this?.props?.data?.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item._id}</td>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                  <td>
                    <button className="edit_api_btn" onClick={()=>this.editProduct(item)}>
                      <i class="fa fa-edit"></i>
                    </button>
                    <button className="del_api_btn" onClick={()=>this.removeProduct(item._id)}>
                      <i class="fa fa-trash"></i>
                    </button>
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
  return state.apiReducer;
};

const mapDispatchToProps = {
  getAllData,
  SaveAllData,
  deleteProduct,
  updateApiData
};

export default connect(mapStateToProps, mapDispatchToProps)(Crud);
