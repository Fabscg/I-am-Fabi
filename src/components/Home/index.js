import React from "react";

// const text = document.querySelector(".slogan")
// const strText = text.textContent;
// const splitText = strText.split("");
// text.textContent = "";

// for(let i = 0;i < splitText.length; i++){
// text.innerHTML += "<span>" + splitText[i] + "<span>"
// }
// let char = 0;
// let timer = setInterval(onTick, 50)

// function onTick(){
//     const span = text.querySelectorAll("span")[char];
//     span.classList.add("fade");
//     char++
//     if(char === splitText.length){
//         complete();
//         return;
//     }
//     console.log(onTick());
// }
// function complete(){
//     clearInterval(timer)
// }


const Home = () => {



    return (

        <header className=""
            id="home">
            <div className="webDeveloper">
                <h2>Web Developer</h2>
            </div>

            <div id="msg" className="home-slogan">
                <span className="slogan w3-xlarge" >All great projects start with a great idea</span>
            </div>

        </header>

    )
}

export default Home