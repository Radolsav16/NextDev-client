import axios from "axios";
import { useState } from "react";


const useNewsletter = () =>{
    const [email,setEmail] = useState("");
    const [isSubscribed,setisSubscribed] = useState(false);

    const onChange = (e) =>{
      setEmail(e.currentTarget.value);
    }

     async function subscribe(){
      await axios.post('http://localhost:3030/newsletter',{
        email,
        role:'developer'
      })
      setisSubscribed(true)
      setEmail("");
    }

    return {
        onChange,subscribe,isSubscribed
    }
}



export default useNewsletter;