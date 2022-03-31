import React from "react";
import avatar from '../../assets/profile/Fabs.jpg'


function About(props) {
    return (
        <div class="w3-container w3-dark-grey w3-center w3-text-light-grey w3-padding-32" id="about">
            <h4><b>About Me</b></h4>
            <img src={avatar} alt="Me" class="w3-image w3-padding-32" style={{ width: 600 }} />
            <div class="w3-content w3-justify" style={{ width: 600 }}>
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
        </div>

    )
}


export default About;