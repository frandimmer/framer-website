import React from 'react'
import '../Styles/About.css'
import ServicesCard from '../Components/ServicesCard'

function About() {
  return (
    <div className='about-section'>
      <div className='about-title-container'>
        <h1 className='about-title'>NOSOTROS</h1>
      </div>
      <div className='about-grid-container'>
        <div className='left'>
        <img className='about-logo' src={require('../Images/logo-2.png')} />
        </div>
        <div className='right'>
          <h2>QUIENES SOMOS?</h2>
        </div>
      </div>
    </div>
    // <div>
    //   <div id='about' className='about-container'>
    //     <div className='left'>
    //       <img className='about-logo' src={require('../Images/logo-2.png')} />
    //     </div>
    //     <div className='right'>
    //       <h1 className='us-title'>NOSOTROS</h1>
    //       <p className='us-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat molestiae eum tenetur sunt esse doloremque, dolorum consequuntur odio totam illo in ab, asperiores quasi quo. Quidem, aut. Pariatur, distinctio minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, a. Reiciendis a dolore quidem quis asperiores earum exercitationem fuga quod atque minus laudantium aliquam omnis unde nobis nihil, nam sunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ad consequuntur magnam minus quo impedit. Eligendi reprehenderit doloremque quae at aut dicta nemo dolorum deserunt. Sapiente voluptas totam corrupti sequi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat mollitia quaerat cum deserunt fugiat minus sunt tempore possimus unde, porro voluptates eligendi quos vel minima repudiandae recusandae ducimus officiis delectus.</p>
    //     </div>
    //   </div>
    // </div>
  )
}

export default About