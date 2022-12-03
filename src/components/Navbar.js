import React from "react"
import styled from 'styled-components'
import { FaSearch } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { BsFillCloudArrowDownFill } from "react-icons/bs";


const Container = styled.div`
height: 60px;
`

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content:space-between;
align-items: center;
`

const Left = styled.div`
flex:1;
display:flex;
align-items: center;`

const Language = styled.span`
font-size:14px;
cursor: pointer;`

const SearchContainer = styled.div`
border: 0.5px solid lightgray;
align-items:center;
display:flex;
margin-left: 25px;
padding: 5px`

const Input = styled.input`
border: none;
outline:none;
`

const Center = styled.div`
flex:1;
text-align: center;
`
const Logo = styled.h1`
font-weight: bold;
font-family: cursive;
color:purple;
font-size: 40px;

`

const Right = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;
`

const MenuItem = styled.div`
font-size: 14px;
cursor:pointer;
margin-left: 25px;
`

const Navbar =()=>{
  return (
    <Container>
    <Wrapper>
<Left>
<Language>EN</Language>
<SearchContainer>
<Input />
<FaSearch style={{color:"gray"}} />
</SearchContainer>
</Left>
<Center>
<Logo><BsFillCloudArrowDownFill logotip="logos" /> SaleCart.com</Logo>

</Center>
    <Right>
<MenuItem>REGISTER</MenuItem>
<MenuItem>SIGN IN</MenuItem>
<MenuItem>

<BsCart />

</MenuItem>

    </Right>
      </Wrapper>
    </Container>
  )
}
export default Navbar
