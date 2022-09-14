import React, { useState } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import { DeleteOutline } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { userRows } from '../../dummyData'

import './users.css'

const Users = () => {
  const [data, setData] = useState(userRows)

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "username", headerName: "User Name", width: 200, renderCell: (params) => {
      return (
        <div className='userProfile'>
         <img className='profile' src={params.row.avatar} alt="profile"/>
         {params.row.username}
        </div>
      )
    } },
    { field: "email", headerName: "Email", width: 170 },
    { field: "status", headerName: "Status", width: 150 },
    { field: "transaction", headerName: "Transaction", width: 150 },
    { field: "action", headerName: "Action", width: 150, renderCell: (params) => {
      return (
        <div className='actions'>
        <Link to={"/user/" + params.row.id}>
         <button className='editButton'>Edit</button>
         </Link>
         <DeleteOutline className="deleteButton" onClick={() => handleDelete(params.row.id)}/>
        </div>
      )
    }}
    
  ]

  
  return (
    <div className="user">
     <DataGrid disableSelectionOnClick rows={data} columns={columns} pageSize={8} checkboxSelection />
    </div>
  )
}

export default Users