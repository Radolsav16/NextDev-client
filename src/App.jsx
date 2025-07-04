import {lazy, Suspense } from "react";
import { Routes,Route } from "react-router";
import { delayer } from "./utils/delayer";


import Loader from "./utilities/loader/Loader";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

import "./styles.css"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { FormProvider } from "./providers/FormProvider";
import NotFound from "./components/not-found/NotFound";



const MS = 2600;


const Home = lazy(()=>import('./pages/Home'))
const SignIn = lazy(()=>import('./pages/SignIn'))
const SignUp = lazy(()=>import('./pages/SignUp'))
const About = lazy(()=>import('./pages/About'))



function App() {
 

  return (
    <>
   <Header />
     <FormProvider>

    <Suspense fallback={<Loader/>}>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/next-dev/sign-in" element={<SignIn />}/>
    
      <Route path="/next-dev/sign-up" element={<SignUp />}/>
      <Route path="/next-dev/about" element={<About />}/>


      <Route path="*" element={<NotFound />}/>


     

    </Routes>

    </Suspense>
     </FormProvider>
     

    <Footer />

    </>
  )
}

export default App
