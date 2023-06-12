import { ADD_DATA_API, DELETE_DATA_API, SHOW_DATA_API, UPDATE_DATA_API } from "../constant";

const initialState = {
    data:[],
    message:"",
    updatedata:[]
}

const apiReducer = (state=initialState , action) =>{
    
    switch(action.type){
        case SHOW_DATA_API : 
        return{
            ...state,
            data : action.payload
        }

       case ADD_DATA_API : 
        return{
            ...state,
            data :[...state.data,action.payload]
        } 
        case UPDATE_DATA_API : 
        return{
            ...state,
            updatedata :action.payload
        }
        case DELETE_DATA_API : 
        return{
            ...state,
            message : action.payload
        }

        default :
        return state;
    }
}

export default apiReducer;