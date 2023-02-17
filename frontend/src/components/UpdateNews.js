import React, {useEffect, useState} from "react";
import Helmet from "react-helmet";
import {Redirect} from "react-router-dom";
import Box from "@mui/material/Box";
import {Button, CircularProgress, FormGroup, LinearProgress} from "@mui/material";
import TextField from "@mui/material/TextField";

import userData from "../utils/userData";
import AdminActions from "../actions/AdminActions";

const user = userData();

const pathname = window.location.pathname;
const id = pathname.split('/').pop();

export default function UpdateNews() {

    const [title, setTitle] = useState("");
    const [news, setNews] = useState("");

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    if (errors.server) {
        console.log(errors.server);
    }

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
            setErrors(e.response.data);
            setLoading(false);
        })
    }

    const onChange = e => {
        if (e.target.id === "title") {
            setTitle(e.target.value)
        }
        if (e.target.id === "news") {
            setNews(e.target.value)
        }
    };

    const onSubmit = e => {
        setLoading(true);
        e.preventDefault();
        AdminActions.UpdateNews(id, title, news).then(() => {
            setLoading(false);
            document.location.href = '/news/1';
        }).catch(e => {
            console.log(e);
            setErrors(e.response.data);
            setLoading(false);
        })
    };

    useEffect(() => {
        fetchNewsData()
    }, [])

    return (
        <div>
            {user.role === "admin" ? "" : <Redirect to="/"/>}
            {loading === true ? <LinearProgress/> : ""}
            <Helmet>
                <title>Update news</title>
            </Helmet>
            <div className={"form-container con-mid"} style={{marginTop: "56px"}}>
                <div className={"form-card con-mid"}>
                    {/*<form noValidate onSubmit={this.onSubmit}>*/}
                    <Box
                        component="form"
                        sx={{'& > :not(style)': {m: 1, width: '25ch'},}}
                        noValidate
                        autoComplete="on"
                        onSubmit={onSubmit}
                    >
                        <FormGroup>
                            <h5>Update News</h5>
                        </FormGroup>
                        <FormGroup>
                            <TextField
                                onChange={onChange}
                                id="title"
                                label="Title"
                                variant="filled"
                                style={{margin: "10px 0", width: "410px"}}
                                value={title}
                                error={!!errors.title}
                                helperText={errors.title}
                            />
                            <TextField
                                onChange={onChange}
                                id="news"
                                label="News"
                                variant="filled"
                                multiline
                                rows={4}
                                style={{margin: "10px 0", width: "410px"}}
                                value={news}
                                error={!!errors.news}
                                helperText={errors.news}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Button
                                style={{margin: "10px 0", width: "410px"}}
                                type="submit"
                                variant="contained">
                                {loading === true ?
                                    <CircularProgress size="1rem" color={"inherit"} style={{
                                        marginBottom: "-2px",
                                    }}/>
                                    : "Update"}
                            </Button>
                        </FormGroup>
                    </Box>
                </div>
            </div>
        </div>
    );
}