import { ADD_DATA, DELETE_DATA, EDIT_DATA, SHOW_DATA } from "../constant";

const initialState = {
    employees:[
        {id:1 ,title:"cricket",description:"it is a game"},
        {id:2 , title:"Hockey",description:"it is a game"},
        {id:3 , title:"Football",description:"it is a game"},
        {id:4 , title:"Racing",description:"it is a game"},
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
            employees: state.employees.filter((item,index)=>item.id !== action.payload)
        }
        case EDIT_DATA :
            debugger;
            return{
                ...state,
                employees : state.employees?.map((contact,i)=>
                contact.id === action.payload ? {
                    ...contact,
                    title : action.payload.title,
                    description : action.payload.description
                }
                : contact
                )
            }
        default :
        return state;
    }
}

export default myReducer;