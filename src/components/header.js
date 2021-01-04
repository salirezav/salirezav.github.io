import React from 'react'
import '../styles/header.scss';
export const MyHeader = () => {
    return (
        <header>
            <a href="#">
                <stron>Seyed Alireza Vaezi</stron>
            </a>
            <nav>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Resume</a></li>
                    <li><a href="#">Research</a></li>
                    <li><a href="#">Publications</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Teaching</a></li>
                </ul>
            </nav>
        </header>
    )
}
