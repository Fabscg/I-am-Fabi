
import React from 'react'

function Nav({ currentPage, handlePageChange }) {
    return (
        <div>
            <div>

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#home"><i className="fa-solid fa-laptop-code"></i>I am Fabi</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="true" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav">
                            <a href="#home" className={currentPage === 'Home' ? 'nav-link' : 'nav-item'}

                                onClick={() => handlePageChange('Home')}><i class="fa-solid fa-igloo"></i>HOME</a>

                            <a href="#about" className={currentPage === 'About' ? 'nav-link' : 'nav-item'}

                                onClick={() => handlePageChange('About')}><i className="fa fa-user"></i>ABOUT</a>

                            <a href="#portfolio" className={currentPage === 'Portfolio' ? 'nav-link' : 'nav-item'}

                                onClick={() => handlePageChange('Portfolio')}><i className="fa fa-th"></i> PORTFOLIO</a>

                            <a href="#contact" className={currentPage === 'Contact' ? 'nav-link' : 'nav-item'}

                                onClick={() => handlePageChange('Contact')}><i className="fa fa-envelope"></i> CONTACT</a>
                        </div>

                    </div>


                </nav>
            </div>
        </div>


    )
}
export default Nav