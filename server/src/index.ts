import express from "express";
import { graphqlHTTP } from "express-graphql";
import cors from 'cors';
import { schema } from "./Schema";
import { createConnection } from "typeorm";
import { Users } from "./Entities/Users";
import { Category } from "./Entities/Category";
import { Brand } from "./Entities/brand";



const main = async ()=> {

    await createConnection({
        type:"mysql",
        database:"wadmin",
        username:"root",
        password:"",
        logging:true,
        synchronize:false,
        entities:[Users,Category,Brand]
    });

    const app = express()
    app.use(cors())
    app.use(express.json())
    app.use(
        "/graphql",
        graphqlHTTP({
        schema,
        graphiql:true
        
    }))

    app.listen(3001, () =>{
        console.log("SERVER RUNNING ON PORT 3000")
    })
};

main().catch((err) =>{
    console.log(err);
});


