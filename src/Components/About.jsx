import React from 'react'
import '../Styles/About.css'
import logo from '../Images/logo-2.png'

function About() {
  return (
    <div id='about' className='about-container'>
      <div className='left'>
        <img className='about-logo' src={logo} />
      </div>
      <div className='right'>
        <h1>NOSOTROS</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat molestiae eum tenetur sunt esse doloremque, dolorum consequuntur odio totam illo in ab, asperiores quasi quo. Quidem, aut. Pariatur, distinctio minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, a. Reiciendis a dolore quidem quis asperiores earum exercitationem fuga quod atque minus laudantium aliquam omnis unde nobis nihil, nam sunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ad consequuntur magnam minus quo impedit. Eligendi reprehenderit doloremque quae at aut dicta nemo dolorum deserunt. Sapiente voluptas totam corrupti sequi? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat mollitia quaerat cum deserunt fugiat minus sunt tempore possimus unde, porro voluptates eligendi quos vel minima repudiandae recusandae ducimus officiis delectus.</p>
      </div>
    </div>
  )
}

export default About