import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import React from 'react'

import './featured.css';

const Featured = () => {
  return (
    <div className='featured'>
      <div className='featuredItem'>
        <span className='featuredTitle'>Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,217</span>
          <span className="featuredMoneyRate">
            -11.04 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compare to last month</span>
      </div>
      <div className='featuredItem'>
        <span className='featuredTitle'>Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,217</span>
          <span className="featuredMoneyRate">
            -11.04 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compare to last month</span>
      </div>
      <div className='featuredItem'>
        <span className='featuredTitle'>Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,217</span>
          <span className="featuredMoneyRate">
            -11.04 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compare to last month</span>
      </div>
    </div>
  )
}

export default Featured