//import libraries
import React from "react";

//import style
import "./footer.css";

export default function Footer() {
    return (

        <div id="footer">
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h6>About</h6>
                            <p className="text-justify">In the highly competitive news broadcasting space, Derana has
                                built probably the most unbiased and comprehensive news property on offer "Ada Derana" -
                                with a news team of 100 people geared to deliver the most accurate and timely information.
                                Ada Derana To be the number one News brand among Sri Lankans in terms of loyalty by
                                reaching them through every possible opportunity in late 2007, Ada Derana entered into a
                                partnership with Dialog Telekom, the largest mobile phone operator in Sri Lanka, to send
                                breaking news alerts to all Dialog mobile subscribers as Short Text Messages (SMS). Currently,
                                instant news alerts can be obtained through all the leading operators.</p>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Categories</h6>
                            <ul className="footer-links">
                                <li><a href="#link">C</a></li>
                                <li><a href="#link">UI Design</a></li>
                                <li><a href="#link">PHP</a></li>
                                <li><a href="#link">Java</a></li>
                                <li><a href="#link">Android</a></li>
                                <li><a href="#link">Templates</a></li>
                            </ul>
                        </div>

                        <div className="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                                <li><a href="/about">About Us</a></li>
                                <li><a href="#link">Contact Us</a></li>
                                <li><a href="#link">Contribute</a></li>
                                <li><a href="#link">Privacy Policy</a></li>
                                <li><a href="#link">Sitemap</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by
                                <a href="https://www.adaderana.lk/"> AdaDerana</a>.
                            </p>
                        </div>

                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <ul className="social-icons">
                                <li><a className="facebook" href="https://www.facebook.com/adaderana"><i className="fa-brands fa-facebook-f"></i></a></li>
                                <li><a className="twitter" href="https://twitter.com/adaderanasin"><i className="fa-brands fa-twitter"></i></a></li>
                                <li><a className="youtube" href="https://www.youtube.com/channel/UCCK3OZi788Ok44K97WAhLKQ"><i className="fa-brands fa-youtube"></i></a></li>
                                <li><a className="instagram" href="https://www.instagram.com/adaderana_english/"><i className="fa-brands fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}