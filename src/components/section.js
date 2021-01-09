import React from 'react'
import '../styles/section.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Section = ({ id, className, title, icon, children }) => {
    return (
        <section className={className + " "} id={id}>
            <div className="top">
                <h1 className="title">{title}</h1>
                <span className="icon">
                    <FontAwesomeIcon icon={icon} size='2x' />
                </span>
            </div>
            <div className="bottom">
                {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet est accusantium perferendis nisi debitis id quis magni corporis aliquam sint. Repellendus molestias perferendis labore officiis corrupti autem cumque laboriosam quaerat.</p> */}
                {children}
            </div>
        </section>
    )
}

export default Section
