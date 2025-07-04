import {lazy, Suspense } from "react";
import { Routes,Route } from "react-router";
import { delayer } from "./utils/delayer";


import Loader from "./utilities/loader/Loader";
import Footer from "./components/footer/Footer";

import "./styles.css"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const MS = 2600;


const Home = lazy(()=>
  delayer(()=>import('./pages/Home'),MS)
)
const SignIn = lazy(()=>
delayer(()=>import('./pages/SignIn'),MS)
)

function App() {
 

  return (
    <>
   
    <Suspense fallback={<Loader/>}>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/next-dev/sign-in" element={<SignIn />}/>

    </Routes>
    </Suspense>
     

    <Footer />

    </>
  )
}

export default App
