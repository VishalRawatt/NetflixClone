import React from 'react'
import "./topbar.css"
import { Notifications, LanguageIcon, SettingsIcon,  } from '@mui/icons-material';

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className="topbarWrapper">
        <div className="topLeft">
            <span className='logo'>Admin</span>
        </div>
        <div className="topRight">
            <div className="topbarIconContainer">
                <Notifications/>
                <span className="topIconBag">1</span>
            </div>
            <div className="topbarIconContainer">
                <Notifications/>
                <span className="topIconBag">2</span>
            </div>
            <div className="topbarIconContainer">
                <Notifications/>
                <span className="topIconBag">3</span>
            </div>
            
        </div>
      </div>
    </div>
  )
}
