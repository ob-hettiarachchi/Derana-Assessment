import React, {useState} from "react";
import Helmet from "react-helmet";
import Box from "@mui/material/Box";
import {Button, CircularProgress, FormGroup, LinearProgress} from "@mui/material";
import TextField from "@mui/material/TextField";
import AuthActions from "../actions/AuthActions";
import {Redirect} from "react-router-dom";

import userData from "../utils/userData";

const user = userData();

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    if (errors.server) {
        console.log(errors.server);
    }

    const onChange = e => {
        if (e.target.id === "email") {
            setEmail(e.target.value)
        }
        if (e.target.id === "password") {
            setPassword(e.target.value)
        }
    };

    const onSubmit = e => {
        setLoading(true);
        e.preventDefault();
        AuthActions.LoginUser(email, password).then(res => {
            localStorage.setItem("jwt", JSON.stringify(res.data));
            document.location.href = '/news/1';
            setLoading(false);
        }).catch(e => {
            setErrors(e.response.data);
            setLoading(false);
        })
    };

    return (
        <div>
            {user.role === "admin" ?
                <Redirect to="/news/1"/> : ""
            }

            {loading === true ? <LinearProgress/> : ""}
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
                                className={"text-box"}
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
                                className={"text-box"}
                                helperText={errors.password}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Button
                                type="submit"
                                className={"text-box"}
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
    );
}
