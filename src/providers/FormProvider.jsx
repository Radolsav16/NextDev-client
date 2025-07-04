import { formContext } from "../contexts/form";
import { useState } from "react";

export function FormProvider({children}){

      const [isDev,setDev] = useState(true);
    
        const change = () => setDev(!isDev)
    
    return(
        <formContext.Provider value={{isDev,change}}>
            {children}
        </formContext.Provider>
    )
}

