import React from 'react'
import { Line, LineChart, Tooltip, ResponsiveContainer, XAxis, CartesianGrid } from 'recharts';

import './chart.css'

const Chart = ({ data, title, dataKey}) => {

  return (
    <div className='chart'>
     <h3 className='chartTitle'>{title}</h3>
     <ResponsiveContainer width="100%" aspect={4 / 1}>
      <LineChart data={data}>
       <XAxis dataKey="name" stroke='#5550bd'/>
       <Line type="montone" dataKey={dataKey} stroke='#5550bd'/>
       <Tooltip />
       <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>
      </LineChart>
     </ResponsiveContainer>
    </div>
  )
}

export default Chart