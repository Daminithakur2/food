import React from 'react'
import Image from '../image/only1.png'
import Image1 from '../image/button2.png'
import Image2 from '../image/button3.png'
import Image3 from '../image/button4.png'
import Image4 from '../image/button5.png'
import Image5 from '../image/button6.png'

const Page6 = () => {
    return (
        <>
            <div className='container6'>
                <div><p className='vim2'>Bundle Integration With
                    WordPress Plugins</p><p className='vim3'>Fazfood is compatible with plenty of WordPress plugins to empower the multipurpose eCommerce WordPress theme. </p></div>
                    <div className='but'><div className='img-text' ><img  src={Image} alt="" />
                 <span>  Elementor</span> </div>
                    <div className='img-text'><img src={Image1} alt="" /><span></span>Revolution Slider</div>
                    <div className='img-text'><img src={Image2} alt="" /><span>Yoast</span></div>
                    <div className='img-text'><img src={Image3} alt="" /><span>Contact</span></div>
                    <div className='img-text'><img src={Image4} alt="" /><span>WPML</span></div>
                    <div className='img-text'><img src={Image5} alt="" /><span>One click import</span></div></div>

            </div>
        </>
    )
}

export default Page6
