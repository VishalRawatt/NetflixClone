import Chart from '../charts/Chart';
import Featuredinfo from '../featuredinfo/Featuredinfo';
import './home.css' ;

export default function Home() {
  return (
    <div className='home'>
      <Featuredinfo/>
      <Chart/>
    </div>
  )
}
