import { Language, Notifications, Settings } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'

import './topbar.css'
import '../../App.css'

const Topbar = () => {
  return (
    <div className='topbar'>
     <div className='topbarWrapper'>
      <div className='topbarLeft'>
      <Link to="/" className="link">
       <h3 className='topbarTitle'>MaLak KhAn</h3>
       </Link>
      </div>
      <div className="topbarRight">
       <div className='topbarContainer'>
        <Notifications />
        <span className='topbarBadge'>2</span>
       </div>
       <div className='topbarContainer'>
        <Language />
        <span className='topbarBadge'>2</span>
       </div>
       <div className='topbarContainer'>
        <Settings />
       </div>
       <img className="topbarProfile" src="https://images.pexels.com/photos/12720385/pexels-photo-12720385.jpeg?cs=srgb&dl=pexels-lauren-hogue-12720385.jpg&fm=jpg" alt="profile"/>
      </div>
     </div>
    </div>
  )
}

export default Topbar
