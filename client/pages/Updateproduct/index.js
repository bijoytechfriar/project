import React,{useState} from 'react'
import {UPDATE_PRODUCT} from '../Graphql/Mutation'
import styles from '../../styles/Updateproduct.module.css'
import {useMutation,useQuery} from "@apollo/client"
import { GET_ALL_PRODUCTS } from '../Graphql/Queries'


const Updateproduct =() =>{
    

    const {data}=useQuery(GET_ALL_PRODUCTS)
   

    return {
      props:{user:data}
    }
  }


  const User =({user}) =>{
    const [id,setid]=useState("");
    const [productname,setproductname]=useState("");
    const [price,setprice]=useState("");
    const [quantity,setquantity]=useState("");
    const [category,setcategory]=useState("");
    const [brand,setbrand]=useState("");
     const [Updateproduct]=useMutation(UPDATE_PRODUCT)
  return (
    <div>
         <div className={styles.modalcontainer}>

<div className={styles.modalwrapper} >
        <input type="text" placeholder=""   onChange={(event)=>{setid(event.target.value)}}/>
        <input type="text" placeholder="productname" onChange={(event)=>{setproductname(event.target.value)}}/>
        <input type="text" placeholder="price" onChange={(event)=>{setprice(event.target.value)}}/>
        <input type="text" placeholder="quantity" onChange={(event)=>{setquantity(event.target.value)}}/>
        <input type="text" placeholder="category"onChange={(event)=>{setcategory(event.target.value)}}/>
        <input type="text" placeholder="brand" onChange={(event)=>{setbrand(event.target.value)}}/>
        <button onClick={()=>{
            Updateproduct({
                variables:{
                    id:id,
                    newproductname:productname,
                    newprice:price,
                    newquantity:quantity,
                    newcategory:category,
                    newbrand:brand
                }
            })
        }}>UPDATE</button>
        </div>
        </div>
    </div>
  )
}

export default Updateproduct