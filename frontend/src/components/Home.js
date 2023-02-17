import React from "react";
import Helmet from "react-helmet";

export default function Home() {
    return (
        <div>
            <Helmet>
                <title>Ada Derana | Home</title>
            </Helmet>
            <div className={"form-container con-mid"} style={{marginTop: "56px"}}>
                <h3>Home</h3>
            </div>
        </div>
    );
}