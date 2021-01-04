import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../context/context';
import { Landing } from "../styles/landingpage";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [info, setInfo] = useState([])
  const ids = {
    from1to20: "3435907,3862286,3861887,3861244,3433955,3435214,3860255,3434137,3433896,3853404,3849574,3848949,3844419,3430657,3843122,3838830,3838231,3837152,3837029,3836350",
    from20to: "3836276,3835868,3834450,3833578"
  }
  // const { data, setData } = useContext(Context)
  const api = "9ec47a8150e44e6385aae05be36f9e11";
  const regex = /Province|F.D./gi;

  // const navigate = () => {
  //   setData()
  //   window.location.href = '/dashboard';
  // }

  useEffect(() => {
    const getInfo = () => {
      const prov = []
      fetch(
        `http://api.openweathermap.org/data/2.5/group?id=${ids.from1to20}&appid=${api}&units=metric`
      )
        .then((r) => r.json())
        .then((recurso) => {
          if (recurso.list !== undefined) {
            prov.push(...recurso.list)
          }
        })
        .then(() => {
          fetch(
            `http://api.openweathermap.org/data/2.5/group?id=${ids.from20to}&appid=${api}&units=metric`
          )
            .then((r) => r.json())
            .then((recurso) => {
              if (recurso.list !== undefined) {
                prov.push(...recurso.list)
              }
              setInfo(prov)
            })
        })
    }
    getInfo();
    // eslint-disable-next-line
  }, [])

  return (
    <Landing>
      {
        info.map((p) => {
          return (
            <Link id='link' to='/dashboard' params={{ provData: p }} >
              <div key={p.id} className='container'>
                <h4>{p.name.replace(regex, '')}<br /></h4>
                <div className='info'>
                  <div id='text'>
                    <p>Temp <span>{p.main.temp}&#176;</span></p>
                    <p>St <span>{p.main.feels_like}&#176;</span></p>
                  </div>
                  <div id='images'>
                    <img src={`http://openweathermap.org/img/wn/${p.weather[0].icon}@2x.png`} alt='icon weather' id='icon' />
                  </div>
                </div>
              </div>
            </Link>
          )
        })
      }
    </Landing>
  )
}

export default LandingPage;
