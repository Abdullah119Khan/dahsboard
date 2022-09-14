import { Publish } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import Chart from '../../component/chart/Chart'
import { productData } from '../../dummyData'

import './product.css'

const Product = () => {
  return (
    <div className="product">
      <div className="productTitleContainer">
       <h1 className="productTitle">Edit</h1>
       <Link to="/newProduct">
        <button className="productCreateButton">Create</button>
       </Link>
      </div>
      <div className="productTop">
       <div className="productTopLeft">
        <Chart data={productData} dataKey="Sales" title="Sales Performance"/>
       </div>
       <div className="productTopRight">
        <div className="productInfoTop">
         <img className="productTopImg" src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?cs=srgb&dl=pexels-sandeep-singh-7156886.jpg&fm=jpg" alt="product"/>
         <span className="productTopName">Apple Airpods</span>
        </div>
         <div className="productInfoBottom">
          <div className="productInfoItem">
           <span className="productInfoKey">ID :</span>
           <span className="productInfoValue">123</span>
          </div>
          <div className="productInfoItem">
           <span className="productInfoKey">Sales :</span>
           <span className="productInfoValue">513</span>
          </div>
          <div className="productInfoItem">
           <span className="productInfoKey">Active :</span>
           <span className="productInfoValue">Yes</span>
          </div>
          <div className="productInfoItem">
           <span className="productInfoKey">In Stack :</span>
           <span className="productInfoValue">No</span>
          </div>
         </div>
       </div>
      </div>
      <div className="productBottom">
       <form className="productBottomForm">
        <div className="productFormLeft">
         <label>Product Name</label>
         <input type="text" placeholder="Apple Airpods"/>
         <label>In Stock</label>
         <select name="inStock" id="idStock">
          <option value="yes">Yes</option>
          <option value="no">No</option>
         </select>
         <label>Active</label>
         <select name="active" id="active">
          <option value="yes">Yes</option>
          <option value="no">No</option>
         </select>
        </div>
        <div className="productFormRight">
         <div className="productUpload">
          <img className="productUploadPic" src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?cs=srgb&dl=pexels-sandeep-singh-7156886.jpg&fm=jpg" alt="product"/>
          <label for="file">
           <Publish style={{ cursor: 'pointer' }}/>
          </label>
          <input type="file" id="file" style={{ display: 'none'}}/>
         </div>
         <button className="productFormButton">Update</button>
        </div>
       </form>
      </div>
    </div>
  )
}

export default Product
