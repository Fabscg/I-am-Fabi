import React from "react";
import avatar from '../../assets/profile/Fabs.jpg'

import { SiHandlebarsdotjs, SiMysql, SiMongodb, SiApollographql } from 'react-icons/si'


function About(props) {
    return (
        <div class="w3-container w3-dark-grey w3-center" id="about">
            <h4 className="about-me"><b>About Me</b></h4>
            <img src={avatar} alt="MySelf" class="w3-image w3-padding-32" style={{ width: "600px" }} />
            <div class="w3-content">
                <h4>I am Fabi</h4>
                <p>
                    People find me to be an upbeat self-motivated team player with excellent
                    communication skills. For the past several years, I have worked in customer service and hospitality, and
                    have also spearheaded my own business. Having held a lifelong affinity for coding and programming, I
                    endeavoured to equip myself with the knowledge and skillset to pursue a career as a developer. Over the
                    last two
                    years, I independently dedicated myself to deepening my studies and experience in web development and
                    acquired
                    proficiency in the breadth of programming languages. I am a curious and driven individual, and excited
                    for an opportunity to specialize in this dynamic industry.
                </p>
            </div>
            <h1>Languages Mastered</h1>
            <div className="language-mastered row">
                <div>
                    <i class="language fa-brands fa-github-square fa-2x"></i>
                    <i class="language fa-brands fa-css3-alt fa-2x"></i>
                    <i class="language fa-brands fa-js fa-2x"></i>
                    <i class="language fa-brands fa-react fa-2x"></i>
                    <i class="language fa-solid fa-database fa-2x"></i>
                </div>
                <div>
                    <i class="language fa-brands fa-node fa-2x"></i>
                    <i class="language fa-brands fa-bootstrap fa-2x"></i>
                    <i className="language fa-2x"><SiHandlebarsdotjs /></i>
                    <i class="language fa-brands fa-gitlab fa-2x"></i>
                </div>
                <div>
                    <i className="language fa-2x"><SiMysql /></i>
                    <i className="language fa-2x"><SiMongodb /></i>
                    <i className="language fa-2x"><SiApollographql /></i>
                </div>

            </div>
        </div>

    )
}


export default About;