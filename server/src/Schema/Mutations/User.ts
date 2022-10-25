import { UserType } from "../Typedefs/User";
import { MessageType } from "../Typedefs/Messages";
import { GraphQLID, GraphQLInt, GraphQLString } from "graphql";
import { Users } from "../../Entities/Users"; 
import { resolve } from "path";
import { Category } from "../../Entities/Category";
import { userInfo } from "os";
import { Brand } from "../../Entities/brand";



export const CREATE_PRODUCT = {
    type :UserType,
    args:{
        productname : {type:GraphQLString}, 
        price:{type:GraphQLString},
        quantity:{type:GraphQLString},
        category:{type:GraphQLString},
        brand:{type:GraphQLString},
        image:{type:GraphQLString}

    },

    async resolve(parent:any,args:any,) {
        const {productname,price,quantity,category,brand,image}=args;
        await Users.insert({productname,price,quantity,category,brand,image})
        return args 
    }


}

export const DELETE_PRODUCT = {
    type :MessageType,
    args:{
        id:{ type:GraphQLID}
    },

    async resolve(parent:any,args:any,) {
        const id=args.id;
       await Users.delete(id)

       return{successful:true,message:"DELETE WORKED"}
    
    }

}


export const UPDATE_PRODUCT = {
    type:UserType,
    args :{
        id:{ type:GraphQLID},
        newproductname:{type:GraphQLString},
        newprice:{type:GraphQLString},
        newquantity:{type:GraphQLString},
        newcategory:{type:GraphQLString},
        newbrand:{type:GraphQLString}
    },
    async resolve(parent:any,args:any){
        const {id,newproductname,newprice,newquantity,newcategory,newbrand}=args;
        const user =await Users.findOne({where:{id:id}});
        await Users.update({id:id},{productname:newproductname}),
        await Users.update({id:id},{price:newprice}),
        await Users.update({id:id},{quantity:newquantity})
        await Users.update({id:id},{category:newcategory})
        await Users.update({id:id},{brand:newbrand})   

        return (args)

    }

}






export const CREATE_CATEGORY={
    type : UserType,
    args:{
        categoryname : {type:GraphQLString}, 
        categorydes:{type:GraphQLString},
    },

    async resolve(parent:any,args:any,){
        const {categoryname,categorydes}=args;
        await Category.insert({categoryname,categorydes});
        return args
    }
}


export const DELETE_CATEGORY = {
    type :MessageType,
    args:{
        id:{ type:GraphQLID}
    },

    async resolve(parent:any,args:any,) {
        const id=args.id;
       await Category.delete(id)

       return{successful:true,message:"DELETE WORKED"}
    
    }

}

export const CREATE_BRAND={
    type : UserType,
    args:{
        brandname : {type:GraphQLString}, 
        branddes:{type:GraphQLString},
    },

    async resolve(parent:any,args:any,){
        const {brandname,branddes}=args;
        await Brand.insert({brandname,branddes});
        return args
    }
}

export const DELETE_BRAND = {
    type :MessageType,
    args:{
        id:{ type:GraphQLID}
    },

    async resolve(parent:any,args:any,) {
        const id=args.id;
       await Brand.delete(id)

       return{successful:true,message:"DELETE WORKED"}
    
    }

}
