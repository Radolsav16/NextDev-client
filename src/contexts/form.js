import { createContext, useContext } from "react";

export const formContext = createContext({
    isDev:true,
    change:()=>null
})


export const useFormContext = () =>{
    return useContext(formContext);
}