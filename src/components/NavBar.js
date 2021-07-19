import React from "react";
import { Link } from "react-router-dom";

import ThemeButton from './UI/TheamButton';

import SearchForm from "./SearchForm";

export default function Navbar({cartCount, changeTheme, setInput,  handleSubmit, input, toggleModal, totalNumCartItems, totalItem }) {

  return (
    <nav className="navbar">
    <div className="navbar-search">
     <Link to="/"><h2>CocktailSelect</h2></Link>
      <SearchForm setInput={setInput} handleSubmit={handleSubmit}  input={input}  />
    </div>
    <div className="navbar-icon">
      <div className="cart-icon" onClick={() => toggleModal()}> 
        {/* <i className="fas fa-shopping-basket"></i> ({totalNumCartItems}) */}
        <i className="fas fa-shopping-basket"></i> ({cartCount})
      </div>
        <ThemeButton onClick={changeTheme} />
    </div>

    </nav>
  );
}
