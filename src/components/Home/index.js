import React, { useState } from "react";


const Home = () => {
    const [placeholder, setPlaceholder] = React.useState('');

    const
      string = 'All great projects start with a great idea',
      index = React.useRef(0);
  
    React.useEffect(() => {
      function tick() {
        setPlaceholder(prev => prev + string[index.current]);
        index.current++;
      }
      if (index.current < string.length) {
        let addChar = setInterval(tick, 300);
        return () => clearInterval(addChar);
      }
    }, [placeholder]);


    return (

        <header className=""
            id="home">
            <div className="webDeveloper text-center">
                <h2>Web Developer</h2>
            </div>

            <div id="msg" className="home-slogan">
                <span className="slogan w3-xlarge" >{placeholder}</span>
            </div>

        </header>

    )
}

export default Home