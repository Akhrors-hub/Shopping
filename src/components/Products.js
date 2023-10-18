import React, { useEffect, useState } from "react"
import styled from "styled-components"
import {popularProducts} from "../data"
import Product from "./Product"
import axios from "../utils/axios"

const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;

`

const Products = ()=> {
  const [products, setProducts] = useState([])
  useEffect(()=>{
axios.get("/api/product")
.then(response => {
  setProducts(response.data)
})
  
  },[])
  console.log(products)
  return (
    <Container>
        {products.map(item=>(
          <Product item={item} key={item._id} />
          
        ))}
    </Container>
  )
}
export default Products;
