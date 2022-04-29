import React from "react";






function Home() {

    return (

        <header className="w3-grayscale-min"
            id="home">
            <div className="w3-display-center w3-text-white" style={{ padding: 48 }}>
                <button className="home-button"><a href="#about" className="w3-button w3-white w3-padding-large w3-large w3-margin-top w3-white">Web Developer</a></button>

            </div>
            <div className="home-slogan">
                <span className="w3-jumbo w3-hide-small">Start something that matters</span>
                <span className="slogan w3-xlarge">All great projects start with a great idea</span>
            </div>

        </header>

    )
}

export default Home