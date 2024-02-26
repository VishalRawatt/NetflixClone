import { Visibility } from '@mui/icons-material';
import './widgetsm.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function WidgetSm() {
    const [newUsers, setnewUsers] = useState([]);
    useEffect(() => {
        const getNewUsers = async () => {
            try {
                const res = await axios.get("/users?new=true", {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OTk3N2Y0Njk3MzZmYjE1ZjM0MGVhZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwODQ1MjAwNiwiZXhwIjoxNzExMDQ0MDA2fQ.h-CG5A457YnjV9CJ_mV6e32bkhX82V_pGwMKJHQBWmc"
                    }
                });
                setnewUsers(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getNewUsers();
    },[])
    return (
        <div className='widgetSm'>
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                { newUsers && newUsers.length > 0 ? (
                    newUsers.map(user=>(
                <li className="widgetSmListItem" key={user._id}>
                    <img 
                    src={user.profilePic || "https://th.bing.com/th/id/OIP.7DASfuq_r3rOiq4AAs75igAAAA?w=161&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" } 
                    alt="imageSmall" 
                    className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">{user.username}</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className />
                        Display
                    </button>
                </li>
                ))
                ):(
                    <div>No users</div>
                )
                }
            </ul>
        </div>
    )
}
