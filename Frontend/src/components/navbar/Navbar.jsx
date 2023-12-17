import React, { useState } from 'react'
import './navbar.scss';
import { ArrowDropDownCircleOutlined, Notifications, Search } from '@mui/icons-material';
import { Avatar } from '@mui/material';

const Navbar = () => {
    const [isScolled, setisScolled] = useState(false) ;
    window.onscroll = ()=>{
        setisScolled(window.pageYOffset === 0 ? false : true);
        return ()=> (window.onscroll = null ) ;
    };
    return (
        <div className={isScolled ? "navbar scrolled":"navbar"}>
            <div className="container">
                <div className="left">
                    <img src='https://imgs.search.brave.com/iMK0bpQOHFE9qAS6J2UI9mfJ97x8nhrepANtIF_PSds/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODBiNTdmY2Q5OTk2/ZTI0YmM0M2M1Mjku/cG5n' alt='logo' />
                    <span>Home</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search  className='icons'/>
                    <span>Kids</span>
                    <Notifications  className='icons'/>
                    <Avatar  className='icons'src='https://th.bing.com/th/id/OIP.Z7JiQaFe5xBABL7QsL8kSAHaE8?rs=1&pid=ImgDetMain' style={{height:"30px", width:"30px",cursor:"pointer"}}/>
                    <div className="profile">
                    <ArrowDropDownCircleOutlined className='icons'/>
                    <div className="options">
                        <span>Settings</span>
                        <span>LogOut</span>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar