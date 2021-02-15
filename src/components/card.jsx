import React, { useContext } from 'react';
import { Context } from '../context/context';
import shields from '../context/shields'
import { CardComponent } from "../styles/card";
import { Spinner } from "../styles/spinner";

const Card = ({ city }) => {
  const { data, addToFav, fixName } = useContext(Context);
  console.log("Card props", city);

  const handleOnClick = (e) => {
    e.preventDefault()
    addToFav(data.currentProvince);
  }

  /* ======================= RENDERING ======================= */
  return (
    <CardComponent>
      {
        !data.currentProvince.name ? (
          <div>
            <h3>Esperando su selección</h3>
            <Spinner></Spinner>
          </div>
        ) : null
      }
      {
        data.currentProvince.name
          ? (
            <div>
              <button
                id='star'
                onClick={(e) => handleOnClick(e)}
              > &#10025;
              </button>
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
                  <img src={`http://openweathermap.org/img/wn/${data.currentProvince.img}@2x.png`} alt='icon weather' id='icon' />
                </div>
              </div>
            </div>
          )
          : null
      }
    </CardComponent>
  )
}

export default Card;
