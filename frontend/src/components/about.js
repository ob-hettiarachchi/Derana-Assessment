import React from "react";
import Helmet from "react-helmet";

export default function About() {
    return (
        <div>
            <Helmet>
                <title>Ada Derana | About us</title>
            </Helmet>
            <div className={"form-container con-mid"} style={{marginTop: "56px"}}>
                <h1>About us</h1>
            </div>
        </div>
    );
}