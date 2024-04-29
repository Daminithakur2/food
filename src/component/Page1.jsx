import React from 'react'
import { IoFastFoodOutline } from "react-icons/io5";
import Image from "../image/pic1.png"
import Image1 from "../image/photo4.jpg"
import Image2 from "../image/photo1.jpg"
import { useNavigate } from 'react-router-dom'


const Page1 = () => {
  const navigate=useNavigate();
  return (
    <>
      <div className='container'>
        <div className="main">
          <div className='header'>
            <div className='one'>
              <div><a href='#damu'>DEMO</a></div>
              <div><a href='#harsh'>FEATURES</a></div>
              <div><a href='/'>SUPPORT</a></div>

            </div>
            <div className='two'>
              <div><h1><IoFastFoodOutline className='icon' />FAZFOOD</h1></div>
            </div>
            <div className='three'>
              <div><button onClick={()=> navigate("/food")} className='button'>PURCHASE NOW</button></div>
            </div>
          </div>

          <div className='heading'><h1>FAZFOOD FAST FOOD RESTAURANT WORDPRESS THEME</h1></div>
        </div>
        {/* <div className='four'>
          <div style={{ marginLeft: 20, marginBottom: 20 }}><img className='img1' src={Image} alt="hhh" /></div>
          <div><p>gg</p></div>
          <div><p>gg</p></div>
        </div> */}
         <img className='img1' src={Image1} alt="hhh" />
         <img className='img2' src={Image} alt="hhh" />
         <img className='img3' src={Image2} alt="hhh" />
      </div>
    </>
  )
}

export default Page1
