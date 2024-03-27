import Chart from '../../components/charts/Chart';
import Featuredinfo from '../../components/featuredinfo/Featuredinfo';
import './home.css' ;
import WidgetLg from '../../components/widgetsLg/WidgetLg';
import WidgetSm from '../../components/widgetsSm/WidgetSm.jsx';
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
          "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
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
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  )
}
