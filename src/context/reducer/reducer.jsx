export const Reducer =(state,action)=>{
    switch (action.type){
        case "ADD_RECORDS":
            return{
                ...state,
                addData:[...state.addData, action.payload]
            }
            default:
                return state;
    }
}