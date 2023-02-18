import React from "react";
import Helmet from "react-helmet";

export default function Home() {
    return (
        <div>
            <Helmet>
                <title>Ada Derana | Home</title>
            </Helmet>
            <div className={"form-container con-mid"} style={{marginTop: "56px"}}>

                <div className={"carousel slide"} data-ride="carousel">
                    <div className={"carousel-inner"}>
                        <div className={"carousel-item active"}>
                            <img className={"d-block w-100"} src="https://cdn.pixabay.com/photo/2016/09/01/19/53/pocket-watch-1637396_960_720.jpg" alt="First slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>text</h5>
                                <p>text</p>
                            </div>
                        </div>
                        <div className={"carousel-item"}>
                            <img className={"d-block w-100"} src="https://cdn.pixabay.com/photo/2017/04/11/15/55/animals-2222007_960_720.jpg" alt="Second slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>text</h5>
                                <p>text</p>
                            </div>
                        </div>
                        <div className={"carousel-item"}>
                            <img className={"d-block w-100"} src="https://cdn.pixabay.com/photo/2015/12/06/09/15/maple-1079235_960_720.jpg" alt="Third slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>text</h5>
                                <p>text</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="/" role="button"
                       data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="/" role="button"
                       data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

                <br/>
                <br/>
                <br/>
                <br/>

                <div className="container">
                    <div className="row">
                        <div className="col-sm" style={{backgroundColor:"whitesmoke", margin:"10px"}}>
                            <br/>
                            <br/>
                            <a href={"https://www.youtube.com/channel/UCCK3OZi788Ok44K97WAhLKQ"}>
                                <img src={"../derana_logo.png"} alt={"img"}/>
                            </a>
                            <br/>
                            <a href={"https://www.youtube.com/channel/UCCK3OZi788Ok44K97WAhLKQ"}> YouTube </a>
                            <br/>
                            <br/>
                        </div>
                        <div className="col-sm" style={{backgroundColor:"whitesmoke", margin:"10px"}}>
                            <br/>
                            <br/>
                            <a href={"https://www.adaderana.lk/"}>
                                <img src={"../derana_logo.png"} alt={"img"}/>
                            </a>
                            <br/>
                            <a href={"https://www.adaderana.lk/"}> Visit Web Site </a>
                            <br/>
                            <br/>
                        </div>
                        <div className="col-sm" style={{backgroundColor:"whitesmoke", margin:"10px"}}>
                            <br/>
                            <br/>
                            <a href={"/news/1"}>
                                <img src={"../derana_logo.png"} alt={"img"}/>
                            </a>
                            <br/>
                            <a href={"/news/1"}> Read News Paper </a>
                            <br/>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}