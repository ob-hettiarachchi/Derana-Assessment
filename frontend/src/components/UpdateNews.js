import React, {useCallback, useEffect, useState} from "react";
import Helmet from "react-helmet";
import {Redirect} from "react-router-dom";
import Box from "@mui/material/Box";
import {Button, CircularProgress, FormGroup, LinearProgress} from "@mui/material";
import TextField from "@mui/material/TextField";

import userData from "../utils/userData";
import AdminActions from "../actions/AdminActions";
import axios from "axios";
import {useDropzone} from "react-dropzone";

import Keys from "../config/Keys";

const API_URL = Keys.API_URL;

const user = userData();

const pathname = window.location.pathname;
const id = pathname.split('/').pop();

export default function UpdateNews() {

    const [title, setTitle] = useState("");
    const [news, setNews] = useState("");
    const [image, setImage] = useState("");

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const onDrop = useCallback((acceptedFiles) => {

        // create a new FormData object
        const formData = new FormData();

        // append each selected file to the FormData object
        acceptedFiles.forEach((file) => {
            formData.append('image', file);
        });

        const jwt = JSON.parse(localStorage.getItem('jwt'));

        // make a POST request to the server to upload the files
        axios
            .post(`${API_URL}admin/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'x-access-token': jwt
                },
                onUploadProgress: (progressEvent) => {
                    // calculate and log the upload progress
                    const percentCompleted = Math.round(
                        (progressEvent.loaded * 100) / progressEvent.total
                    );
                    console.log(percentCompleted);
                }
            })
            .then((response) => {
                console.log(response.data.image);
                setImage(response.data.image);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const {getRootProps, getInputProps} = useDropzone({onDrop});

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
            setImage(res.data.image);
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
        AdminActions.UpdateNews(id, title, news, image).then(() => {
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
            {user.role === "admin" ? "" : <Redirect to="/news/1"/>}
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
                                className={"text-box"}
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
                                className={"text-box"}
                                value={news}
                                error={!!errors.news}
                                helperText={errors.news}
                            />
                        </FormGroup>
                        <FormGroup>
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <h3>Update Image</h3>
                                <p style={{cursor: "pointer"}}>Click to select files</p>

                            </div>
                        </FormGroup>
                        <FormGroup>
                            {loading !== true && image ?
                                <div>
                                    <h3>Current Image</h3>
                                    <img alt={"News Image"} src={`${API_URL}uploads/${image}`}
                                         style={{maxWidth: "100%"}}/>
                                </div>
                                : ""
                            }
                        </FormGroup>
                        <FormGroup>
                            <Button
                                className={"text-box"}
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