import React from "react"
import styled from "styled-components"
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

import Circle from "./Circle"
import {popularProducts} from "../data"


const Image = styled.img``
const Info = styled.div``
const Icon = styled.div``

const Container = styled.div``
const Product = ({item})=> {
  return (
    <Container>
        <Circle />
        <Image src={item.img}/>
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
