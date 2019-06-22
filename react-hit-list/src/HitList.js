import React from 'react'
import './HitList.css'

const HitList = (props) => {
    const myHitList = props.info.map(hitlist => {
        return (
            <div className='eachImageWrap' key={hitlist._id}>
                <img className='images' alt="images" src={hitlist.image} />
                <h1>{hitlist.title}</h1>
            </div>
        )
    })
    return (
        <div className='wrap'>
            {myHitList}
        </div>
    )
}

export default HitList