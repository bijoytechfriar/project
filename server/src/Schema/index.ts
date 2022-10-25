import {GraphQLObjectType,GraphQLSchema, GraphQLString} from "graphql";
import { CREATE_BRAND, CREATE_CATEGORY, CREATE_PRODUCT, DELETE_BRAND, DELETE_CATEGORY, DELETE_PRODUCT, UPDATE_PRODUCT} from "./Mutations/User";
import { GET_ALL_BRAND, GET_ALL_CATEGORY, GET_ALL_PRODUCTS, GET_ALL_UPRODUCTS, GET_USER_BY_ID } from "./Queries/User";





const RootQuery  = new GraphQLObjectType({
    name:"RootQuery",
    fields:{
        getAllProducts:GET_ALL_PRODUCTS,
        getAllUProducts:GET_ALL_UPRODUCTS,
        getAllCategory:GET_ALL_CATEGORY,
        getById:GET_USER_BY_ID,
        getAllBrand:GET_ALL_BRAND

        
    }
});

 
const Mutation = new GraphQLObjectType({
    name:"Mutation",
    fields:{
        createProduct:CREATE_PRODUCT,
        deleteUser:DELETE_PRODUCT,
        createCategory:CREATE_CATEGORY,
        createBrand:CREATE_BRAND,
        updateProduct:UPDATE_PRODUCT,
        deleteBrand:DELETE_BRAND
      
       
    },
});
  
export const schema =new GraphQLSchema({
    query:RootQuery,
    mutation:Mutation,
})


