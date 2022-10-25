import '../styles/globals.css'
import Layout from './components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import React,{ useEffect } from 'react'

import {ApolloClient,InMemoryCache, ApolloProvider} from "@apollo/client"
  

function MyApp({ Component, pageProps }) {


  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);
    
    const client =new ApolloClient({
      uri:"http://localhost:3001/graphql",
      cache: new InMemoryCache(),
    })



  return<Layout><ApolloProvider client={client}>
    <Component {...pageProps} />
 </ApolloProvider></Layout>

   


}

export default MyApp
