
import React from 'react'

function Nav({ currentPage, handlePageChange }) {
    return (
        <div>
            <div>

                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand" href="#about"><i class="fa-solid fa-laptop-code"></i>I am Fabi</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a href="#home" className={currentPage === 'Home' ? 'nav-link' : 'w3-button'}

                                    onClick={() => handlePageChange('Home')}><i class="fa-solid fa-igloo"></i>HOME</a>
                            </li>
                            <li className="nav-item">
                                <a href="#about" className={currentPage === 'About' ? 'nav-link' : 'w3-button'}

                                    onClick={() => handlePageChange('About')}><i className="fa fa-user"></i>ABOUT</a>
                            </li>
                            <li className="nav-item">
                                <a href="#portfolio" className={currentPage === 'Portfolio' ? 'nav-link' : 'w3-button'}

                                    onClick={() => handlePageChange('Portfolio')}><i className="fa fa-th"></i> PORTFOLIO</a>
                            </li>
                            <li className="nav-item">
                                <a href="#contact" className={currentPage === 'Contact' ? 'nav-link' : 'w3-button'}

                                    onClick={() => handlePageChange('Contact')}><i className="fa fa-envelope"></i> CONTACT</a>
                            </li>
                        </ul>



                    </div>

                </nav>
            </div>
        </div>


    )
}
export default Nav