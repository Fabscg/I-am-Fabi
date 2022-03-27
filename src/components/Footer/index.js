import React from "react";


const currentYear = new Date().getFullYear()

function Footer() {
    return (
        <div className="bottom-container d-flex justify-content-center text-center">
            <footer >
                <div className="icons-bottom">
                    <a href="mailto:fabiscg79@gmail.com"><i className="icon fa-solid fa-envelope fa-2x"></i></a>
                    <a href="https://github.com/Fabscg"><i className="icon fa-brands fa-github fa-2x"></i></a>
                    <a href="https://www.linkedin.com/in/fabicastaneda/"><i
                        class="icon fab fa-linkedin fa-2x"></i></a>
                    <a href="tel:647-888-4713"><i class="icon fa-solid fa-phone fa-2x"></i></a>
                    <a href="https://drive.google.com/file/d/1kvbXQaYdkMTpmI_2ESDmQCqmOX-gEDej/view?usp=sharing"><i
                        class="icon fa-solid fa-file-pdf fa-2x"></i></a>
                </div>


                <p className="copyight pb-5">Copyright by <i className="icon-terminal fa-solid fa-terminal"></i> Fabiola C. Gamboa {currentYear}</p>
            </footer>
        </div>



    )
}




export default Footer