import React from 'react'

const Section = ({ id, className, title, children }) => {
    return (
        <section className={className + " "} id={id}>
            <h1>{title}</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet est accusantium perferendis nisi debitis id quis magni corporis aliquam sint. Repellendus molestias perferendis labore officiis corrupti autem cumque laboriosam quaerat.</p>
            {children}
        </section>
    )
}

export default Section
