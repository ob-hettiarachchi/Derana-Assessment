import React, {useEffect, useState} from "react";
import Helmet from "react-helmet";
import {Link} from "react-router-dom";

import userData from "../utils/userData";
import AdminActions from "../actions/AdminActions";
import {Button, CircularProgress} from "@mui/material";
import Keys from "../config/Keys";
import Pagination from 'react-responsive-pagination';

const API_URL = Keys.API_URL;

const user = userData();
const pathname = window.location.pathname;
const page = parseInt(pathname.split('/').pop());

export default function News() {

    const [news, setNews] = useState([]);
    const [image, setImage] = useState("");

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
            <Helmet>
                <title>News</title>
            </Helmet>
            <div className={"form-container con-mid"}>
                <h3>News</h3>
                {user.role === "admin" ?
                    <Link to={'/add-news'}>
                        + Add news
                    </Link> : ""
                }
                <br/>
                <div className={"container con-mid"}>

                    {/*https://getbootstrap.com/docs/4.0/components/card/#card-groups*/}

                    <div className={"row"}>

                        {loading === true ?
                            <div className={"con-mid"} style={{width: "100%"}}>
                                <span><CircularProgress/> Loading</span>
                            </div>
                            : ""}

                        {news.map((newsItem, index) => (
                                <div className="card col-xs note-card">
                                    <a href={`/news/story/${newsItem._id}`}>
                                        <img className="card-img-top" src={`${API_URL}uploads/${newsItem.image}`}
                                             style={{width: "100%"}}
                                             alt="Card image cap"/>
                                        <div className="card-body">
                                            <h5 className="card-title">{newsItem.title}</h5>
                                            <p className="card-text">{newsItem.news}</p>
                                            <p className="card-text"><small className="text-muted">
                                                {`${newsItem.date.split("T")[0]} - ${newsItem.date.split("T")[1].split(".")[0]}`}
                                            </small></p>
                                        </div>
                                    </a>

                                    {user.role === "admin" ?
                                        <>
                                            <Button variant="outlined" style={{marginBottom: "10px"}}
                                                onClick={() => document.location.href = '/news/update/' + newsItem._id}>UPDATE</Button>
                                            <Button variant="outlined" onClick={() => deleteNews(newsItem._id)}>
                                                Delete
                                            </Button>
                                        </> : ""
                                    }

                                </div>
                            )
                        )}


                        {/*news.map(note =>
                            <div id={note._id} key={note._id} className={"col-xs note-card"}>

                                {loading !== true && image ?
                                    <img alt={"News Image"} src={`${API_URL}uploads/${image}`}
                                         style={{maxWidth: "100%"}}/> : ""
                                }

                                <a href={`/news/story/${note._id}`}>
                                    <h5>{note.title}</h5>
                                </a>

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
                        )*/}
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