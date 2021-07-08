export default function Footer() {
    return (
        <footer id='footer'>
            <div className='footer-top'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-6 col-md-3'>
                            <h5>Popular Courses</h5>
                            <div className='course-slide'>
                                <div className='img'>
                                    <img src='/images/blog/post-img1.jpg' />
                                </div>
                                <p>
                                    <a href='courses-list.html'>when an unknown printer took </a>
                                </p>
                                <div className='price'>$55</div>
                            </div>
                            <div className='course-slide'>
                                <div className='img'>
                                    <img src='/images/blog/post-img2.jpg' />
                                </div>
                                <p>
                                    <a href='courses-list-sideBar.html'>when an unknown printer took </a>
                                </p>
                                <div className='price'>$505</div>
                            </div>
                            <div className='course-slide'>
                                <div className='img'>
                                    <img src='/images/blog/post-img3.jpg' />
                                </div>
                                <p>
                                    <a href='courses-list.html'>when an unknown printer took </a>
                                </p>
                                <div className='price'>$178</div>
                            </div>
                        </div>
                        <div className='col-sm-6'>
                            <div className='row'>
                                <div className='col-md-offset-1 col-sm-6 col-md-5 col-xs-6'>
                                    <h5>Company</h5>
                                    <ul className='footer-link'>
                                        <li>
                                            <a href='about-us.html'>About Us</a>
                                        </li>
                                        <li>
                                            <a href='contact-us.html'>Contact</a>
                                        </li>
                                        <li>
                                            <a href='blog.html'>Blog</a>
                                        </li>
                                        <li>
                                            <a href='event.html'>Event</a>
                                        </li>
                                        <li>
                                            <a href='gallery.html'>Gallery</a>
                                        </li>
                                        <li>
                                            <a href='instructor-profile.html'>Instructor Profile</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className='col-md-offset-1 col-sm-6 col-md-5 col-xs-6'>
                                    <h5>Links</h5>
                                    <ul className='footer-link'>
                                        <li>
                                            <a href='courses-list.html'>Courses List</a>
                                        </li>
                                        <li>
                                            <a href='price-plan.html'>Pricing Table</a>
                                        </li>
                                        <li>
                                            <a href='instructors.html'>Instructors</a>
                                        </li>
                                        <li>
                                            <a href='forums.html'>Forums</a>
                                        </li>
                                        <li>
                                            <a href='faq.html'>Faq</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-6 col-md-3'>
                            <h5>Contact Us</h5>
                            <div className='contact-view'>
                                <div className='contact-slide'>
                                    <p>
                                        <i className='fa fa-location-arrow' />
                                        76 Woodland Ave. Sherman Drive <br />
                                        Fort Walton Beach,Harlingen
                                    </p>
                                </div>
                                <div className='contact-slide'>
                                    <p>
                                        <i className='fa fa-phone' />
                                        +299 97 39 82
                                    </p>
                                </div>
                                <div className='contact-slide'>
                                    <p>
                                        <i className='fa fa-fax' />
                                        (08) 8971 7450
                                    </p>
                                </div>
                                <div className='contact-slide'>
                                    <p>
                                        <i className='fa fa-envelope' />
                                        <a href='mailTo:academy@info.com'>academy@info.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-8'>
                        <div className='copy-right'>
                            <p>
                                Copyright © <span className='year'>2016</span> Academy.
                            </p>
                            <ul className='footer-link'>
                                <li>
                                    <a href='#'>Terms and Conditions</a>
                                </li>
                                <li>
                                    <a href='#'>Privacy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-sm-4 '>
                        <div className='social-media'>
                            <ul>
                                <li>
                                    <a href='#'>
                                        <i className='fa fa-facebook' />
                                    </a>
                                </li>
                                <li>
                                    <a href='#'>
                                        <i className='fa fa-twitter' />
                                    </a>
                                </li>
                                <li>
                                    <a href='#'>
                                        <i className='fa fa-skype' />
                                    </a>
                                </li>
                                <li>
                                    <a href='#'>
                                        <i className='fa fa-youtube' />
                                    </a>
                                </li>
                                <li>
                                    <a href='#'>
                                        <i className='fa fa-linkedin' />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
