import React from 'react'
import { IoFastFoodOutline } from "react-icons/io5";
import Image from "../image/fav1.jpg"
import Image1 from "../image/fav2.jpg"
import Image3 from "../image/fav3.jpg"
import Image4 from "../image/fav4.jpg"
import Image5 from "../image/fav5.jpg"
import Image6 from "../image/fav6.jpg"
import Image7 from "../image/fav7.jpg"
import Imag8 from "../image/fav8.jpg"
import Image9 from "../image/fav9.jpg"
import { useNavigate } from 'react-router-dom'



const Page8 = () => {
  const navigate=useNavigate();

  return (

    
    <>
      <div className='container8'>
        <div className='main-div'>
        <span className='spann-span'> Are You Hungry?   </span><br></br>
        <span className='spannes-span'> Don't wait!!! <br></br>
        Let Start to order food now!</span><br></br><br></br>
        <button onClick={()=>navigate ("/ffood")}  className='menu-button'>CHECKOUT MENU</button>
</div>
<div className='main-u'><IoFastFoodOutline/>FAZ FOOD</div>
      </div>
      <div className='favorite-spanes'>
        <span className='favorite-span'>FAVORITE FOOD</span><br></br>
        <div className='fav-foodcon'>
          <div><img  className= "img-fav" src={Image} alt="" /><span className='text-spanes'>300$ each</span><br></br>
          <button className='fav-button'>ADD TO CART</button></div>
          <div><img className= "img-fav" src={Image1} alt="" /><span className='text-spanes'>100$ each</span><br></br>
          <button className='fav-button'>ADD TO CART</button></div>
          <div><img  className= "img-fav"src={Image3} alt="" /><span className='text-spanes'>200$ each</span><br></br>
          <button className='fav-button'>ADD TO CART</button></div>
        </div><div></div><br></br>
        <div className='fav-foodcon2'>
          <div><img className= "img-fav" src={Image4} alt="" /><span className='text-spanes'>100$ each</span><br></br>
          <button className='fav-button' >ADD TO CART</button></div>
          <div><img className= "img-fav" src={Image5} alt="" /><span className='text-spanes'>200$ each</span><br></br>
          <button className='fav-button'>ADD TO CART</button></div>
          <div><img  className= "img-fav"src={Image6} alt="" /><span className='text-spanes'>250$ each</span><br></br>
          <button className='fav-button'>ADD TO CART</button></div>
        </div><br></br>
        <div className='fav-foodcon3'>
          <div><img className= "img-fav"  src={Image7} alt="" /><span className='text-spanes'>200$ each</span><br></br>
          <button className='fav-button'>ADD TO CART</button></div>
          <div><img className= "img-fav" src={Imag8} alt="" /><span className='text-spanes'>200$ each</span><br></br>
          <button className='fav-button'>ADD TO CART</button></div>
          <div><img className= "img-fav" src={Image9} alt="" /><span className='text-spanes'>200$ each</span><br></br>
          <button className='fav-button'>ADD TO CART</button></div>
        </div>
      </div>
    </>
  )
}

export default Page8
