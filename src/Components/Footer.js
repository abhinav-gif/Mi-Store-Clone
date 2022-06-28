import React from 'react'
import FooterCol from './FooterCol'


const Footer = ({footer}) => {
  return (
    <><div className='Footer'>
        
            <FooterCol category={footer.support} name={"support"}/>
            <FooterCol category={footer.shopAndLearn} name={"shop And Learn"}/>
            <FooterCol category={footer.retailStore} name={"retail Store"}/>
            <FooterCol category={footer.aboutUS} name={"about US"}/>
            <FooterCol category={footer.contactUs} name={"contact Us"}/>
            <div id='chatBox'>
                <p>Chat with our Virtual AI Bot - Now in हिन्दी/English</p>
                <button>CHAT NOW</button>
            </div>
    </div>
    <div id='copyRight'>
            <hr/>
            <p>Copyright © 2010 - 2022 Xiaomi. All Rights Reserved</p>
            </div>
    </>
  )
}

export default Footer