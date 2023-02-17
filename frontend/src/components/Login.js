//import libraries
import React, {useState} from "react";
import {Redirect} from "react-router-dom";
import {Box, Button, CircularProgress, FormGroup, LinearProgress, TextField} from "@mui/material";
import Helmet from "react-helmet";

const user = {};
const loading = {};

export default function Login() {

    const onSubmit = () => {

    }

    const onChange = () => {

    }

    const [errors, setErrors] = useState({});

    return (
        <div>
            {user.role === "user" || user.role === "admin" ?
                user.role === "user" ?
                    user.status === true ?
                        <Redirect to="/notes/1"/> :
                        <Redirect to="/reset"/> :
                    <Redirect to="/users"/>
                : ""}

            {loading === true ? <LinearProgress /> : ""}
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className={"form-container con-mid"}>
                <div className={"form-card con-mid"}>
                    {/*<form noValidate onSubmit={this.onSubmit}>*/}
                    <Box
                        component="form"
                        sx={{'& > :not(style)': {m: 1, width: '25ch'},}}
                        noValidate
                        // autoComplete="off"
                        onSubmit={onSubmit}
                    >
                        <FormGroup>
                            <h5>Login</h5>
                        </FormGroup>
                        <FormGroup>
                            <TextField
                                onChange={onChange}
                                id="email"
                                label="Email"
                                variant="filled"
                                style={{margin: "10px 0", width: "410px"}}
                                error={!!errors.email}
                                helperText={errors.email}
                            />
                            <TextField
                                onChange={onChange}
                                id="password"
                                label="Password"
                                variant="filled"
                                type={"password"}
                                error={!!errors.password}
                                style={{margin: "10px 0", width: "410px"}}
                                helperText={errors.password}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Button
                                type="submit"
                                style={{margin: "10px 0", width: "410px"}}
                                variant="contained">{loading === true ?
                                <CircularProgress size="1rem" color={"inherit"} style={{
                                    marginBottom: "-2px",
                                }}/>
                                : "Login"}</Button>
                        </FormGroup>
                    </Box>
                    <div style={{marginTop: "20px", textAlign: "left"}}>
                        <h6>Admin login credentials</h6>
                        <span style={{fontSize: "12px"}}><strong>Email:</strong> admin@admin.com</span>
                        <br/>
                        <span style={{fontSize: "12px"}}><strong>Password:</strong> admin123</span>
                    </div>
                </div>
            </div>
        </div>
    )
}