import React from 'react'
import './DesktopDesign.css'

const DesktopDesign = ({imgLink}) => {
  return (
        <div>
            <div class="outer-box">
        
                <div class = "side-container1">
                    <section class="side-container1-section-top">
                        <div class="photon small-circle1">  </div>
                        <div class="photon small-circle2"> </div>
                        <div class="photon small-circle3"> </div>
                    </section>
                    <section class="side-container1-section-bottom">
                        
                        <hr class="blank line1" />
                        <hr class="blank line2" />
                        <hr class="blank line2" />
                        <hr class="blank line2" />
                        <hr class="blank line2" />
                        <hr class="blank line1" />
                        <hr class="blank line2" />
                        <hr class="blank line2" />
                        <hr class="blank line2" />
                        <hr class="blank line2" />
                        <hr class="blank line1" />
                        <hr class="blank line2" />
                        <hr class="blank line2" />
                        <hr class="blank line2" />
                        <hr class="blank line2" />
                    </section>
        
                </div>
                <div className="side-container2 ">
                    <section className="img">
                        <img src={imgLink} alt="Computer"></img>
                    </section>
                </div>
            </div>
            <hr class="short-stand"></hr>
            <hr class="long-stand"></hr>
        
        </div>
  )
}

export default DesktopDesign
