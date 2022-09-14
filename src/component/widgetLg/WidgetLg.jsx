import React from 'react'
import './widget.css'

const WidgetLg = () => {

  const Button = ({type}) => {
    return <button className={`widgetLgButton ${type}`}>{type}</button>
  }
  return (
    <div className='widgetLg'>
     <span className='widgetLgTitle'>Latest Transactions</span>
     <table className='widgetLgTable'>
      <tr className='widgetLgTr'>
       <th className='widgetLgTh'>Customer</th>
       <th className='widgetLgTh'>Date</th>
       <th className='widgetLgTh'>Amount</th>
       <th className='widgetLgTh'>Status</th>
      </tr>
      <tr className='widgetLgTr'>
       <td className='widgetLgUser'>
        <img className="widgetLgProfile" src="https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?cs=srgb&dl=pexels-tu%E1%BA%A5n-ki%E1%BB%87t-jr-1382734.jpg&fm=jpg" alt="profile"/>
        <span className="widgetLgUsername">AB MaLak KhAn</span>
       </td>
       <td className='widgetLgDate'>02 Jul 2022</td>
       <td className='widgetLgAmount'>$2,417</td>
       <td className='widgetLgStatus'>
       <Button type="Approved"/>
       </td>
      </tr>
      <tr className='widgetLgTr'>
       <td className='widgetLgUser'>
        <img className="widgetLgProfile" src="https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?cs=srgb&dl=pexels-tu%E1%BA%A5n-ki%E1%BB%87t-jr-1382734.jpg&fm=jpg" alt="profile"/>
        <span className="widgetLgUsername">AB MaLak KhAn</span>
       </td>
       <td className='widgetLgDate'>02 Jul 2022</td>
       <td className='widgetLgAmount'>$2,417</td>
       <td className='widgetLgStatus'>
       <Button type="Declined"/>
       </td>
      </tr>
      <tr className='widgetLgTr'>
       <td className='widgetLgUser'>
        <img className="widgetLgProfile" src="https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?cs=srgb&dl=pexels-tu%E1%BA%A5n-ki%E1%BB%87t-jr-1382734.jpg&fm=jpg" alt="profile"/>
        <span className="widgetLgUsername">AB MaLak KhAn</span>
       </td>
       <td className='widgetLgDate'>02 Jul 2022</td>
       <td className='widgetLgAmount'>$2,417</td>
       <td className='widgetLgStatus'>
       <Button type="Pending"/>
       </td>
      </tr>
      <tr className='widgetLgTr'>
       <td className='widgetLgUser'>
        <img className="widgetLgProfile" src="https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?cs=srgb&dl=pexels-tu%E1%BA%A5n-ki%E1%BB%87t-jr-1382734.jpg&fm=jpg" alt="profile"/>
        <span className="widgetLgUsername">AB MaLak KhAn</span>
       </td>
       <td className='widgetLgDate'>02 Jul 2022</td>
       <td className='widgetLgAmount'>$2,417</td>
       <td className='widgetLgStatus'>
       <Button type="Approved"/>
       </td>
      </tr>
     </table>
    </div>
  )
}

export default WidgetLg