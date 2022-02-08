import React from 'react';
import Typical from 'react-typical';

export default function Profile() {
    return <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <a href='https://www.instagram.com/agustinfranchetti'>
                        <i className='fa fa-instagram'></i>
                    </a>
                    <a href='https://www.twitter.com/agusfrancho'>
                        <i className='fa fa-twitter-square'></i>
                    </a>
                    <a href='https://www.linkedin.com/in/agust%C3%ADn-franchetti-a98a6a105/'>
                        <i className='fa fa-linkedin-square'></i>
                    </a>
                    <a href='https://www.github.com/agustinfranchetti'>
                        <i className='fa fa-github-square'></i>
                    </a>
                </div>
                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {" "}
                        Hi, I'm <span className='highlighted-text'>Agustín</span> 👋🏻
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        <h1>
                            {" "}
                            <Typical
                                loop={Infinity}
                                steps={[
                                    "Fullstack Developer",
                                    1000,
                                    "Python Dev 🐍",
                                    1000,
                                    "React Dev ⚛",
                                    1000,
                                    "Space Enthusiast 🛰",
                                    1000,
                                    "Pokemon Fan",
                                    1000,
                                ]}
                            />
                        </h1>
                        <span className='profile-role-tagline'>
                            Fullstack developer. Mainly focused on python for backend, and react for frontend. I'm also on
                            my 4th year of systems enfineering.
                        </span>
                    </span>
                </div>
                <div className='profile-options'>
                    <button className='btn-hire-me'>
                        {" "}
                        Hire Me!{" "}</button>
                    <div>
                        {" "}
                    </div>
                    <a href='cv-franchetti-agustin.pdf' download='Franchetti-Agustin-resume.pdf'>
                        <button className='btn-highlighted-btn'>
                            {" "}
                            Download Resume{" "}</button>
                    </a>
                </div>

            </div>
        </div>
    </div>;
}
