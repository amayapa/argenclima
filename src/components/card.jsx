import React, { useContext } from 'react';
import { Context } from '../context/context';
import shields from '../context/shields'
import { CardComponent } from "../styles/card";
import Unfav from '../images/unfav.svg'
import Faved from '../images/faved.svg'
import { Star } from "../styles/star";

const Card = ({ city }) => {
  const { data, addToFav, fixName, favorites } = useContext(Context);
  // console.log(city);

  const handleOnClick = (e) => {
    e.preventDefault()
    addToFav(data.currentProvince);
  }

  /* ======================= RENDERING ======================= */
  return (
    <CardComponent>
      <Star
        id='star'
        onClick={(e) => handleOnClick(e)}
        top='15px'
      >
        <img
          height={50}
          alt={data.currentProvince.id}
          src={favorites.matchFavs(data.currentProvince.id) ? Faved : Unfav}
        />
      </Star>
      <h3>{data.currentProvince.name && fixName(data.currentProvince.name)}</h3>
      <div id='stats'>
        <div>
          <p>Temp: <span>{data.currentProvince.temp}&#176;</span></p>
          <p>Sensación: <span>{data.currentProvince.rf}&#176;</span></p>
          <p>Min: <span>{data.currentProvince.min}&#176;</span></p>
          <p>Max: <span>{data.currentProvince.max}&#176;</span></p>
          <p>Viento: <span>{data.currentProvince.wind}kms</span></p>
          <p>Humedad: <span>{data.currentProvince.humidity}%</span></p>
          <p>Lat: <span>{data.currentProvince.lat}</span></p>
          <p>Lon: <span>{data.currentProvince.lon}</span></p>
        </div>
        <div id='images'>
          <img src={shields[data.currentProvince.name]} alt='shield' id='shield' />
          <img src={`https://openweathermap.org/img/wn/${data.currentProvince.img}@2x.png`} alt='icon weather' id='icon' />
        </div>
      </div>
    </CardComponent>
  )
}

export default Card;
