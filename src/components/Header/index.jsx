import React from 'react';
import PropTypes from 'prop-types';
import "./Header.css"
import Navbar from './Navbar';
import SearchPosts from '../../components/SearchPosts'

Header.propTypes = {
  
};

function Header(props) {
  return (
    <div className="Header">
      {/* <!-- Header --> */}
      <header className="">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="/"><h2>Chợ <em>Tốt</em></h2></a>
            <SearchPosts />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <Navbar />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;