 import { gql} from "@apollo/client";

export const GET_ALL_PRODUCTS =gql`

query getAllProducts{
    getAllProducts {
        id
        productname
        price
        quantity
        category
        brand
    }
}
`

export const GET_ALL_CATEGORY =gql`
query getAllCategory{
    getAllCategory {
        id 
        categoryname
        categorydes
    }
}
`


export const GET_ALL_BRAND =gql`
query getAllBrand{
    getAllBrand {
        id 
        brandname
        branddes
    }
}
`



 

   
