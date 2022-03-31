
import React from 'react'

function Nav({ currentPage, handlePageChange }) {
    return (
        <div>
            <div className="w3-top">

                <div className="w3-bar w3-card" id="myNavbar">
                    <a href="#home" className="title w3-bar-item w3-button w3-wide"><i class="fa-solid fa-laptop-code"></i> I am Fabi</a>

                    <div className="w3-right w3-hide-small">
                        <a href="#home" className={currentPage === 'Home' ? 'w3-bar-item' :'w3-button'}

                            onClick={() => handlePageChange('Home')}>HOME</a>
                        <a href="#about" className={currentPage === 'About' ? 'w3-bar-item' : 'w3-button'}

                            onClick={() => handlePageChange('About')}><i className="fa fa-user"></i>ABOUT</a>
                        <a href="#portfolio" className={currentPage === 'Portfolio' ? 'w3-bar-item' : 'w3-button'}

                            onClick={() => handlePageChange('Portfolio')}><i className="fa fa-th"></i> PORTFOLIO</a>
                        <a href="#contact" className={currentPage === 'Contact' ? 'w3-bar-item' : 'w3-button'}

                            onClick={() => handlePageChange('Contact')}><i className="fa fa-envelope"></i> CONTACT</a>
                    </div>

                    <a href="project" className="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium" onClick="w3_open()">
                        <i className="fa fa-bars"></i>
                    </a>
                </div>
            </div>



            <nav className="w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large" style={{ display: "none" }} id="mySidebar">
                <a href="project" onClick="w3_close()" className="w3-bar-item w3-button w3-large w3-padding-16">Close ×</a>
                <a href="#home" onclick="w3_close()" className="w3-bar-item w3-button">HOME</a>

                <a href="#about" onclick="w3_close()" className="w3-bar-item w3-button">ABOUT</a>
                <a href="#portfolio" onclick="w3_close()" className="w3-bar-item w3-button">PORTFOLIO</a>
                <a href="#contact" onclick="w3_close()" className="w3-bar-item w3-button">CONTACT</a>
            </nav>

        </div>

    )
}
export default Nav