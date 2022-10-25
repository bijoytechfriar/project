import React, { useState } from 'react'
import styles from '..//styles/product.module.css'
import { GET_ALL_PRODUCTS } from './Graphql/Queries'
import { GET_ALL_CATEGORY } from './Graphql/Queries'
import { GET_ALL_BRAND } from './Graphql/Queries'
import { useQuery, useMutation } from '@apollo/client'
import { DELETE_USER, UPDATE_PRODUCT } from './Graphql/Mutation'
import { useRouter } from 'next/router'
import Category from './Category'





const Addproduct = () => {

  // data fetching from products
  const { data } = useQuery(GET_ALL_PRODUCTS);

  // data fetching from category
  const data1 = useQuery(GET_ALL_CATEGORY)
  console.log(data1)

  // data fetching from brands
  const data2 = useQuery(GET_ALL_BRAND)
  console.log(data2)

  // mutation query for delete
  const [deleteUser, { error }] = useMutation(DELETE_USER)


  var [id, setid] = useState("")
  var [productname, setproductname] = useState("")
  var [price, setprice] = useState("")
  var [quantity, setquantity] = useState("")
  var [category, setcategory] = useState("")
  var [ brand, setbrand] = useState("")

  const [Updateproduct] = useMutation(UPDATE_PRODUCT)

  const [user, setUser] = useState([])



  if (!id) { id = user.id };

  if (!productname) { productname = user.productname }

  if (!price) { price = user.price }

  if (!quantity) { quantity = user.quantity }

  if (!category) { category = user.category }

  if (!brand) { brand = user.brand }



  return (
    <div>
      <div className={styles.container}>

        <div className={styles.buttonwrapper}>


          <a href='/Addproduct'><button>Add Product</button></a>
          <a href='/Category'><button>Categories</button></a>
          <a href='/Brand'><button>Brands</button></a>
        </div>



        <div className={styles.wrapper}>
          <h1>PRODUCTS</h1><br />
          <table className={styles.table}>
            <tbody className={styles.tr1}><tr>
              <th className={styles.td}>Id</th>
              <th className={styles.t1}>Product Name</th>
              <th className={styles.t1}>Price</th>
              <th className={styles.t1}>Quantity</th>
              <th className={styles.t1} >Category</th>
              <th className={styles.t1} >Brand</th>
              <th className={styles.t2}>Delete<br></br>product</th>
              <th className={styles.t2}>Update<br></br>product</th>
            </tr>


            </tbody>
          </table>
          <div>{data && (data.getAllProducts.map((user) => {
            return (
              <table className={styles.table}>

                <tbody>
                  <tr className={styles.tr}>
                    <td className={styles.td}>{user.id} </td>
                    <td className={styles.td1}>{user.productname}</td>
                    <td className={styles.td1}>{user.price}</td>
                    <td className={styles.td1}>{user.quantity}</td>
                    <td className={styles.td1}>{user.category}</td>
                    <td className={styles.td1}>{user.brand}</td>
                    <td className={styles.td2}> <a href='/Product' ><button onClick={() => { deleteUser({ variables: { id: user.id } }); }}>DELETE</button></a></td>
                    <td className={styles.td2}> <a >

                      <button style={{ width: 60 }} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => { setUser(user) }}>
                        Update
                      </button>

                    </a></td>


                  </tr>


                </tbody>

              </table>

            )
          }))}</div>



        </div>
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className={styles.input} class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Update Product </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div className={styles.modalcontainer}>

                  <div className={styles.modalwrapper} >

                    
                    <table><tbody>
                      <tr classname={styles.tr4}><td><label>ProductNAme</label></td><td>&nbsp;&nbsp;&nbsp;&nbsp;<input className={styles.input} type="text" defaultValue={user.productname} onChange={(event) => { setproductname(event.target.value) }} /></td></tr><br />

                      <tr><td><label>Price</label></td><td>&nbsp;&nbsp;&nbsp;&nbsp;<input className={styles.input} type="text" defaultValue={user.price} onChange={(event) => { setprice(event.target.value) }} /></td></tr><br />
                      <tr><td><label>Quantity:</label></td><td>&nbsp;&nbsp;&nbsp;&nbsp;<input className={styles.input} type="text" defaultValue={user.quantity} onChange={(event) => { setquantity(event.target.value) }} /></td></tr><br />
                      <tr><td>
                        <label>Category:</label></td><td>&nbsp;&nbsp;&nbsp;&nbsp;<select className={styles.input} style={{ width: 185 }} type='text' placeholder='category' onChange={(event) => {
                          setcategory(event.target.value)
                        }}>
                          <option style={{ width: 100 }} hidden="hidden">{user.category}</option>
                          {data1.data && (data1.data.getAllCategory.map((user) => {
                            
                            return (<option style={{ width: 100 }} >{user.categoryname}</option>)
                          }))}</select></td></tr><br />

                      <tr><td>
                        <label>Brand:</label></td><td>&nbsp;&nbsp;&nbsp;&nbsp;<select className={styles.input} style={{ width: 185 }} type='text' placeholder='category' onChange={(event) => {
                          setbrand(event.target.value)
                        }}>
                          <option style={{ width: 100 }} hidden="hidden">{user.brand}</option>
                          {data2.data && (data2.data.getAllBrand.map((user) => {
                            return (<option style={{ width: 100 }}  defaultValue={user.brandname}>{user.brandname}</option>)
                          }))}</select></td></tr><br />

                    </tbody>
                    </table>
                    <a href='/Product'><button className={styles.inbut} onClick={() => {
                      Updateproduct({
                        variables: {
                          id: id,
                          newproductname: productname,
                          newprice: price,
                          newquantity: quantity,
                          newcategory: category,
                          newbrand:brand,

                        }
                      })
                    }}>UPDATE</button></a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Addproduct





