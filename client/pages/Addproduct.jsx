import { useMutation, useQuery } from '@apollo/client'
import React, { useState } from 'react'
import styles from '../styles/Addproduct.module.css'
import { CREATE_PRODUCT } from './Graphql/Mutation'
import { useRouter } from 'next/router'
import { GET_ALL_CATEGORY } from './Graphql/Queries'
import { GET_ALL_BRAND } from './Graphql/Queries'





const Modal = () => {

  // const handleImage = (e) => {
  //   const file = e.target.files[0]
  //   console.log(file)
  // }

  const [productname, setproductname] = useState("")
  const [price, setprice] = useState("")
  const [quantity, setquantity] = useState("")
  const [category, setcategory] = useState("")
  const [brand, setbrand] = useState("")
  const [createProduct, { error }] = useMutation(CREATE_PRODUCT);
  const { data } = useQuery(GET_ALL_CATEGORY)
  const data1 = useQuery(GET_ALL_BRAND)
  console.log(data1.data)


  console.log(data)

  return (
    <>
      <div className={styles.modalcontainer}>

        <div className={styles.modalwrapper} >

          <table>
            <tbody>
              <tr ><td className={styles.tr}><h2>Add Product</h2></td></tr>
              <tr >
                <td className={styles.tr}>Name of the product   :</td>
                <td className={styles.tr}><input type='text' placeholder='productname' onChange={(event) => {
                  setproductname(event.target.value)
                }}></input></td>
              </tr>
              
              <tr>
                <td className={styles.tr}>Price of the product   :</td>
                <td><input required type='text' placeholder='price' onChange={(event) => {
                  setprice(event.target.value)
                }}></input></td>
              </tr>
    
              <tr><td className={styles.tr}>QUantity  :</td>
                <td className={styles.tr}><input required="number" type='number' placeholder='quantity' onChange={(event) => {
                  setquantity(event.target.value)
                }}></input></td></tr>
           
              <tr><td className={styles.tr}>Category   :</td>
                <td><select style={{ width: 185 }} type='text' placeholder='category' onChange={(event) => {
                  setcategory(event.target.value)
                }}>
                  <option>select</option>
                  {data && (data.getAllCategory.map((user) => {
                    return (<option style={{ width: 100 }}>{user.categoryname}</option>)
                  }))}</select></td></tr>
             
              {/* <tr><td>Brand  :</td>
              <td><input type='text' placeholder='Brand' onChange={(event) => {
                setbrand(event.target.value)
              }}></input></td></tr> */}


                

              <tr><td className={styles.tr}>Brand   :</td>
                <td><select style={{ width: 185 }} type='text' placeholder='category' onChange={(event) => {
                  setbrand(event.target.value)
                }}>
                  <option>select</option>
                  {data1.data && (data1.data.getAllBrand.map((user1) => {

                    return (<option style={{ width: 100 }}>{user1.brandname}</option>)
                  }))}</select></td></tr>

              
              {/* <tr>
              <td>image    :<input type="file" onChange={handleImage}></input></td>
            </tr> */}
             
              <tr><td><a href='/Product'><button type="submit" className="btn btn-outline-primary" style={{ width: 100 }} onClick={() => {
                createProduct({
                  variables: { productname: productname, price: price, quantity: quantity, category: category, brand: brand }
                })
              }}>create</button></a></td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>

    </>
  )
}

export default Modal