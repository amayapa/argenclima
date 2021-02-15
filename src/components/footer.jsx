import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context/context';
import FooTer from '../styles/footer';

const Footer = (props) => {
  // console.log("Footer props", props);
  const { getFavs } = useContext(Context)

  return (
    <FooTer>
      <Link onClick={getFavs} to='/'>
        <span>Inicio</span>
      </Link>
      <Link onClick={getFavs} to='/fav'>
        <span>Favoritas</span>
      </Link>
    </FooTer>
  )
}

export default Footer;
