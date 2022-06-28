import React from 'react'
import "../styles/StarProduct.css"

const StarProduct = ({products}) => {
  return (<div className='starProduct'>
    <div className='leftProduct'>
        <a href={products[0].url}><img src={products[0].image} alt="Imp Product"/></a>
    </div>
    <div className='rightProduct'>
        <div className='topRow'>
             <a href={products[1].url}><img src={products[1].image} alt="Imp Product"/></a>
             <a href={products[2].url} id="r"><img src={products[2].image} alt="Imp Product"/></a>
        </div>
        <div className='bottomRow'>
            <a href={products[3].url}><img src={products[3].image} alt="Imp Product"/></a>
        </div>
     </div>
  </div>
    
  )
}

export default StarProduct