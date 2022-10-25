import React from 'react'
import styles from "../styles/Category.module.css"
import Link from "next/link"
import { useState } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import { CREATE_CATEGORY, DELETE_CATEGORY } from './Graphql/Mutation'
import { GET_ALL_CATEGORY } from './Graphql/Queries'

function Category() {
  

  const {data} =useQuery(GET_ALL_CATEGORY)
  const [categoryname,setcategoryname]=useState("")
  const [categorydes,setcategorydes]=useState("")
  const [createCategory,{error}] =useMutation(CREATE_CATEGORY)
  const [deleteCategory]=useMutation(DELETE_CATEGORY)

  return (
    <div className={styles.container}>

      <div></div>


<button  className={styles.abc} type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
<h6>Add category</h6>
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Category</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input placeholder='category Name' onChange={(event)=>{setcategoryname(event.target.value)}}></input>
        <input placeholder='description' onChange={(event) =>{setcategorydes(event.target.value)}}></input>
      
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <a href="/Category"><button type="button" class="btn btn-Danger" onClick={() =>{
         createCategory({
          variables:{categoryname:categoryname,categorydes:categorydes}
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
            <th className={styles.th1}>Index NO</th>
        <th className={styles.th1}>Category Name</th>
        <th className={styles.th1}>Description</th>
        <th className={styles.th1}>Deleteproduct</th>
        </tr>
  
   
    {data && (data.getAllCategory.map((user,index) => {
      return(
        <tr key={index}>
          
    <td className={styles.t}>{user.id}</td>
    <td className={styles.t2}>{index+1}</td>
        <td className={styles.t1}>{user.categoryname}</td>
        <td className={styles.t1}>{user.categorydes}</td>
        <td className={styles.t2}><a href='/Category'><button onClick={() =>{deleteCategory({variables:{id:user.id}})}}>Delete</button></a></td></tr>
    )}))}
    
        </tbody>
    </table>
    </div>
    
    </div>
  )
}

export default Category