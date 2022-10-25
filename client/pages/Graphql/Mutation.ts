import {gql} from "@apollo/client";

export const CREATE_PRODUCT =gql`
   mutation createProduct(
      $productname:String! 
      $price:String!
      $quantity:String!
      $category:String!
      $brand:String!
      ){

      createProduct( 
         productname :$productname 
         price:$price
         quantity:$quantity
         category:$category
         brand:$brand
         ){
            id
            productname
            price
            quantity
            category
            brand
           
         }
   }

   `;

export const DELETE_USER =gql`
      mutation deleteUser($id:ID!) {
        deleteUser(id:$id){
           message
        }

   }
   
   
   `

export const UPDATE_PRODUCT=gql`

    mutation updateProduct(
      $id:ID!
      $newproductname:String! 
      $newprice:String!
      $newquantity:String!
      $newcategory:String!
      $newbrand:String!
     ){

      updateProduct(
         id:$id
         newproductname:$newproductname
         newprice:$newprice
         newquantity:$newquantity
         newcategory:$newcategory
         newbrand:$newbrand
        
         )
         {
            id
            productname
            price
            quantity
            category
            brand
            
         }
      }

`


export const CREATE_BRAND=gql`

mutation createBrand(
   $brandname:String! 
   $branddes:String!
  
   ){

   createBrand( 
      brandname :$brandname 
      branddes:$branddes
     
      ){
         id
         brandname
         branddes
        
      }
}


`

export const DELETE_BRAND =gql`
      mutation deleteBrand($id:ID!) {
        deleteBrand(id:$id){
           message
        }

   }
   
   
   `


export const DELETE_CATEGORY =gql`
      mutation deleteCategory($id:ID!) {
        deleteCategory(id:$id){
           message
        }

   }
   
   
   `

   export const CREATE_CATEGORY=gql`

   mutation createProduct(
      $categoryname:String! 
      $categorydes:String!
     
      ){
   
      createCategory( 
         categoryname :$categoryname 
         categorydes:$categorydes
        
         ){
            id
            categoryname
            categorydes
           
         }
   }
   
   
   `