import React from 'react'
import logo from "../images/Logo-AC.svg";
import SearchBar from './searchBar';
import { Link } from "react-router-dom";
import { Navbar, Logos } from '../styles/navbar'

const NavBar = () => {

  return (
    <Navbar /* className='navbar' */>
      <Logos>
        <Link to='/'>
          <img id='logo' src={logo} alt="Ups" />
        </Link>
        <div>
          <span id='arg' className='argenclima'>Arg</span>
          <span id='encl' className='argenclima'>enCl</span>
          <span id='ima' className='argenclima'>ima</span>
        </div>
      </Logos>
      <SearchBar />
    </Navbar>
  )
}

export default NavBar
