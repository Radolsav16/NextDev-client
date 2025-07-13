import axios from "axios";
import { useReducer } from "react";
import { useNavigate, useNavigation } from "react-router-dom";

const reducerFunc = (state, action) => {
  switch (action.type) {
    case "Change_Field":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "Sumbit":
      return state;
    default:
      return state;
  }
};

const initialValue = {
  username: "",
  email: "",
  password: "",
  bio: "",
  photo_url: "",
  cv_url: "",
  skills: "",
  projects: "",
  github_url: "",
  linkedIn_url: "",
};

const authUrl  = 'http://localhost:3030/auth/sign-up'

export const useForm = () => {
  const navigate = useNavigate()  
  const [state, dispatch] = useReducer(reducerFunc, initialValue);
 

  const handleChange = (e) => {
    dispatch({
      type: "Change_Field",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();
    state.role = 'developer'

    if(!state){
        throw Error('Not given properly data!');
    }


    try{
        const res = await axios.post(authUrl,state);
        navigate('/')
    }catch(err){
        navigate('/')
    }
    
   
    
    

  };

  return {
    state,
    handleChange,
    submit,
  };
};
