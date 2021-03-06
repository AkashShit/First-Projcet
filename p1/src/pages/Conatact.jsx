import React from 'react'
import ContactMain from '../core/ContactMain'
import bgImg from '../assets/img/contact-bg.jpg'
const Conatact = () => {
  return (
    <div style={{marginTop:"80px"}}> 
        <header class="masthead" style={{backgroundImage:` url(${bgImg})`}}>
    <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
                <div class="page-heading">
                    <h1>Contact Me</h1>
                    <span class="subheading">Have questions? I have answers.</span>
                </div>
            </div>
        </div>
    </div>
</header>
<ContactMain/>
</div>
  )
}

export default Conatact