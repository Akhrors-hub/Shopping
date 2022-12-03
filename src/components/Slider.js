import React from "react"
import styled from "styled-components"
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Container = styled.div`
margin-top: 50px;
width:100%;
height: 100vh;
display:flex;
position: relative;
overflow:hidden;
`
const Arrow = styled.div`

width:50px;
height:50px;
background-color: purple;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top:0;
left: ${props=> props.direction === "left" && "10px"};
right: ${props=> props.direction === "right" && "10px"};
bottom:0;
margin: auto;
cursor:pointer;
opacity: 1;
.sliders{
  color: white;
}

`
const Wrapper = styled.div`
height:100%;
width:100%;
display: flex;

`
const Slide = styled.div`
width:100vh;
height: 100vh;
display: flex;
align-items: center;
`;
const ImageContainer = styled.div`
height: 100%;
flex:1;`;
const InfoContainer = styled.div`flex:1;
padding: 50px;`;

const Title = styled.h1`
font-size: 70px;
letter-spacing: 20px`;
const Desc = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`;
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
border-radius: 10px;
&:hover{
  color: purple;
  border-color: purple

}
`;


const Image = styled.img`
height: 80%;
border-radius: 250px;
`;

const Slider = ()=> {
  return (
    <Container>
<Arrow direction="left">
  <FaArrowLeft className="sliders"/>
</Arrow>

<Wrapper>
<Slide>
<ImageContainer>
<Image src="https://www.bestsmartdns.com/file/2015/07/online-shopping.jpg" />
</ImageContainer>
<InfoContainer>
<Title> WINTER SALE</Title>
<Desc> Don't compromise on style! Get flat 30% off for new arrivals.</Desc>
<Button> SHOW NOW</Button>

</InfoContainer>
</Slide>
 </Wrapper>

<Arrow direction="right">
  <FaArrowRight className="sliders" />
</Arrow>

    </Container>
  )
}

export default Slider;
