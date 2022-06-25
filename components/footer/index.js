import React from 'react'

const Footer = () => {
    return (
        <div>
            <section class="w3l-footer-29-main">
                <div class="footer-29 py-5">
                    <div class="container py-lg-4">
                        <div class="row footer-top-29">
                            <div class="col-lg-4 col-md-6 col-sm-8 footer-list-29 footer-1">
                                <h6 class="footer-title-29">Contact Us</h6>
                                <ul>
                                    <li>
                                        <p><span class="fa fa-map-marker"></span> Radiant Resort Bangalore , CK Palya Road, 17th km, Bannerghatta Road, Bangalore - 560083</p>
                                    </li>
                                    <li><a href="tel:+91 80959 88877"><span class="fa fa-phone"></span> +91 80959 88877 | Front Desk & Reception</a><br/>
                                    <a href="tel:+91 808888 7777">+91 808888 7777 | Corporate Sales & Enquiry</a><br/>
                                    <a href="tel:+91 80 5002 7359">+91 80 5002 7359 | Ayurvedic Spa and Facilities</a>
                                    </li>
                                    <li><a href="mailto:info@radiantresort.com" class="mail"><span class="fa fa-envelope-open-o"></span>
                                    info@radiantresort.com</a></li>
                                </ul>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-4 footer-list-29 footer-2 mt-sm-0 mt-5">

                                <ul>
                                    <h6 class="footer-title-29">Useful Links</h6>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/rooms">Rooms</a></li>
                                    <li><a href="/packages"> Packages</a></li>
                                    <li><a href="/contact-us">Contact us</a></li>
                                </ul>
                            </div>
                            {/* <div class="col-lg-3 col-md-6 col-sm-5 footer-list-29 footer-3 mt-lg-0 mt-5">
                                <h6 class="footer-title-29">Latest from blog</h6>
                                <div class="footer-post mb-4">
                                    <a href="#url">Work Passionately</a>
                                    <p class="small"><span class="fa fa-clock-o"></span> March 9, 2020</p>
                                </div>
                                <div class="footer-post">
                                    <a href="#url">Work Passionately without any hesitation</a>
                                    <p class="small"><span class="fa fa-clock-o"></span> March 9, 2020</p>
                                </div>

                            </div> */}
                            <div class="col-lg-4 col-md-6 col-sm-7 footer-list-29 footer-4 mt-lg-0 mt-5">
                                <h6 class="footer-title-29">Newsletter </h6>
                                <p>Enter your email and receive the latest news from us.
                                    We'll never share your email address</p>

                                <form action="#" class="subscribe" method="post">
                                    <input type="email" name="email" placeholder="Your Email Address" required="" />
                                    <button><span class="fa fa-envelope-o"></span></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="w3l-footer-29-main w3l-copyright">
                <div class="container">
                    <div class="row bottom-copies">
                        <p class="col-lg-8 copy-footer-29">© 2022 Radiant Resort. All rights reserved</p>
                        <div class="col-lg-4 main-social-footer-29">
                            <a href="https://www.facebook.com/radiantresort17" class="facebook" target="_blank"><span class="fa fa-facebook"></span></a>
                            <a href="https://twitter.com/radiant_resort" class="twitter" target="_blank"><span class="fa fa-twitter"></span></a>
                            <a href="https://www.instagram.com/resortradiant/" class="instagram" target="_blank"><span class="fa fa-instagram"></span></a>
                            <a href="https://web.whatsapp.com/send?phone=+918088887777" class="whatsapp"><span class="fa fa-whatsapp" target="_blank"></span></a>
                        </div>

                    </div>
                </div>

            </section>
        </div>
    )
}

export default Footer;