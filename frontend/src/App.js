//import libraries
import React from "react";
import {BrowserRouter as Router} from "react-router-dom";

//import components
import Navigation from "./components/navigation";
import Footer from "./components/footer";

function App() {
  return (
      <Router>
          <div>

              <Navigation/>
              <Footer/>

          </div>
      </Router>
  );
}
export default App;
