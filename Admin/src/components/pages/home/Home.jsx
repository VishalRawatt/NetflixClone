import Chart from '../charts/Chart';
import Featuredinfo from '../featuredinfo/Featuredinfo';
import './home.css' ;
import {userData} from '../../../dummydata.js' ;
import WidgetLg from '../../widgetsLg/WidgetLg.jsx';
import WidgetSm from '../../widgetsSm/WidgetSm.jsx';

export default function Home() {
  return (
    <div className='home'>
      <Featuredinfo/>
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  )
}
