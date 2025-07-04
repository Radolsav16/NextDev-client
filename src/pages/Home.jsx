import Hero from "../components/hero/Hero"
import Subscribe from "../components/subscribe/Subscribe"
import Statistics from "../components/statistics/Statistics"
import Header from "../components/header/Header"
export default function Home(){
    return(
        <>
         <Header/>
        <Hero/>
        <Subscribe />
        <Statistics />
        
        </>
    )
}