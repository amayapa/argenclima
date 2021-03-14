/* ======================= IMPORTATIONS ======================= */
import React, { useEffect, useContext, useState } from 'react'
import { Context } from '../context/context';
import shields from '../context/shields';
import { Fav, Container, EmptyFav, Title, CardContainer } from "../styles/fav";
import { Spinner } from "../styles/spinner";

const Favorites = () => {
  /* ======================= STATE & VARS ======================= */
  const { getFavs, data, fixName, api, deleteFav, setData, getWikiExtract, favorites } = useContext(Context);
  const favs = favorites.favs;
  const ids = favs.map((fav) => fav.id).join(',');
  const [favsData, setFavsData] = useState(null);

  /* ======================= FUNCTIONS ======================= */
  useEffect(() => {
    setTimeout(() => {
      getFavs()
    }, 100)
    // eslint-disable-next-line
  }, [favs])

  useEffect(() => {
    const getBulkCitiesById = () => {
      const prov = []
      if (ids === '') {
        prov.push('no favs');
      }
      else {
        fetch(
          `https://api.openweathermap.org/data/2.5/group?id=${ids}&appid=${api}&units=metric`
        )
          .then((r) => r.json())
          .then((recurso) => {
            if (recurso.list !== undefined) {
              prov.push(...recurso.list)
            }
          })
          .then((x) => {
            setFavsData(prov);
          })
          .catch((err) => {
            console.log('Error: ', err);
          })
      }
    };
    getBulkCitiesById();
    // eslint-disable-next-line
  }, [favs])

  const handleOnDelete = (e, id) => {
    e.preventDefault();
    deleteFav(id);
  }

  /* ======================= RENDERING ======================= */
  return (
    <Container>
      <Title>
        Provincias Favoritas
      </Title>
      <CardContainer>
        {
          !favs.length
            ? (
              <EmptyFav>
                <h1>
                  No tenés ninguna provincia seleccionada como favorita.
                </h1>
              </EmptyFav>
            )
            : favsData == null
              ? (<Spinner></Spinner>)
              : favsData.map(f => {
                const city = {
                  min: f.main.temp_min.toFixed(1),
                  max: f.main.temp_max.toFixed(1),
                  img: f.weather[0].icon,
                  id: f.id,
                  wind: f.wind.speed.toFixed(1),
                  temp: f.main.temp,
                  rf: f.main.feels_like.toFixed(1),
                  name: f.name,
                  weather: f.weather[0].main,
                  clouds: f.clouds.all,
                  lat: f.coord.lat,
                  lon: f.coord.lon,
                  humidity: f.main.humidity,
                };
                return (
                  <Fav key={f.id} caba={f.name}>
                    <button
                      id='x'
                      onClick={(e) => handleOnDelete(e, f.id)}
                    > X
                    </button>
                    <h3
                      onClick={() => {
                        setData({
                          ...data,
                          currentProvince: city,
                        })
                        getWikiExtract(city.name)
                        window.location = '/dashboard'
                      }}
                    >{f && fixName(city.name)}
                    </h3>
                    <div id='stats'>
                      <div>
                        <p>Temp: <span>{city.temp}&#176;</span></p>
                        <p>Sensación: <span>{city.rf}&#176;</span></p>
                        <p>Min: <span>{city.min}&#176;</span></p>
                        <p>Max: <span>{city.max}&#176;</span></p>
                        <p>Viento: <span>{city.wind}kms</span></p>
                        <p>Humedad: <span>{city.humidity}%</span></p>
                        <p>Lat: <span>{city.lat}</span></p>
                        <p>Lon: <span>{city.lon}</span></p>
                      </div>
                      <div id='images'>
                        <img src={shields[city.name]} alt='shield' id='shield' />
                        <img src={`https://openweathermap.org/img/wn/${city.img}@2x.png`} alt='icon weather' id='icon' />
                      </div>
                    </div>
                  </Fav>
                )
              })
        }
      </CardContainer>
    </Container>
  )
}

export default Favorites;
