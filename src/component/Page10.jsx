import React from 'react'
import { IoFastFoodOutline } from "react-icons/io5";
import Image from "../image/four1.jpg"
import Image1 from "../image/four2.jpg"
import Image2 from "../image/four3.jpg"
import Image3 from "../image/four4.jpg"
import Image4 from "../image/photo4.jpg"
import Image5 from "../image/fic.jpg"
import { useNavigate } from 'react-router-dom'



const Page10 = () => {
  const navigate = useNavigate();


  return (
    <>
      <div>
        <div>
          <div className='cont-10'><span className='cont-10'><IoFastFoodOutline />FAST FOOD MENU</span> <button onClick={() => navigate("/ffood")}>exit</button></div>
          <div className='div-fastfoods'>
            <div className='fastfood-part1'>

              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div><img className='img-fastfood' src={Image} alt="" /></div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div>
                  <span className='order-each' style={{ color: 'blue' }}>$200</span><span>each</span>

                  </div>
                  <button>ORDER NOW</button></div>  </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div><img className='img-fastfood' src={Image1} alt="" /></div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span className='order-each' >200$ each</span>
                  <button>ORDER NOW</button></div>  </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div><img className='img-fastfood' src={Image2} alt="" /></div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span className='order-each' >200$ each</span>
                  <button>ORDER NOW</button></div>  </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div><img className='img-fastfood' src={Image3} alt="" /></div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span className='order-each' >200$ each</span>
                  <button>ORDER NOW</button></div>  </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div><img className='img-fastfood' src={Image4} alt="" /></div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span className='order-each' >200$ each</span>
                  <button>ORDER NOW</button></div>  </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div><img className='img-fastfood' src={Image5} alt="" /></div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span className='order-each' >200$ each</span>
                  <button>ORDER NOW</button></div>  </div>
            </div>
            <div className='fastfood-part2'>

              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div><img className='img-fastfood' src={Image} alt="" /></div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span className='order-each' >200$ each</span>
                  <button>ORDER NOW</button></div>  </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div><img className='img-fastfood' src={Image1} alt="" /></div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span className='order-each' >200$ each</span>
                  <button>ORDER NOW</button></div>  </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div><img className='img-fastfood' src={Image2} alt="" /></div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span className='order-each' >200$ each</span>
                  <button>ORDER NOW</button></div>  </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div><img className='img-fastfood' src={Image3} alt="" /></div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span className='order-each' >200$ each</span>
                  <button>ORDER NOW</button></div>  </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div><img className='img-fastfood' src={Image4} alt="" /></div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span className='order-each' >200$ each</span>
                  <button>ORDER NOW</button></div>  </div>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div><img className='img-fastfood' src={Image5} alt="" /></div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span className='order-each' >200$ each</span>
                  <button>ORDER NOW</button></div>  </div>
            </div>
          </div>

        </div>

      </div>

    </>
  )
}

export default Page10
