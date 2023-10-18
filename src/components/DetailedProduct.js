import React, { useState } from "react"
import styled from "styled-components"
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";


import {popularProducts} from "../data"
import axios from "../utils/axios"
const Info = styled.div`

position: absolute;

opacity:0;
z-index:1;
display: flex;
align-items: center;
justify-content: center;
`
const Container = styled.div`
flex:1;
margin: 5px;

padding: 10px;

mid-height: 270px;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
display: grid;
align-items: center;
justify-content: center;
background-color: #fce8ff;
z-index: 2;
position: relative;

&:hover {
  background-color: purple;
  
}


&:hover ${Info}{
  opacity:1;
 cursor: pointer;
}

`
const Image = styled.img`
height: 125px;
width: 150px;
padding: 40px 25px;;
z-index:3;
`
const Circle = styled.div`
width:200px;
height: 200px;
padding: 5px;
border-radius: 50%;
background-color:white;

`


const Icon = styled.div`
width: 40px;
height: 40px;
margin-right: 10px;
padding: 3px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;

&:hover{
  background-color: purple;
  color: white;
}
`


const DetailedProduct = ({isHeader,item})=> {
    const [isEditable, setIsEditable] = useState(false)
    const [name,setName] = useState(item.name)
    const [price,setPrice] = useState(item.price)
    const [description,setDescription] = useState(item.description)
    const [category,setCategory] = useState(item.category)
    const [inStock,setInStock] = useState(item.inStock)
    const [imageURL,setImageURL] = useState(item.imageURL)
    function onSave(){
        setIsEditable(false)
        axios.put("/api/product",{name,price,description,category,inStock, _id:item._id ,imageURL})
    }
    

  return (
    <Container>
        <Image src={item.imageURL}/>
     {isEditable?(
        <>

           <input 
           value={name}
           onChange={(e)=> setName(e.target.value)}>



           </input>
        <input value={price} onChange={(e)=> setPrice(e.target.value)} />
        <input value={description} onChange={(e)=> setDescription(e.target.value)} />
        <input value={category} onChange={(e)=> setCategory(e.target.value)} />
        <input value={inStock} onChange={(e)=> setInStock(e.target.value)} />
        <input value={imageURL} onChange={(e)=> setImageURL(e.target.value)} />
        {!isHeader && <button onClick={onSave}>Save</button>}
</>):(<>
    <div>{name}</div>
    <div>{price}</div>
    <div>{description}</div>
    <div>{category}</div>
    <div>{inStock}</div>
    <div>{imageURL}</div>
{!isHeader && <button onClick={()=> setIsEditable(true)}>Edit</button>}</>)} 
  
  </Container>
  )
}

export default DetailedProduct;
