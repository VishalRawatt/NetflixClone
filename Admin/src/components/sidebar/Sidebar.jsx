import { AccountCircle, Category, CurrencyRupeeOutlined, Equalizer, FeedbackOutlined, MailOutline, ManageAccounts, Message, Report,LineStyleOutlined, TimelineOutlined, TrendingUpOutlined } from '@mui/icons-material';
import './sidebar.css';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className='link'>
            <li className="sidebarListItem active">
              <LineStyleOutlined className='sidebarIcon'/> 
              Home
            </li>
            </Link>
            <li className="sidebarListItem">
              <TimelineOutlined className='sidebarIcon'/> 
              Analytics
            </li>
            <li className="sidebarListItem">
            <TrendingUpOutlined className='sidebarIcon'/> 
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className='link'>
            <li className="sidebarListItem">
              <AccountCircle className='sidebarIcon'/> 
              User
            </li>
            </Link>
            <Link to="/product" className='link'>
            <li className="sidebarListItem">
              <Category className='sidebarIcon'/> 
              Products
            </li>
            </Link>
            <li className="sidebarListItem">
              <CurrencyRupeeOutlined className='sidebarIcon'/> 
              Transactions
            </li>
            <li className="sidebarListItem">
              <Equalizer className='sidebarIcon'/> 
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className='sidebarIcon'/>
              Mail
            </li>
            <li className="sidebarListItem">
              <FeedbackOutlined  className='sidebarIcon'/>
              Feedback
            </li>
            <li className="sidebarListItem">
              <Message className='sidebarIcon'/>
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <ManageAccounts className='sidebarIcon'/>
              Manage
            </li>
            <li className="sidebarListItem">
              <TimelineOutlined className='sidebarIcon'/>
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className='sidebarIcon'/>
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
