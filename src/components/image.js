import React from 'react'

export const Image = ({ src, className, alt, width, height }) => {
    return (
        <img className={className} alt={alt} src={src} width={width} height={height} />
    )
}
