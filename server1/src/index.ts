import express from "express";
import { graphqlHTTP } from "express-graphql";
import {schema} from './Schema'
import cors from "cors";
import { createConnection } from "typeorm";
import {Users} from "./Entities/Users"

const main = async () => {
    await createConnection({
        type: "mysql",
        database:"wnsadmin",
        username:"root",
        password:"",
        logging:true,
        synchronize:false,
        entities:[Users]

    })




    const app = express()
    app.use(cors())
    app.use(express.json())
    app.use("/graphql",graphqlHTTP({
        schema,
        graphiql:true
    }))
    app.listen(3002, () =>{
        console.log("SERVING RUNNING ON 3002")
    })
};

main().catch((err) => {
    console.log(err);
})