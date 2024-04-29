import React from 'react'
import Image from "../image/part2pic.jpg"
import Image1 from "../image/part2pic2.jpg"
import Image2 from "../image/part2pic3.jpg"
import Image3 from '../image/part2pic4.jpg'
import Image4 from '../image/part2pic5.jpg'
import Image5 from '../image/part2pic6.jpg'

const Page2 = () => {
  return (
    <>
      <div className='container2'><span className='heading1'>HOME PAGES</span>
      <span className='num' id='damu'>06+</span>
      <span className='num1'>FOOD STORE DEMOS</span>
      <span className='num2'>fazfood includes 06+ attractive homepages for you to start your food storequickly. Esqecially,
        <br></br>all the demo data and pages will be importedinto your site in a single click.</span>
        <div className='demo'>
          <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:"center"}}><img className='images' src={Image} alt="" />
          <span>HOME 01</span></div>
          <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:"center"}}><img  className="images" src={Image1} alt="" />
          <span>HOME 02</span></div>
          <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:"center"}}><img className='images' src={Image2} alt="" />
          <span>HOME 02</span></div>
          

          
        </div>
        <div className='demo'>
          <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:"center"}}><img className='images' src={Image3} alt="" />
          <span>HOME 01</span></div>
          <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:"center"}}><img  className="images" src={Image4} alt="" />
          <span>HOME 02</span></div>
          <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:"center"}}><img className='images' src={Image5} alt="" />
          <span>HOME 02</span></div>
       </div>
        

      </div>
       
      


    </>
  )
}

export default Page2
