import React, {useEffect, useState} from "react";
import Helmet from "react-helmet";
import {Link} from "react-router-dom";
import Pagination from 'react-responsive-pagination';

import userData from "../utils/userData";
import AdminActions from "../actions/AdminActions";
import {Button, LinearProgress} from "@mui/material";

const user = userData();
const pathname = window.location.pathname;
const page = parseInt(pathname.split('/').pop());

export default function News() {

    const [news, setNews] = useState([]);

    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(page);

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    if (errors.server) {
        console.log(errors.server);
    }

    function fetchData() {
        setLoading(true);

        if (isNaN(page) === true) {
            document.location.href = '/news/1';
        }

        AdminActions.FetchNews(page).then(res => {
            setLoading(false);
            setNews(res.data);
        }).catch(e => {
            console.log(e);
            setErrors(e.response.data);
            setLoading(false);
        })

        AdminActions.FetchNewsCount().then(res => {
            let requirePagesCount = Math.ceil(res.data / 6);
            setPageCount(requirePagesCount)
        }).catch(e => {
            setErrors(e.response.data);
            console.log(e);
        })

    }

    const deleteNews = id => {
        setLoading(true);
        AdminActions.DeleteNews(id).then(res => {
            console.log(res)
            window.location.reload();
            setLoading(false);
        }).catch(e => {
            console.log(e);
            setErrors(e.response.data);
            setLoading(false);
        })
    }

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        if (page !== currentPage) {
            document.location.href = '/news/' + currentPage;
        }
    }, [currentPage])

    return (
        <div>
            {loading === true ? <LinearProgress/> : ""}
            <Helmet>
                <title>News</title>
            </Helmet>
            <div className={"form-container con-mid"} style={{marginTop: "56px"}}>
                <h3>News</h3>
                {user.role === "admin" ?
                    <Link to={'/add-news'}>
                        + Add news
                    </Link> : ""
                }
                <br/>
                <div className={"container con-mid"}>
                    <div className={"row"}>
                        {news.map(note =>
                            <div id={note._id} key={note._id} className={"col-xs note-card"}>
                                <h5>{note.title}</h5>
                                <p>{note.news}</p>

                                {user.role === "admin" ?
                                    <>
                                        <Button
                                            onClick={() => document.location.href = '/news/update/' + note._id}>UPDATE</Button>
                                        <span> | </span>
                                        <Button onClick={() => deleteNews(note._id)}>
                                            Delete
                                        </Button>
                                    </> : ""
                                }

                            </div>
                        )}
                    </div>
                </div>
                <br/>
                <div className={"pagination"}>
                    <Pagination
                        current={currentPage}
                        total={pageCount}
                        onPageChange={setCurrentPage}
                    />
                </div>
            </div>
        </div>
    );
}