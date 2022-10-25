import React from 'react'
import styles from "../styles/Category.module.css"
import Link from "next/link"
import { useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { CREATE_BRAND, DELETE_BRAND, DELETE_CATEGORY } from './Graphql/Mutation'
import { GET_ALL_BRAND } from './Graphql/Queries'

function Brand() {
  
// 
  const {data} =useQuery(GET_ALL_BRAND)
  const [brandname,setbrandname]=useState("")
  const [branddes,setbranddes]=useState("")
  const [createBrand] =useMutation(CREATE_BRAND)
  const [deleteBrand]=useMutation(DELETE_BRAND)

  return (
    <div className={styles.container}>


<button  className={styles.abc} type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
<h6>Add Brand</h6>
</button>

<div  class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div style={{color:'white'}} class="modal-dialog">
    <div style={{background:'black'}} class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Brand</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body"><br/>
         <label>Add Your Brand Name  :</label>  
        <input placeholder='Brand Name' onChange={(event)=>{setbrandname(event.target.value)}}></input><br/><br/><br/>
        <label>Add About Your Company :</label>
        <textarea placeholder='description' onChange={(event) =>{setbranddes(event.target.value)}}></textarea>
      
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <a href="/Brand"><button type="button" class="btn btn-Danger" onClick={() =>{
         createBrand({
          variables:{brandname:brandname,branddes:branddes}
         })
        }}>SUBMIT</button></a>
      </div>
    </div>
  </div>
</div>
    <br/><br/>
      <div className={styles.wrapper}>
    <h1>CATEGORIES</h1><br />
    <table className={styles.table}>
     
        
    


      
      <tbody>
        <tr>
            
            <th className={styles.t}>Id</th>
            <th className={styles.t2}>Index NO</th>
        <th className={styles.t1}>Brand Name</th>
        <th className={styles.t1}>Description</th>
        <th className={styles.t2}>DeleteBrand</th>
        </tr>
  
   
    {data && (data.getAllBrand.map((user,index) => {
      return(
        <tr key={index}>
          
    <td className={styles.t}>{user.id}</td>
    <td className={styles.t2}>{index+1}</td>
        <td className={styles.t1}>{user.brandname}</td>
        <td className={styles.t1}>{user.branddes}</td>
        <td className={styles.t2}><a href='/Brand'><button onClick={() =>{deleteBrand({variables:{id:user.id}})}}>Delete</button></a></td></tr>
    )}))}
    
        </tbody>
    </table>
    </div>
    
    </div>
  )
}

export default Brand