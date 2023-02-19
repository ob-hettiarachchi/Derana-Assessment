import React from "react";
import Helmet from "react-helmet";

export default function Home() {
    return (
        <div>
            <Helmet>
                <title>Ada Derana | Home</title>
            </Helmet>
            <div className={"form-container con-mid slideshow-custom"}>



                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active"/>
                        <li data-target="#carouselExampleIndicators" data-slide-to={1}/>
                        <li data-target="#carouselExampleIndicators" data-slide-to={2}/>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block" style={{width: "100vw"}}
                                 src="https://cdn.pixabay.com/photo/2016/09/01/19/53/pocket-watch-1637396_960_720.jpg"
                                 alt="First slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Text1</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block" style={{width: "100vw"}}
                                 src="https://cdn.pixabay.com/photo/2017/04/11/15/55/animals-2222007_960_720.jpg"
                                 alt="Second slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Text2</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block" style={{width: "100vw"}}
                                 src="https://cdn.pixabay.com/photo/2015/12/06/09/15/maple-1079235_960_720.jpg"
                                 alt="Third slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Text3</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                       data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"/>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                       data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"/>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

                <br/>
                <br/>

                <div className="container">
                    <div className="row">
                        <div className="col-sm" style={{backgroundColor: "whitesmoke", margin: "10px"}}>
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
                        <div className="col-sm" style={{backgroundColor: "whitesmoke", margin: "10px"}}>
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
                        <div className="col-sm" style={{backgroundColor: "whitesmoke", margin: "10px"}}>
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

                <br/>
                <br/>

            </div>
        </div>
    );
}