 import React from 'react'
import { Card } from '../Layouts/cards';
import PropTypes from 'prop-types'
import './style.css'
 
 export const CardStats = ({data}) => {
     return (
         <div className="app__cardsStats">
             <Card  title='Coronavirus cases' total={data.cases} increment={data.todayCases} icon={'fas fa-viruses'} icon2={'fas fa-angle-double-up'}  color={'redcolor'}/>
             <Card  title='Deaths' total={data.deaths} increment={data.todayDeaths} icon={'fas fa-skull-crossbones'} icon2={'fas fa-angle-double-up'}  color={'redcolor'} />
             <Card title='Recovered' total={data.recovered} increment={data.todayRecovered} icon={'fas fa-ambulance'} icon2={'fas fa-angle-double-up'}  color={'greencolor'}/>
         </div>
     )
 }
 
 CardStats.propTypes = {
     data: PropTypes.object.isRequired
 }