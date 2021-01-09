import React from 'react'
import '../styles/about.scss';
import { aboutData } from '../static/data/aboutData.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export const About = () => {
    const doSomething = () => { }
    const data = aboutData;
    return (
        <>
            <div className="tabbed">
                <ul className="tabIcons">
                    {data.map(({ id, title, icon }) => {
                        return <li key={id} id={"icon_" + id}>
                            <span className="icon" onClick={doSomething}>
                                <FontAwesomeIcon icon={icon} size='2x' />
                            </span>

                        </li>

                    })}
                </ul>

                <ul className="tabContent">
                    {data.map(({ id, title, paragraph }) => {
                        return <li key={id} className={id > 1 && "hidden"} id={"tab_" + id}>
                            <h2>{title}</h2>
                            <p>{paragraph}</p>
                        </li>
                    })}
                </ul>

            </div>
        </>
    )
}
