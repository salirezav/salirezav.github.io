import React from 'react'

export const Wrapper = ({ className, children }) => {
    return (
        <div className={className + " wrapper"}>
            {children}
        </div>
    )
}
