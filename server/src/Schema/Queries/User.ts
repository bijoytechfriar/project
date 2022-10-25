
import { GraphQLID, GraphQLList } from "graphql"
import { Brand } from "../../Entities/brand";
import { Category } from "../../Entities/Category";
import { Users} from "../../Entities/Users";
import { UserType } from "../Typedefs/User"




export const GET_ALL_PRODUCTS={
    type: new GraphQLList(UserType),
    resolve() {
        return Users.find();
    }
}

export const GET_ALL_CATEGORY={
    type:new GraphQLList(UserType),
    resolve() {
        return Category.find();
    }
}


export const GET_ALL_BRAND={
    type:new GraphQLList(UserType),
    resolve() {
        return Brand.find();
    }
}

export const GET_ALL_UPRODUCTS={
    type: new GraphQLList(UserType),
    resolve() {
        return Users.find();
    }
}   

export const GET_USER_BY_ID={
    type:UserType,
    args:{
        id:{type:GraphQLID}
    },
    resolve(parent:any,args:any){
        const id=args.id;
     return Users.findOneBy({id})
    }
}



