import React from 'react'
import '../styles/resume.scss'
import { resumeData } from "../static/data/resumeData.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Resume = () => {
    return (
        <>
            <div className="education">
                <h3>EDUCATION</h3>
                <ul>
                    {
                        resumeData.filter(item => item.type === "edu")
                            .map((item) => <li key={item.id}>
                                <div className="left">
                                    <FontAwesomeIcon icon="user-graduate" />
                                </div>
                                <div className="right">
                                    <h4>{item.univ}</h4>
                                    <h5>{item.deg_field}</h5>
                                    {item.extra && <p>{item.extra}</p>}</div>

                            </li>

                            )
                    }
                </ul>
            </div>
        </>
    )
}

export default Resume
