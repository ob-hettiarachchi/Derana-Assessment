import React, {useEffect, useState} from "react";
import Helmet from "react-helmet";
import Box from "@mui/material/Box";
import {Button, CircularProgress, FormGroup, LinearProgress} from "@mui/material";

import AdminActions from "../actions/AdminActions";


const pathname = window.location.pathname;
const id = pathname.split('/').pop();

export default function NewsStory() {

    const [title, setTitle] = useState("");
    const [news, setNews] = useState("");

    const [loading, setLoading] = useState(false);

    function fetchNewsData() {
        setLoading(true);
        AdminActions.GetNewsById(id).then((res) => {
            console.log(id);
            console.log(res.data);
            setTitle(res.data.title);
            setNews(res.data.news);
            setLoading(false);
        }).catch(e => {
            console.log(e);
            setLoading(false);
        })
    }

    useEffect(() => {
        fetchNewsData()
    }, [])

    return (
        <div>
            {loading === true ? <LinearProgress/> : ""}
            <Helmet>
                <title>News | Story</title>
            </Helmet>
            <div className={"form-container con-mid"} style={{marginTop: "56px"}}>
                <div className={"form-card con-mid"}>
                    <Box>
                        <h3>{title}</h3>
                        <p>{news}</p>
                    </Box>
                </div>
            </div>
        </div>
    );
}