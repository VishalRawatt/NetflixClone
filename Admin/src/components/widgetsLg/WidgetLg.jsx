import './widgetlg.css' ;

export default function WidgetLg() {
    const Button = ({type}) =>{
        return <button className= {'widgetLgButton ' + type }>{type}</button>
    }
  return (
    <div className='widgetLg'>
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tbody>
        <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Stats</th>
        </tr>
        <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <img src="https://imgs.search.brave.com/Jc0SdycBTtvv3m4vt93BKJP6ZOYlxh1S3q31k6Eb53Y/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NDQwMDUzMTMtOTRk/ZGYwMjg2ZGYyP3E9/ODAmdz0xMDAwJmF1/dG89Zm9ybWF0JmZp/dD1jcm9wJml4bGli/PXJiLTQuMC4zJml4/aWQ9TTN3eE1qQTNm/REI4TUh4elpXRnlZ/Mmg4Tkh4OGNHVnlj/Mjl1ZkdWdWZEQjhm/REI4Zkh3dw.jpeg" alt="Its an img" className="widgetLgImg" />
                <span className="widgetLgName">Suman Sharma</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$221.43</td>
            <td className="widgetLgStatus"><Button type="Approved"/></td>
        </tr>
        <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <img src="https://imgs.search.brave.com/Jc0SdycBTtvv3m4vt93BKJP6ZOYlxh1S3q31k6Eb53Y/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NDQwMDUzMTMtOTRk/ZGYwMjg2ZGYyP3E9/ODAmdz0xMDAwJmF1/dG89Zm9ybWF0JmZp/dD1jcm9wJml4bGli/PXJiLTQuMC4zJml4/aWQ9TTN3eE1qQTNm/REI4TUh4elpXRnlZ/Mmg4Tkh4OGNHVnlj/Mjl1ZkdWdWZEQjhm/REI4Zkh3dw.jpeg" alt="Its an img" className="widgetLgImg" />
                <span className="widgetLgName">Suman Sharma</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$221.43</td>
            <td className="widgetLgStatus"><Button type="Pending"/></td>
        </tr>
        <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <img src="https://imgs.search.brave.com/Jc0SdycBTtvv3m4vt93BKJP6ZOYlxh1S3q31k6Eb53Y/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NDQwMDUzMTMtOTRk/ZGYwMjg2ZGYyP3E9/ODAmdz0xMDAwJmF1/dG89Zm9ybWF0JmZp/dD1jcm9wJml4bGli/PXJiLTQuMC4zJml4/aWQ9TTN3eE1qQTNm/REI4TUh4elpXRnlZ/Mmg4Tkh4OGNHVnlj/Mjl1ZkdWdWZEQjhm/REI4Zkh3dw.jpeg" alt="Its an img" className="widgetLgImg" />
                <span className="widgetLgName">Suman Sharma</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$221.43</td>
            <td className="widgetLgStatus"><Button type="Approved"/></td>
        </tr>
        <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <img src="https://imgs.search.brave.com/Jc0SdycBTtvv3m4vt93BKJP6ZOYlxh1S3q31k6Eb53Y/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NDQwMDUzMTMtOTRk/ZGYwMjg2ZGYyP3E9/ODAmdz0xMDAwJmF1/dG89Zm9ybWF0JmZp/dD1jcm9wJml4bGli/PXJiLTQuMC4zJml4/aWQ9TTN3eE1qQTNm/REI4TUh4elpXRnlZ/Mmg4Tkh4OGNHVnlj/Mjl1ZkdWdWZEQjhm/REI4Zkh3dw.jpeg" alt="Its an img" className="widgetLgImg" />
                <span className="widgetLgName">Suman Sharma</span>
            </td>
            <td className="widgetLgDate">2 Jun 2021</td>
            <td className="widgetLgAmount">$221.43</td>
            <td className="widgetLgStatus"><Button type="Declined"/></td>
        </tr>
        </tbody> 
      </table>
    </div>
  )
}
