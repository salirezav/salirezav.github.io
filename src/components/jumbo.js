import React from 'react'
import { Image } from './image'
import '../styles/jumbo.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Jumbo = () => {
    return (
        <>
            <div className="jumbo_left">
                <Image className="avatar" src='https://media-exp1.licdn.com/dms/image/C5603AQE-mtKXxExgow/profile-displayphoto-shrink_200_200/0/1547926612693?e=1614816000&v=beta&t=cBNKvdQ7NDBHTWDJOz_YnUZijJ199gV-L1RFBMFbUF4' alt="image" width='150px' height='150px' />
                <h4>Seyed Alireza Vaezi</h4>
                <span> <FontAwesomeIcon icon="map-marker-alt" /> Athens, GA</span>
            </div>
            <div className="jumbo_right">
                <h3>Seyed Alireza Vaezi</h3>
                <p>I am a student and a developer</p>
            </div>
        </>
    )
}
