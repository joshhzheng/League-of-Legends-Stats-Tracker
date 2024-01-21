import React from 'react';
import { useLocation } from 'react-router-dom';
import '../Components/GameReport.css';

const GameReport = () => {
  const location = useLocation();
  const matchData = location.state ? location.state.matchData : null; 

  if (!matchData) {
    return <p>No match data available</p>
  }

  return (
    <div className="container">
      <div className='blue-info'>
        <div className='blue-result'>
          Victory
        </div>

        <div className='roles'>
          Role
        </div>

        <div className='kdas'>
          KDA
        </div>

        <div className='dmgs'>
          Damage
        </div>

        <div className='golds'>
          Gold
        </div>

        <div className='css'>
          CS
        </div>

        <div className='wards'>
          Wards
        </div>

        <div className='champItems'>
          Items
        </div>
      </div>
      
      <div className='blue'>
        <div className='champ'>
          <img src={topChampIcon} alt="" />
        </div>

        <div className='spells'>
          <div className='spell'>
            <img src={flashIcon} alt="" />
          </div>

          <div className='spell'>
            <img src={infinityEdgeIcon} alt="" />
          </div>
        </div>

        <div className='name'>
          Bread
        </div>

        <div className='role'>
          Top
        </div>

        <div className='kda'>
          0/10/0
        </div>

        <div className='dmg'>
          1009
        </div>

        <div className='gold'>
          10000
        </div>

        <div className='cs'>
          100
        </div>

        <div className='ward'>
          20
        </div>

        <div className='items'>
          <div className='item'>
            <img src={infinityEdgeIcon} alt="" />
          </div>
          
          <div className='item'>
            <img src={infinityEdgeIcon} alt="" />
          </div>

          <div className='item'>
            <img src={infinityEdgeIcon} alt="" />
          </div>

          <div className='item'>
            <img src={infinityEdgeIcon} alt="" />
          </div>
          
          <div className='item'>
            <img src={infinityEdgeIcon} alt="" />
          </div>
            
          <div className='item'>
            <img src={infinityEdgeIcon} alt="" />
          </div>
        </div>
      </div> 
    </div>
  );
}

export default GameReport;
