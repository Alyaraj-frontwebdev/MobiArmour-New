import React from 'react'
import Image1 from '../Assets/MobiArmour.png'
import Image2 from '../Assets/MobiArmor2.png'
import Image3 from '../Assets/MobiArmor3.png'
export default function ImgCard() {
  return (
    <section>
      <div class="introTxt">
       <div>
       <h3> Let's Learn More About Securing <br/>our Digital Life</h3>
        <p> Are you too a Digital geek? </p>
        <p> Let us take the first step towards a peaceful digital life </p>
       </div>
      </div>
      <div class="mobiarmour_parallax_container">
        <img src={Image1}/>
        <img src={Image2}/>
        <img src={Image3}/>
      </div>
    </section>
  )
}
