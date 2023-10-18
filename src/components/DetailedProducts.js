import React, { useEffect, useState } from "react"
import styled from "styled-components"
import {popularProducts} from "../data"
import Product from "./Product"
import axios from "../utils/axios"
import DetailedProduct from "./DetailedProduct"
const Container = styled.div`
padding: 20px;
display: grid;
grid-template-columns: 1fr;
flex-wrap: wrap;
justify-content: space-between;

`

const DetailedProducts = ()=> {
  const [products, setProducts] = useState([])
  const header = {imageURL:"IMAGE", price:"PRICE", description:"DESCRIPTION", inStock:"IN STOCK", name:"NAME",  category:"CATEGORY"}

  useEffect(()=>{
axios.get("/api/product")
.then(response => {
  setProducts(response.data)
  console.log(response.data)
})
  
  },[])
  return (
    <Container>
      <DetailedProduct item={header} isHeader={true} />
        {products.map(item=>(
          <DetailedProduct item={item} key={item._id} />
        ))}
    </Container>
  )
}
export default DetailedProducts;
