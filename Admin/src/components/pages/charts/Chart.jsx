import './chart.css' ;
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart() {
    const data = [
        {
          name: 'Jan',
          "Active User": 4000
        },
        {
          name: 'Feb',
          "Active User": 5000
        },
        {
          name: 'Mar',
          "Active User": 5500
        },
        {
          name: 'Apr',
          "Active User": 3000
        },
        {
          name: 'May',
          "Active User": 3120
        },
        {
          name: 'Jun',
          "Active User": 4500
        },
        {
          name: 'Jul',
          "Active User": 1500
        },
        {
          name: 'Aug',
          "Active User": 3200
        },
        {
          name: 'Sep',
          "Active User": 1000
        },
        {
          name: 'Oct',
          "Active User": 952
        },
        {
          name: 'Nov',
          "Active User": 2500
        },
        {
          name: 'Dec',
          "Active User": 1000
        },
      ];
  return (
    <div className='chart'>
      <h3 className="chartTitle">User Analytics</h3>
      <ResponsiveContainer width="100%" aspect={4/1}>
        <LineChart data ={data}>
            <XAxis dataKey="name" stroke='#5550bd'/>
            <Line type="monotone" dataKey="Active User" />
            <Tooltip/>
            <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>
             
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
