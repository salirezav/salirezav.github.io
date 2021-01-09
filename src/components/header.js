import React from 'react'
import '../styles/header.scss';
export const MyHeader = () => {
    return (
        <header>
            {/* <a href="About">
                <strong>Seyed Alireza Vaezi</strong>
            </a> */}
            <nav>
                <ul>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Resume">Resume</a></li>
                    <li><a href="#Research">Research</a></li>
                    <li><a href="#Skills">Skills</a></li>
                    <li><a href="#Teaching">Teaching</a></li>
                    <li><a href="#Blog">Blog</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}
