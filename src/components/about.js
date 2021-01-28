import React from 'react'
import '../styles/about.scss';
import { aboutData } from '../static/data/aboutData.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export const About = () => {

    const doSomething = (e, id) => {
        var icon = document.getElementById("icon_" + id);
        var activeIcon = document.querySelector('.icon.active')

        if (icon !== activeIcon) {
            console.log(icon);
            activeIcon.classList.remove("active")
            icon.classList.add("active");
            var targetTab = document.getElementById("tab_" + id);
            var otherTab = document.querySelector(`[id^="tab_"].active`);
            otherTab.classList.remove("active")
            targetTab.classList.add("active")



        }
    }
    const data = aboutData;
    return (
        <>
            <div className="tabbed">
                <ul className="tabIcons">
                    {data.map(({ id, title, icon }) => {
                        return <li key={id}  >
                            <span id={"icon_" + id} className={`icon ${id === 1 ? " active" : ""}`} onClick={(e) => doSomething(e, id)}>
                                < FontAwesomeIcon icon={icon} size='1x' />
                            </span>

                        </li>

                    })}
                </ul>

                <ul className="tabContent">
                    {data.map(({ id, title, paragraph }) => {
                        return <li key={id} className={id === 1 ? "active" : ""} id={"tab_" + id}>
                            <h2>{title}</h2>
                            <p>{paragraph}</p>
                        </li>
                    })}
                </ul>

            </div>
        </>
    )
}
