import React, { useContext } from 'react'
import { Context } from '../context/context';
import { Link } from "react-router-dom";
import { SB } from "../styles/searchbar";

const SearchBar = (props) => {
  // console.log("SearchBar props", props);
  const { data, setData, fixName, api, removeAccents } = useContext(Context)

  const orderedProvinces = data.provinces.sort(function (a, b) {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  })

  function onSearch(e, city) {
    e.preventDefault()
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: recurso.main.temp_min.toFixed(1),
            max: recurso.main.temp_max.toFixed(1),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed.toFixed(1),
            temp: recurso.main.temp,
            rf: recurso.main.feels_like.toFixed(1),
            name: removeAccents(recurso.name),
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            lat: recurso.coord.lat,
            lon: recurso.coord.lon,
            humidity: recurso.main.humidity,
          };
          setData({
            ...data,
            currentProvince: ciudad
          })
        }
      });
  }
  return (
    <SB>
      <Link to='/dashboard'>
        <select
          onChange={e => {
            onSearch(e, e.target.value)
          }}
          name="city"
          id="city"
          value={data.currentProvince.name}
        >
          <option value=''>Seleciona tu Ciudad:</option>
          {
            orderedProvinces.map((p, i) => {
              return (
                <option key={i} value={removeAccents(p.name)}>
                  {fixName(p.name)}
                </option>
              )
            })
          }
        </select>
      </Link>
    </SB>
  )
}

export default SearchBar;
