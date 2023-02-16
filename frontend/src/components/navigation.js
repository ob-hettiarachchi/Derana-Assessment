//import libraries
import React from "react";

//import styles
import "./navigation.css"

function Navigation() {
    return (

        <div id={"nav"}>

            <a href={"/home"}><img src="../derana_logo.png" alt="Derana Logo" id={"logo_link"}/></a>

            <ul id={"ulnav"}>
                    <li id={"linav"}><a href="/home">Home</a></li>
                    <li id={"linav"}><a href="/home">text1</a></li>
                    <li id={"linav"}><a href="/home">text2</a></li>
                    <li id={"linav"}><a href="/home">text3</a></li>
            </ul>
        </div>

    )
}

export default Navigation;