import { ADD_DATA, DELETE_DATA, SHOW_DATA, UPDATE_DATA } from "../constant";

const initialState = {
    employees:[
    ]
}

const myReducer = (state=initialState , action) =>{
    switch(action.type){
        case SHOW_DATA : 
        return{
            ...state
        }
        case ADD_DATA : 
        return{
            ...state,
            employees : state.employees.concat(action.payload)
        }
        case DELETE_DATA : 
        return{
            ...state,
            employees: state.employees.splice(action.payload,1)
        }
        case UPDATE_DATA :
            let id = action.payload.id;
            let object = {
                title:action.payload.title,
                description:action.payload.description
            }
            state.employees.splice(id,1,object);
            return{
                ...state,
            }
        default :
        return state;
    }
}

export default myReducer;