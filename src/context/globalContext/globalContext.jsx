import { createContext,useReducer } from "react";
import { Reducer } from "../reducer/reducer";

const initialStates={
    addData:[],
}

export const GlobalContext = createContext(initialStates);

export const GlobalProvider = ({children})=>{
    const [state,dispatch]=useReducer(Reducer,initialStates);

    const addRecords=(data)=>{
        dispatch({
            type:"ADD_RECORDS",
            payload:data
        })
    }
    return(
        <GlobalContext.Provider
        value={{
            state,
            dispatch,
            addRecords
        }}
        >
            {children}
        </GlobalContext.Provider>
    )
}