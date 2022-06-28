import React from 'react'
import '../styles/HotItemCard.css'

const HotItemCard = ({name,price,image}) => {
    return (
        <div className='HotItemCard'>
            <img src={image} alt={name}/>
            <p className="name">{name}</p>
            <p className="price">{price}</p>
        </div>
    )
}

export default HotItemCard