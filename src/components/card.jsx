import React, { useContext } from 'react';
import { Context } from '../context/context';
import shields from '../images/escudos/shields'
import { CardComponent } from "../styles/card";

const Card = (props) => {
  console.log(props);
  const { data } = useContext(Context)

  return (
    <CardComponent>
      <span id='x'>X</span>
      <h3>{data.currentProvince.name}</h3>
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
          <img src={shields[data.currentProvince]} alt='shield' id='shield' />
          <img src={`http://openweathermap.org/img/wn/${data.currentProvince.img}@2x.png`} alt='icon weather' id='icon' />
        </div>
      </div>
    </CardComponent>
  )
}

export default Card;
