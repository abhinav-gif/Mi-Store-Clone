import React from 'react'
import '../styles/Footer.css'

const FooterCol = ({ category, name }) => {
    return (
        <div className={name}>
            <p>{name}</p>
            {category.map((item) => (
                <div><a href={item.url} key={item.url}><span>{item.name}</span></a></div>
            ))}
        </div>
    )
}

export default FooterCol