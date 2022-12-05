import React from "react"
import styled from "styled-components"
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";


import {popularProducts} from "../data"

const Container = styled.div`
flex:1;
margin: 5px;

padding: 10px;
min-width: 350px;
mid-height: 270px;
width: 250px;
display: flex;
align-items: center;
justify-content: center;
background-color: #fce8ff;
z-index: 2;
position: relative;

&:hover ${Info} {
  opacity:1;
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

const Info = styled.div`

position: absolute;

opacity:0;
z-index:1;
display: flex;
align-items: center;
justify-content: center;
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


const Product = ({item})=> {
  return (
    <Container>
        <Circle >
        <Image src={item.img}/>
        </Circle>
        <Info>
              <Icon>
 <HiOutlineShoppingCart />
              </Icon>
              <Icon>
<FaSearch />
              </Icon>
              <Icon>
<AiOutlineHeart />
              </Icon>
        
        </Info>
    </Container>
  )
}

export default Product;
