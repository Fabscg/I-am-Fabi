import React from "react";


const currentYear = new Date().getFullYear()

function Footer() {
    return (

        <footer >
            <div className="icons-bottom">
                <a className="w3-button icon-button" href="mailto:fabiscg79@gmail.com"><i className="icon fa-solid fa-envelope fa-2x"></i></a>
                <a className="w3-button icon-button" href="https://github.com/Fabscg"><i className="icon fa-brands fa-github fa-2x"></i></a>
                <a className="w3-button icon-button" href="https://www.linkedin.com/in/fabicastaneda/"><i
                    class="icon fab fa-linkedin fa-2x"></i></a>
                <a className="w3-button icon-button" href="tel:647-888-4713"><i class="icon fa-solid fa-phone fa-2x"></i></a>
                <a className="w3-button icon-button" href="https://docs.google.com/document/d/15iV5DR8WVlWMFaJuW8_JXfBDM3Aeu9RLIFyg9mQidtY/edit?usp=sharing"><i
                    class="icon fa-solid fa-file-pdf fa-2x"></i></a>
            </div>

            <div className="bottom-container">
                <p className="copyight">Copyright by <i className="icon-terminal fa-solid fa-terminal"></i> Fabiola C. Gamboa {currentYear}</p>

            </div>

        </footer>



    )
}




export default Footer