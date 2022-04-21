
import React  from 'react'

function Nav({ currentPage, handlePageChange }) {
    return (

        <header>

            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <h1 className="navbar-brand" href="/"><i class="fa-solid fa-laptop-code"></i>I am Fabi</h1>
                    <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a href="#home" className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}

                                onClick={() => handlePageChange('Home')}><i className="fa-solid fa-igloo"></i>HOME</a>
                            <a
                                href="#about" className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}

                                onClick={() => handlePageChange('About')}><i className="fa fa-user"></i>ABOUT ME</a>
                            <a href="#portfolio" className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}

                                onClick={() => handlePageChange('Portfolio')}><i className="fa fa-th"></i>PORTFOLIO</a>
                            <a href="#contact" className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}

                                onClick={() => handlePageChange('Contact')}><i className="fa fa-envelope"></i>CONTACT</a>


                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Nav