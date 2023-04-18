import React from 'react';

const Footer = () => {
    return (
        <div class="footer-wrapper">
            <footer>
                <div class="footer footer-top row">
                    <div class="col-12 col-md-9">
                        <div class="shopping-with-us footer-item col-12 col-md-3">
                            <ul class="footer-list">
                                <li class="footer-title">Shopping with Us</li>
                                <li>
                                    <a href="#" title="Delivery and Returns">Delivery and Returns</a>
                                </li>
                                <li>
                                    <a href="#" title="Wallpaper Sample Service">Wallpaper Sample Service</a>
                                </li>
                                <li>
                                    <a href="#" title="Privacy Policy">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" title="sitemap">Site Map</a>
                                </li>
                                <li>
                                    <a href="#" title="Terms &amp; Conditions">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                        <div class="wallpaper-guides footer-item col-12 col-md-3" id="">
                            <ul class="footer-list">
                                <li class="footer-title">Wallpaper Guides</li>
                                <li>
                                    <a href="#">Wallpaper FAQs</a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">Wallpaper Guide</a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">How to Hang Wallpaper</a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">How to Remove Wallpaper</a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">How to Hang a Wall Mural</a>
                                </li>
                            </ul>
                        </div>
                        <div class="visit-us footer-item col-12 col-md-3">
                            <ul class="footer-list">
                                <li class="footer-title">Visit Us</li>
                                <li>
                                    <a href="#">Outlet Stores</a>
                                </li>
                            </ul>
                        </div>
                        <div class="help footer-item col-12 col-md-3">
                            <ul class="footer-list">
                                <li class="footer-title">How Can We Help?</li>
                                <li class="">
                                    <a href="https://www.wallpaper-it.com/customer_service_wpit.html" class="font-weight-light">Customer Service</a>
                                </li>
                                <li>
                                    <a href="mailto:customerservice@wallpaper-it.com" target="_top">Email Us</a>
                                </li>
                                <li>
                                    <a href="https://www.wallpaper-it.com/about_us_wpit.html" title="About Us">About Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="newsletter footer-item col-12 col-md-3">
                        <h3 class="newsletter-title">Sign up to Our Newsletter</h3>
                        <input type="text" class="newsletter-input" placeholder="Enter email here"/>
                        <p class="newsletter-consent">By signing up you are consenting to receive the newsletter and other promotional materials from Wallpaper It.</p>
                        <button type="submit" class="newsletter-subscribe">Subscribe</button>
                    </div>
                </div>
                <div class="footer footer-bottom">
                    <div class="social">
                        <select class="country-select">
                            <option selected>UK - GBP</option>
                            <option>United Kingdom</option>
                            <option>USA</option>
                        </select>
                    </div>
                    <div class="copyright">
                        <p>© 2023 WallpaperIt</p>
                    </div>
                    <div class="credit-cards">
                        <span class="card-icon visaCard"></span>
                        <span class="card-icon americanExpress"></span>
                        <span class="card-icon maestroCard"></span>
                        <span class="card-icon masterCard"></span>
                        <span class="card-icon payPal"></span>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;