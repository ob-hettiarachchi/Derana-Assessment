//import libraries
import React from "react";
import {BrowserRouter as Router} from "react-router-dom";

//import components
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import Navbar from "./components/layouts/navbar";

function App() {
  return (
      <Router>
          <div>

              {/*<Navigation/>*/}
              <Navbar/>
              <Footer/>

          </div>
      </Router>
  );
}
export default App;
