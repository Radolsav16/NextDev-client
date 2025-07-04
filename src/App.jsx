import Hero from "./components/hero/Hero"
import Statistics from "./components/statistics/Statistics"
import Footer from "./components/footer/Footer";

import Subscribe from "./components/subscribe/Subscribe"
import "./styles.css"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
 

  return (
    <>
      <Hero />
      <Subscribe />
      <Statistics />
      <Footer />
    </>
  )
}

export default App
