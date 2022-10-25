import React from 'react'
import styles from '..//styles/Orders.module.css'
import { GET_ALL_ORDERS} from './Graphql/Queries'
import { useQuery, useMutation } from '@apollo/client'
import { DELETE_USER} from './Graphql/Mutation'






const Addproduct = () => {
  const { data } = useQuery(GET_ALL_ORDERS);
  const [deleteUser, { error }] = useMutation(DELETE_USER)
  
 


  
 

  if (data) {
    console.log(data)
  }
  return (
    <div>
      <div className={styles.container}>

        <div className={styles.buttonwrapper}>


          <a href='/AddOrder'><button>Add Order</button></a>
          <a><button>Todays Order</button></a>
          <a><button>Pending Orders</button></a>
        </div>



        <div className={styles.wrapper}>
          <h1>ORDERS</h1><br />
          <table className={styles.table}>
            <thead className={styles.tr1}>
              {/* <th className={styles.t}>Id</th> */}
              <th className={styles.t1}>Product Name</th>
              <th className={styles.t1}>Price</th>
              <th className={styles.t1}>Order Id</th>
              <th className={styles.t1}>Customer</th>
              <th className={styles.t1} >Status</th>
              <th className={styles.t2}>Delete<br></br>product</th>
              <th className={styles.t2}>Manage<br></br>Status</th>



            </thead>
          </table>
          <div>{data && (data.getAllProducts.map((user) => {
            return (
              <table className={styles.table}>

             <tbody>
                <tr className={styles.tr}>
                  {/* <td className={styles.td}>{user.id} </td> */}
                <td  className={styles.t1} >{user.productname}</td>
                  <td className={styles.td1}>{user.price}</td>
                  <td className={styles.td1}>{user.quantity}</td>
                  <td className={styles.td1}>{user.category}</td>
                  <td className={styles.td1}>{user.brand}</td>
                  <td className={styles.td2}> <a href='/Product' ><button onClick={() => { deleteUser({ variables: { id: user.id } }); }}>DELETE</button></a></td>
                  <td className={styles.td2}> <a href={'/Updateproduct/' +user.id} key={user.id}><button>UPDATE</button></a></td>
                  

                </tr>
                
                </tbody>
 
              </table>

            )
          }))}</div>



        </div>
      </div>
    </div>
  )
}

export default Addproduct





