import React, { useContext } from 'react';
import Card from './card';
import { Context } from '../context/context';
import DashBoard from '../styles/dashboard'

const Dashboard = () => {
  const { data, fixName, wikiExtract } = useContext(Context)

  const salta = '«Salteño» redirige aquí. Para la ciudad argentina del mismo gentilicio, véase Ciudad de Salta. Para la ciudad uruguaya del mismo gentilicio, véase Salto (Uruguay). Para el departamento uruguayo del mismo gentilicio, véase Departamento de Salto.'

  return (
    <DashBoard>
      <Card city={data.currentProvince.name} />
      <div id='extra-info'>
        <h1>{data.currentProvince.name && fixName(data.currentProvince.name)}</h1>
        <p id='text'>
          {data.currentProvince.name === 'Salta Province'
            ? wikiExtract.extract.replace(salta, '').replace(/ *\[[^\]]*]/g, '')
            : wikiExtract.extract.replace(/ *\[[^\]]*]/g, '')}{' '}
          <a href={`https://es.wikipedia.org/?curid=${wikiExtract.id}`} target="_blank" rel="noopener noreferrer">Leer mas</a>
        </p>
      </div>
    </DashBoard>
  )
}

export default Dashboard;
