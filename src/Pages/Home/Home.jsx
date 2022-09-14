import React from 'react'
import Chart from '../../component/chart/Chart'
import Featured from '../../component/featured/Featured'
import WidgetLg from '../../component/widgetLg/WidgetLg'
import WidgetSm from '../../component/widgetSm/WidgetSm'
import { chartData } from '../../dummyData'

import './home.css'

const Home = () => {
  return (
    <div className="home">
     <Featured />
     <Chart data={chartData} title="User Analytics" dataKey="Active User"/>
     <div className='homeWidget'>
      <WidgetSm />
      <WidgetLg />
     </div>
    </div>
  )
}

export default Home