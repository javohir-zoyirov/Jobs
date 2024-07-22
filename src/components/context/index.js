import { createContext } from "react";

export const ApiContext = createContext({
    value:[],
    setValue:(value)=>{},
    data:[],
    search:"",
    setSearch:(value)=> {}
})