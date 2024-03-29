import { ArrowDownward, ArrowUpward } from '@mui/icons-material';
import './featuredinfo.css' ;

export default function Featuredinfo() {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$2,415</span>
            <span className="featuredMoneyRate">-11.4 <ArrowDownward className='featuredIcon negative'/></span>
        </div>
        <span className="featuredSub">Compaired to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$3,215</span>
            <span className="featuredMoneyRate">-1.4 <ArrowDownward className='featuredIcon negative'/></span>
        </div>
        <span className="featuredSub">Compaired to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
            <span className="featuredMoney">$12,415</span>
            <span className="featuredMoneyRate">+12.4 <ArrowUpward className='featuredIcon'/></span>
        </div>
        <span className="featuredSub">Compaired to last month</span>
      </div>
    </div>
  )
}
