import { Instance } from "../../api/apiConfig";
import {
  ADD_DATA,
  ADD_DATA_API,
  DELETE_DATA,
  DELETE_DATA_API,
  ERROR,
  SHOW_DATA,
  SHOW_DATA_API,
  UPDATE_DATA,
  UPDATE_DATA_API,
} from "../constant";

export const getEmployee = () => {
  return {
    type: SHOW_DATA,
  };
};

export const addData = (data) => {
  return {
    type: ADD_DATA,
    payload: data,
  };
};

export const deleteData = (id) => {
  return {
    type: DELETE_DATA,
    payload: id,
  };
};

export const updateData = (data) => {
  return {
    type: UPDATE_DATA,
    payload: data,
  };
};


export const getAllData = () => {
  return (dispatch) => {
    Instance.get(`/getproduct`)
      .then((response) => {
        dispatch({ type: SHOW_DATA_API, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: ERROR, payload: error.message });
      });
  };
};


export const SaveAllData = (data) => {
    return (dispatch) => {
      Instance.post(`/addproduct`,data)
        .then((response) => {  
          dispatch({ type: ADD_DATA_API, payload: response.data });
        })
        .catch((error) => {
          dispatch({ type: ERROR, payload: error.message });
        });
    };
  };

  export const updateApiData = (data) => {
    const {id, ...rest} = data;
    const idObj = {id: id};
    return (dispatch) => {
      Instance.put(`/updateproduct/${idObj.id}`,rest)
      .then((response) => {  
          // console.log(response)
          dispatch({ type: UPDATE_DATA_API, payload: response.data });
        })
        .catch((error) => {
          dispatch({ type: ERROR, payload: error.message });
        });
    };
  };


  export const deleteProduct = (id) => {
    return (dispatch) => {
      Instance.delete(`/deleteproduct/${id}`)
        .then((response) => {
          dispatch({ type: DELETE_DATA_API, payload: response.data });
        })
        .catch((error) => {
          dispatch({ type: ERROR, payload: error.message });
        });
    };
  };