import React from 'react'
import Image from '../image/part3.png'
import Image1 from '../image/part3.1.png'
import Image2 from '../image/click on.png'
import Image3 from '../image/part3.2.png'

const Page4 = () => {
    return (
        <>
        <div className='cont4'>
            <div className='container4'>
                <div ><img src={Image} alt="" /></div>
                <div className='divthree'><img src={Image1} alt="" /><br></br>
                    <span className='threehead'>BUILT WITH ELEMENTOR PAGE BUILDER</span><br></br>
                <br></br>    <span>Elementor is an intuitive and flexible page builder. it enable you to create and customize layouts by dragging and dropping elements. no coding required.</span>
                </div>
            </div>
            <div className='container40'>
                <div><img className='imgtwo' src={Image2} alt="" /><br></br>
                <span className='threehead'>ONE CLICK DEMO IMPORT</span><br></br>
             <br></br>   <span>Setup one click demo import for you theme and your users will thank you for it!<br></br> follow this easy guide on how to setup this pligin for your themes!</span>
                </div>
                <div><img src={Image3} alt="" /></div>
            </div>
            </div>
        </>
    )
}

export default Page4
