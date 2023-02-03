import React from 'react'
import './TopChart.css'
import Card from '../Card/Card';
import app1 from '../../assets/app1.png'

const TopChart = () => {
  return (
    <div className="topChart">
       <div className="topChart_title">
        <h1>Top Charts</h1>
       </div>
       <div className="topChart_card">
       <hr className="line" />
        <div className="card_row1">
           <Card img={app1} title="Winzo" desc="Winzo is Fraud app"/>
           <Card img={app1} title="Winzo" desc="Winzo is Fraud app"/>
        </div>
        <div className="card_row2">
           <Card img={app1} title="Winzo" desc="Winzo is Fraud app"/>
           <Card img={app1} title="Winzo" desc="Winzo is Fraud app"/>
        </div>
       </div>
    </div>
  )
}

export default TopChart;