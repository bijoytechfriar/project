 import {GraphQLObjectType,GraphQLID,GraphQLString, GraphQLInt} from 'graphql'

export const UserType= new GraphQLObjectType({
    name: "User",
    fields:() => ({
        id: {type:GraphQLID},
        productname : {type:GraphQLString},
        price:{type:GraphQLString},
        quantity:{type:GraphQLString},
        category:{type:GraphQLString},
        brand:{type:GraphQLString},
        categoryname:{type:GraphQLString},
        categorydes:{type:GraphQLString},
        brandname:{type:GraphQLString},
        branddes:{type:GraphQLString}  


    })
})


