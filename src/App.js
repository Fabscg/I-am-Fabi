import Nav from './components/Nav'
import React, { useState } from  'react'
import './App.css';
import './index.css'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'




function App() {
  const [currentPage, setCurrentPage] = useState("About");

  function RenderPage({ currentPage }) {


    if (currentPage === 'Home') {
      return <Home />;
    }

    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
  
    if (currentPage === 'Contact') {
      return <Contact />;
    }
  
    return currentPage;
  }

  //Method to check value of 'currentPage => return value of currentPage, corresponding to compent to render 
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
     
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <RenderPage currentPage={currentPage} />
      <Footer></Footer>
    </div>
  );
}

export default App;
