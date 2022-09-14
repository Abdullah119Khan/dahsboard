import React, { useState } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import { DeleteOutline } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { productRows } from '../../dummyData'

import './productList.css'

const ProductList = () => {
  const [data, setData] = useState(productRows)

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }
 
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "product", headerName: "Product", width: 200, renderCell: (params) => {
      return (
        <div className='userProfile'>
         <img className='profile' src={params.row.img} alt="profile"/>
         {params.row.name}
        </div>
      )
    } },
    { field: "stock", headerName: "Stock", width: 170 },
    { field: "status", headerName: "Status", width: 150 },
    { field: "price", headerName: "Price", width: 150 },
    { field: "action", headerName: "Action", width: 150, renderCell: (params) => {
      return (
        <div className='actions'>
        <Link to={"/product/" + params.row.id}>
         <button className='editButton'>Edit</button>
         </Link>
         <DeleteOutline className="deleteButton" onClick={() => handleDelete(params.row.id)}/>
        </div>
      )
    }}
    
  ]


  return (
    <div className="productList">
     <DataGrid disableSelectionOnClick rows={data} columns={columns} pageSize={8} checkboxSelection />
    </div>
  )
}

export default ProductList
