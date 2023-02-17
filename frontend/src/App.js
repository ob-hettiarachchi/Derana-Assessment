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
import AddNews from "./components/AddNews";
import UpdateNews from "./components/UpdateNews";
import NewsStory from "./components/NewsStory";

class App extends Component {
    render() {
        return (
            <div>

                {/*<Navigation/>*/}
                <Navbar/>
                <Switch>
                    <Route exact path={"/"} component={Home}/>
                    <Route exact path={"/login"} component={Login}/>
                    <Route exact path={"/add-news"} component={AddNews}/>
                    <Route exact path={"/news/:page"} component={News}/>
                    <Route exact path={"/news/story/:id"} component={NewsStory}/>
                    <Route exact path={"/news/update/:id"} component={UpdateNews}/>

                    <Route exact component={NotFound}/>
                </Switch>
                <Footer/>

            </div>
        );
    }
}

export default App;
