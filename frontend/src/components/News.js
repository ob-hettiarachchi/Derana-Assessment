import React from "react";
import Helmet from "react-helmet";

export default function News() {
    return (
        <div>
            <Helmet>
                <title>Ada Derana | News</title>
            </Helmet>
            <div className={"form-container con-mid"} style={{marginTop: "56px"}}>
                <h3>News</h3>
            </div>
        </div>
    );
}