//import libraries
import React from "react";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark navbar-bg">
            <div className={"container"}>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"
                         fill="none"
                         className="css-1170n61">
                        <rect x="1" y="5" width="14" height="1.5" rx="1" fill="rgba(255, 255, 255, .9)"></rect>
                        <rect x="1" y="9" width="14" height="1.5" rx="1" fill="rgba(255, 255, 255, .9)"></rect>
                    </svg>
                </button>
                {
                    // <a href={"/"} className="navbar-brand">
                    //     Derana
                    // </a>

                    <a href={"/"}><img src="../../derana_logo.png" style={{width: "50px"}} alt="Derana Logo"
                                           id={"logo_link"}/></a>
                }

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item con-mid">
                            <a href={"/news"} className="nav-link">
                                News
                            </a>
                        </li>
                    </ul>

                    <div className="navbar-nav ml-auto">
                        {
                            <li className="nav-item nav-testnet">
                                <span className="nav-link logout-link">
                                    <a href={"/login"} className="nav-link">
                                        Login
                                    </a>
                                </span>
                            </li>
                        }
                    </div>

                </div>
            </div>
        </nav>
    )
}