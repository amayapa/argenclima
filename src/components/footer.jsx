import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context/context';
import { FooTer, Credits } from '../styles/footer';

const Footer = () => {
  const { getFavs } = useContext(Context)

  return (
    <FooTer>
      <Link onClick={getFavs} to='/'>
        <span>Inicio</span>
      </Link>
      <Link onClick={getFavs} to='/fav'>
        <span>Favoritas</span>
      </Link>
      <p>Powered by:</p>
      <Credits>
        <a href='https://openweathermap.org/' target='_blank' rel='noreferrer noopener'><span>Open Weather</span></a>
        <span>&#38;</span>
        <a href='https://es.wikipedia.org/wiki/Wikipedia:Bienvenidos' target='_blank' rel='noreferrer noopener'><span>Wikipedia</span></a>
      </Credits>
    </FooTer>
  );
}

export default Footer;
