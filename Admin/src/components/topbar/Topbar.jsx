import React from 'react'
import "./topbar.css"
import { Notifications,  } from '@mui/icons-material';

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
            <img src="https://imgs.search.brave.com/Id5fz4T8jtqRaA1a9UrVJWgK6IVpqlHJV5JKKsPtI58/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by90ZWFtLWRpdmVy/c2UtcGVvcGxlLWRv/aW5nLWdyb3VwLXBo/b3RvXzUzODc2LTEz/ODQyMy5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw" alt="imageofpeople" className="topAvatar" />
        </div>
      </div>
    </div>
  )
}
