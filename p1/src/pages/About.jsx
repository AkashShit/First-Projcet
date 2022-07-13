import React from 'react'
import bgImg from '../assets/img/about-bg.jpg';
import AboutMain from '../core/AboutMain';
const About = () => {
  return (
    <div style={{marginTop:"80px"}}>
         <header class="masthead" style={{backgroundImage:` url(${bgImg})`}}>
         <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="page-heading">
                            <h1>About Me</h1>
                            <span class="subheading">This is what I do.</span>
                        </div>
                    </div>
                </div>
            </div>


         </header>
         <AboutMain/>
        </div>
  )
}

export default About