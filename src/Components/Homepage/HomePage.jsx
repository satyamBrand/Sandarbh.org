import React from 'react';
import './HomePage.css'; // Assuming you have the CSS file imported correctly
import one from './images/2.jpg';
import two from './images/3.jpg';
import three from './images/4.jpg';
import four from './images/5.jpg';
import five from './images/6.jpg';
import six from './images/7.jpg';
import seven from './images/8.jpg';
import eight from './images/9.jpg';
import nine from './images/10.jpg';

import { Routes, Route, Link } from 'react-router-dom';


function SandarbhOrg() {
    return (
        <div>
            {/* header */}
            <header className="header">
                <nav className="navbar">
                    <div className="container container-1">
                        <a href="index.html" className="navbar-brand"><span>Sandarbh</span>.Org</a>
                        <div className="navbar-nav">
                            <Link to="/AllcategoryHomePage">All Category</Link>
                            <a href="#LatestSloka">Latest</a>
                            <a href="#Recent update">Trending</a>
                            

                            <Link to="/UserSignUp">Login</Link>
                        </div>
                    </div>
                </nav>
                <div className="banner">
                    <div className="container">
                        <h1 className="banner-title">
                            <span>Sandarbh</span> .Org
                        </h1>
                        <p>Everything that you want to know about History & Culture</p>
                        <form>
                            <input type="text" class="search-input" placeholder="Find..." />
                            <button type="submit" class="search-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                            </button>
                        </form>
                    </div>
                </div>
            </header>
            {/* end of header */}
            {/* design */}
            <section className="design" id="design">
                <div className="container">
                    <div className="title">
                        <h2 id="Recent update">Recent Update's</h2>
                        <p></p>
                    </div>
                    <div className="design-content">
                        <div className="design-item">
                            <div className="design-img">
                                <img src={one} alt="" />
                                <span class="heart-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg> 100k</span>

                                <span>Read...</span>
                            </div>
                            <div className="design-title">
                                <a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error labore id non
                                    provident maiores delectus unde. Explicabo beatae repellendus quo ipsum distinctio harum
                                    fugiat corrupti necessitatibus, laudantium impedit odio!</a>
                            </div>
                        </div>
                        <div className="design-item">
                            <div className="design-img">
                                <img src={two} alt="" />
                                <span class="heart-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg> 100k</span>
                                <span>Read...</span>
                            </div>
                            <div className="design-title">
                                <a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error labore id non
                                    provident maiores delectus unde. Explicabo beatae repellendus quo ipsum distinctio harum
                                    fugiat corrupti necessitatibus, laudantium impedit odio!</a>
                            </div>
                        </div>
                        <div className="design-item">
                            <div className="design-img">
                                <img src={three} alt="" />
                                <span class="heart-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg> 100k</span>
                                <span>Read...</span>

                            </div>
                            <div className="design-title">
                                <a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error labore id non
                                    provident maiores delectus unde. Explicabo beatae repellendus quo ipsum distinctio harum
                                    fugiat corrupti necessitatibus, laudantium impedit odio!</a>
                            </div>
                        </div>
                        <div className="design-item">
                            <div className="design-img">
                                <img src={four} alt="" />
                                <span class="heart-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg> 100k</span>
                                <span>Read...</span>
                            </div>
                            <div className="design-title">
                                <a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error labore id non
                                    provident maiores delectus unde. Explicabo beatae repellendus quo ipsum distinctio harum
                                    fugiat corrupti necessitatibus, laudantium impedit odio!</a>
                            </div>
                        </div>
                        <div className="design-item">
                            <div className="design-img">
                                <img src={five} alt="" />
                                <span class="heart-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg> 100k</span>
                                <span>Read...</span>
                            </div>
                            <div className="design-title">
                                <a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error labore id non
                                    provident maiores delectus unde. Explicabo beatae repellendus quo ipsum distinctio harum
                                    fugiat corrupti necessitatibus, laudantium impedit odio!</a>
                            </div>
                        </div>
                        <div className="design-item">
                            <div className="design-img">
                                <img src={six} alt="" />
                                <span class="heart-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg> 100k</span>
                                <span>Read...</span>
                            </div>
                            <div className="design-title">
                                <a href="#">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa error labore id non
                                    provident maiores delectus unde. Explicabo beatae repellendus quo ipsum distinctio harum
                                    fugiat corrupti necessitatibus, laudantium impedit odio!</a>
                            </div>
                        </div>
                        {/* Your design items here */}
                    </div>
                </div>
            </section>
            {/* end of design */}
            {/* blog */}
            <section className="blog" id="blog">
                <div className="container">
                    <div className="title">
                        <h2 id="LatestSloka">Latest Sloka's</h2>
                        <p></p>
                    </div>
                    <div className="blog-content">
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src={eight} alt="" />
                            </div>
                            <div className="blog-text">
                                <span>20 January, 2020</span>
                                <h2>Lorem ipsum, dolor sit amet consectetur adipisicing</h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis libero quas ipsum laudantium
                                    nihil! Quaerat.</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src={nine} alt="" />
                            </div>
                            <div className="blog-text">
                                <span>20 January, 2020</span>
                                <h2>Lorem ipsum, dolor sit amet consectetur adipisicing</h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis libero quas ipsum laudantium
                                    nihil! Quaerat.</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src={seven} alt="" />
                            </div>
                            <div className="blog-text">
                                <span>20 January, 2020</span>
                                <h2>Lorem ipsum, dolor sit amet consectetur adipisicing</h2>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis libero quas ipsum laudantium
                                    nihil! Quaerat.</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>

                        {/* Add more blog items here */}
                    </div>
                </div>
            </section>
            {/* end of blog */}
            <footer>
                <div className="social-links">
                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg></a>
                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></a>
                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg></a>
                </div>
                <span>Sandarbh.Org</span>
            </footer>
        </div>
    );
}

export default SandarbhOrg;
