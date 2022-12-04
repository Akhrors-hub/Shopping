import React, { useEffect, useState } from "react";
import styled from "styled-components"
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import {sliderItems} from "../data"

const Container = styled.div`
margin-top: 50px;
width:100%;
height: 100vh;
display:flex;
position: relative;
overflow:hidden;
`
const Arrow = styled.div`

width:100px;
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
z-index: 2;
`
const Wrapper = styled.div`
height:100%;
width: 100%;
display: flex;
transform:translateX(${props=>props.slideIndex * -100}vw);
transition: all 3s ease;

`
const Slide = styled.div`
width: 250vh;
height: 100vh;
display: flex;
align-items: center;
background-color:${props=>props.bg};
`;
const ImageContainer = styled.div`
height: 100%;

flex:1`;
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
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
    } else {
      setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
<Arrow direction="left" onClick={()=>handleClick("left")}>
  <FaArrowLeft className="sliders"/>
</Arrow>

<Wrapper slideIndex={slideIndex}>
      {sliderItems.map(item => (



<Slide bg={item.img} key={item.id}>
<ImageContainer>
<Image src={item.img} />
</ImageContainer>
<InfoContainer>
<Title> {item.title}</Title>
<Desc> {item.desc}</Desc>
<Button> SHOW NOW</Button>

</InfoContainer>
</Slide>
))};
 </Wrapper>

<Arrow direction="right" onClick={()=>handleClick("right")} >
  <FaArrowRight className="sliders" />
</Arrow>

    </Container>
  )
}

export default Slider;
