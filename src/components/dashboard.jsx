import React, { useContext } from 'react';
import Card from './card';
import { Context } from '../context/context';
import DashBoard from '../styles/dashboard'

const Dashboard = ({ provData }) => {
  // console.log("DashBoard props", props);
  const { data, fixName } = useContext(Context)

  return (
    <DashBoard>
      <Card city={data.currentProvince} />
      <div id='extra-info'>
        <h1>{data.currentProvince.name && fixName(data.currentProvince.name)}</h1>
        <p id='text'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae molestias rem et necessitatibus nihil! Tempora in totam repellendus quaerat obcaecati possimus esse atque molestiae, architecto nulla impedit dolore voluptate accusamus sed consequuntur perspiciatis velit facere. Officiis doloremque, enim debitis iure eveniet suscipit deserunt odit quae perferendis eum quaerat vel harum fugit temporibus et rerum, unde excepturi, dolores eaque molestiae magni! Consequatur omnis cumque a dicta nemo? Dolorem, dolorum. Aperiam magni corrupti et rerum error voluptatem eum eligendi recusandae aut voluptatibus. Consequuntur dolorem, maiores dignissimos voluptas, ratione temporibus deserunt omnis quos beatae obcaecati, aut possimus placeat fugiat debitis libero ad tempora.
        </p>
      </div>
    </DashBoard>
  )
}

export default Dashboard;
