import React from 'react'
import '../styles/ProductReviews.css'

const ProductReviews = ({ products }) => {
    return (
        <div className='ProductReviews'>
            {products.map((item, index) => (
                <div className='reviewCard' key={item.image}>
                    <img src={item.image} alt={`${index} Product`} />
                    <div>
                        <h5>{item.review}</h5>
                        <div className='reviewBottom'>
                            <p>{item.name}</p>
                            <span>{item.price}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductReviews