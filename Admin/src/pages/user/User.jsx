import { CalendarMonth,LocationOn, Mail, PermIdentity, Phone, PublishOutlined } from '@mui/icons-material';
import './user.css' ;
import { Link } from 'react-router-dom';

export default function User() {
  return (
    <div className='user'>
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
        <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
        <div className="userShowTop">
            <img src="https://imgs.search.brave.com/vRrTws13r9jDY4EkNZTe6uV6WhoBaE5Y2Q6QOUE6OFc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE0/OTQ3OTAxMDgzNzct/YmU5YzI5YjI5MzMw/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TW54OGRY/TmxjaVV5TUhCeWIy/WnBiR1Y4Wlc1OE1I/eDhNSHg4ZkRBPQ.jpeg" alt="" className="userShowImg" />
            <div className="userShowTopTitle">
                <span className="userShowUsername">Riya Singh</span>
                <span className="userShowUserTitle">Software Engineer</span>
            </div>
        </div>
        <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
            <PermIdentity className='userShowIcon'/>
            <span className="userShowInfoTitle">riya232</span>
            </div>
            <div className="userShowInfo">
            <CalendarMonth className='userShowIcon'/>
            <span className="userShowInfoTitle">10.12.2002</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
            <Phone className='userShowIcon'/>
            <span className="userShowInfoTitle">+91 9425188460</span>
            </div>
            <div className="userShowInfo">
            <Mail className='userShowIcon'/>
            <span className="userShowInfoTitle">riyasingh231@gmail.com</span>
            </div>
            <div className="userShowInfo">
            <LocationOn className='userShowIcon'/>
            <span className="userShowInfoTitle">Delhi | India</span>
            </div>
        </div>
        </div>
        <div className="userUpdate">
            <span className="userUpdateTitle">Edit</span>
            <form className="userUpdateForm">
                <div className="userUpdateLeft">
                    <div className="userUpdateItem">
                        <label>Username</label>
                        <input type="text" placeholder="riya232" className='userUpdateInput' />
                    </div>
                    <div className="userUpdateItem">
                        <label>Full Name</label>
                        <input type="text" placeholder="Riya Singh" className='userUpdateInput' />
                    </div>
                    <div className="userUpdateItem">
                        <label>Email</label>
                        <input type="text" placeholder="riya232@gmail.com" className='userUpdateInput' />
                    </div>
                    <div className="userUpdateItem">
                        <label>Phone</label>
                        <input type="text" placeholder="+91 9515132151" className='userUpdateInput' />
                    </div>
                    <div className="userUpdateItem">
                        <label>Address</label>
                        <input type="text" placeholder="Delhi | India" className='userUpdateInput' />
                    </div>
                </div>
                <div className="userUpdateRight">
                    <div className="userUpdateUpload">
                        <img src="https://imgs.search.brave.com/vRrTws13r9jDY4EkNZTe6uV6WhoBaE5Y2Q6QOUE6OFc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE0/OTQ3OTAxMDgzNzct/YmU5YzI5YjI5MzMw/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TW54OGRY/TmxjaVV5TUhCeWIy/WnBiR1Y4Wlc1OE1I/eDhNSHg4ZkRBPQ.jpeg" alt="" className="userUpdateImg" />
                        <label htmlFor="file"><PublishOutlined className='userUpdateIcon'/></label>
                        <input type="file" id="file" style={{display: "none"}}/>
                    </div>
                    <button className="userUpdateButton">Update</button>
                </div>
            </form>
        </div>
      </div>
    </div> 
  )
}
