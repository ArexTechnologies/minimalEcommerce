import Carasol from "./components/Carasol";
import {  Fragment } from "react";
import { HelmetProvider } from "react-helmet-async";

function App() {
  

  return (
    <HelmetProvider>
    <Fragment>
    
        
      <Carasol /> 
    </Fragment>
        </HelmetProvider>
  );
}

export default App;
