import React from 'react'

export const ContentWrapper = ({ className, children }) => {
    return (
        <div className={className + " contentWrapper"}>
            {children}
        </div>
    )
}
