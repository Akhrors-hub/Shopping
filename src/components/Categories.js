import React, { useEffect, useState } from "react";
import styled from "styled-components"
import CategoryItem from "./CategoryItem"

import {categories} from "../data"

const Container = styled.div`
display: flex;
padding:20px;
`

const Categories = ()=> {
  return (
    <Container>
 {categories.map((item)=>(
   <CategoryItem item={item} />
 ))}
    </Container>
  )
}

export default Categories;
