import React from "react";

const currentYear = new Date().getFullYear()

function Footer() {
    return (


        <>
            <footer >
                <div className="icons-bottom">
                    <a className="w3-button icon-button" href="mailto:fabiscg79@gmail.com"><i className="icon fa-solid fa-envelope fa-2x"></i></a>
                    <a className="w3-button icon-button" href="https://github.com/Fabscg"><i className="icon fa-brands fa-github-alt fa-2x"></i></a>
                    <a className="w3-button icon-button" href="https://www.linkedin.com/in/fabicastaneda/"><i
                        className="icon fab fa-linkedin fa-2x"></i></a>
                    <a className="w3-button icon-button" href="tel:647-888-4713"><i className="icon fa-solid fa-phone fa-2x"></i></a>
                    <a className="w3-button icon-button" href="https://drive.google.com/file/d/1CEihL8MI9RlRCzoJQ2P2KfHCYyMj9cAP/view?usp=sharing"><i
                        className="icon fa-solid fa-file-pdf fa-2x"></i></a>
                </div>

                <div className="bottom-container">
                    <p className="copyright">Copyright by <i className="icon-terminal fa-solid fa-terminal"></i> Fabiola C. Gamboa {currentYear}</p>

                </div>

            </footer>
        </>

    )

}





export default Footer