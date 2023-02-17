//import libraries
import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";

//import components
import Footer from "./components/footer";
import Navbar from "./components/layouts/Navbar";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Home from "./components/Home";
import News from "./components/News";

class App extends Component {
    render() {
        return (
            <div>

                {/*<Navigation/>*/}
                <Navbar/>
                <Switch>
                    <Route exact path={"/"} component={Home}/>
                    <Route exact path={"/news"} component={News}/>
                    <Route exact path={"/login"} component={Login}/>

                    {/* User */}
                    {/*<Route exact path={"/create-note"} component={CreateNews}/>*/}
                    {/*<Route exact path={"/notes/:page"} component={News}/>*/}
                    {/*<Route exact path={"/note/update/:id"} component={UpdateNews}/>*/}
                    {/*<Route exact path={"/update-note"} component={UpdateNews}/>*/}

                    <Route exact component={NotFound}/>
                </Switch>
                <Footer/>

            </div>
        );
    }
}

export default App;
