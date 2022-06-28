import React from 'react'
import '../styles/HotAccessories.css'
import HotItemCard from './HotItemCard'
const BrowseMore = ({ len }) => {
    if (len < 6) {
        return <HotItemCard name="" price="" image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" />;
    }
}

const HotAccessories = ({ cover, catagory }) => {
    return (
        <div className='HotAccessories'>
            <div className='cover'>
                <img src={cover} alt={`${catagory} cover`} />
            </div>
            <div className='cardBox'>
                {
                    catagory.map((item, index) => (
                        <HotItemCard name={item.name} price={item.price} image={item.image} key={item.image} />
                    ))
                }
                <BrowseMore len={catagory.length} />
            </div>
        </div>
    )
}

export default HotAccessories