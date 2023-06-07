import { ADD_DATA, DELETE_DATA, EDIT_DATA, SHOW_DATA } from "../constant"

export const getEmployee = () =>{
    return{
        type : SHOW_DATA
    }
}

export const addData = (data) =>{
    return{
        type:ADD_DATA,
        payload:data
    }
}

export const deleteData = (id) =>{
    return{
        type:DELETE_DATA,
        payload:id
    }
}

export const editData = (id) =>{
    return{
        type:EDIT_DATA,
        payload:id
    }
}