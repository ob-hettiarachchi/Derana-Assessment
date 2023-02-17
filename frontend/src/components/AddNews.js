import React, {useState} from "react";
import Helmet from "react-helmet";
import {Redirect} from "react-router-dom";
import Box from "@mui/material/Box";
import {Button, CircularProgress, FormGroup, LinearProgress} from "@mui/material";
import TextField from "@mui/material/TextField";

import userData from "../utils/userData";
import AdminActions from "../actions/AdminActions";

const user = userData();

export default function AddNews() {

    const [title, setTitle] = useState("");
    const [news, setNews] = useState("");

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    if (errors.server) {
        console.log(errors.server);
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
        AdminActions.CreateNews(title, news).then(() => {
            setLoading(false);
            document.location.href = '/news/1';
        }).catch(e => {
            console.log(e);
            setErrors(e.response.data);
            setLoading(false);
        })
    };

    return (
        <div>
            {user.role === "admin" ? "" : <Redirect to="/news/1"/>}

            {loading === true ? <LinearProgress/> : ""}
            <Helmet>
                <title>Create news</title>
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
                            <h5>Add News</h5>
                        </FormGroup>
                        <FormGroup>
                            <TextField
                                onChange={onChange}
                                id="title"
                                label="Title"
                                variant="filled"
                                style={{margin: "10px 0", width: "410px"}}
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
                                error={!!errors.news}
                                helperText={errors.news}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Button
                                type="submit" style={{margin: "10px 0", width: "410px"}}
                                variant="contained">
                                {loading === true ?
                                    <CircularProgress size="1rem" color={"inherit"} style={{
                                        marginBottom: "-2px",
                                    }}/>
                                    : "Create"}
                            </Button>
                        </FormGroup>
                    </Box>
                </div>
            </div>
        </div>
    );
}