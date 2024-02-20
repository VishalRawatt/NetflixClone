import Chart from '../charts/Chart';
import Featuredinfo from '../featuredinfo/Featuredinfo';
import './home.css' ;
import WidgetLg from '../../widgetsLg/WidgetLg.jsx';
import WidgetSm from '../../widgetsSm/WidgetSm.jsx';
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

export default function Home() {
  const Months = useMemo(()=>["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],[])
  const [userStats, setuserStats] = useState([]) ;

  useEffect(() => {
    const getStats = async() =>{
      try{
      const res= await axios.get("/users/stats",{
        headers:{
          token:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OTk3N2Y0Njk3MzZmYjE1ZjM0MGVhZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwODQ0MzI3NCwiZXhwIjoxNzExMDM1Mjc0fQ.qDzh_ezs09Tec8rhgznnf3DieJug9VV19x09hxhWd-g"
        },
        }) ;
        const stateList = res.data.sort(function(a, b) {
          return a._id - b._id ;
        }) ;
        stateList.map((item) =>
          setuserStats(prev=>[
            ...prev,
            {name:Months[item._id - 1], "New User": item.total},
        ])
        );
    }catch(e){
      console.log(e) ;
    }
    };
    getStats() ;
  },[Months]);
  return (
    <div className='home'>
      <Featuredinfo/>
      <Chart data={userStats} title="User Analytics" grid dataKey="New User" />
      <div className="homeWidgets">~
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  )
}
