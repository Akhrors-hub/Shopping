import React from "react"
import styled from "styled-components"
import { BiSend } from "react-icons/bi";


const Container = styled.div`
background-color: #fff5f5;
height:60vh;
width:100%;
display: flex;
alighn-items: center;
justify-content: center;
` 
const Title = styled.div``
const Description = styled.div``
const InputContainer = styled.div``
const Button = styled.div``
const Input = styled.input`
border: none;
outline:none;`

const Newsletter = ()=> {
    return (
<Container>
            <Title>
                <Description>

                </Description>
                <InputContainer>
<Input />
     <Button>
<BiSend />
     </Button>
                </InputContainer>
            </Title>


</Container>

    )
}

export default Newsletter