import React from 'react'
import { IoFastFoodOutline } from "react-icons/io5";
import Image from "../image/four5.jpg"
import Image1 from "../image/four1.jpg"
import Image2 from "../image/dessert2.jpg"
import { useNavigate } from 'react-router-dom'









const Page9 = () => {
  const navigate=useNavigate();

  return (
    <>
  <div className='cont9'><span className='span1-cont9'><IoFastFoodOutline/>FAZ FOOD</span>
  <span className='span2-cont9'>if you want to order please <a href='/login'>login</a> </span>
    <div className='cont-yellow'>
      <div><span className='hot-pizza'>FAST FOOD</span><br></br>
      <span>sed ut perspiciciatis unde omnis iste natus<br></br>
      sit voluptatem accusantium doloremque<br></br>
      laudantium, totam rem aperiam,eaque</span><br></br>
   <br></br>   <button onClick={()=>navigate("/fast")} className='read-more'>read more</button></div>
      <div><img className='img-fastfood' src={Image} alt="" /></div>
    </div>
    <div className='cont-blue'>
      <div><img className='img-hotpizza' src={Image1} alt="" /></div>
      <div><span className='hot-pizza'>HOT PIZZA</span><br></br>
      <span>sed ut perspiciciatis unde omnis iste natus<br></br>
      sit voluptatem accusantium doloremque<br></br>
      laudantium, totam rem aperiam,eaque</span><br></br>
    <br></br>  <button className='read-more'>read more</button></div>
    </div>
    <div className='cont-orange'>
      <div><span className='hot-pizza'>CONFECTION</span><br></br>
      <span>sed ut perspiciciatis unde omnis iste natus<br></br>
      sit voluptatem accusantium doloremque<br></br>
      laudantium, totam rem aperiam,eaque</span><br></br>
  <br></br>    <button className='read-more'>read more</button></div>
      <div> <img  className="img-confection" src={Image2} alt="" /></div>
    </div>
  </div>
      
    </>
  )
}

export default Page9
