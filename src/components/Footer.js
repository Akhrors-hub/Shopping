import React from "react"
import styled from "styled-components"
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitterSquare } from "react-icons/fa";

const Container = styled.div`
display:flex;
align-items: center;
justify-content: center;
background-color: white;
`
const Left = styled.div`
flex:1;
padding: 20px;

`

const Center = styled.div`
flex:1;
padding: 20px;
`
const Right = styled.div`
flex:1;
padding: 20px;
`
const Description = styled.p`
margin: 20px 0px;
`
const Logo = styled.h1`

`
const SocialContainer = styled.div`
display: flex;
justify-content: center;
`
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props=>props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;

`
 const Title = styled.h3``
 const List = styled.ul``
 const ListItem = styled.li``





const Footer =()=>{
    return (
        <Container>
            <Left>
                <Logo> SaleCart.com </Logo>
                <Description>
                React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Perhaps you only want to add some “sprinkles of interactivity” to an existing page. React components are a great way to do that.

The majority of websites aren’t, and don’t need to be, single-page apps. With a few lines of code and no build tooling, try React in a small part of your website. You can then either gradually expand its presence, or keep it contained to a few dynamic widgets.
                </Description>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                    <FaFacebookSquare />
                    </SocialIcon >
                    <SocialIcon color="E4405F">
                    <RiInstagramFill />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <FaTwitterSquare />
                    </SocialIcon>
                </SocialContainer>
            </Left>
<Center>
<Title>
    Useful Links
</Title>
<List>
        <ListItem>Home</ListItem>
        <ListItem>Cart</ListItem>
        <ListItem>Man Fashion</ListItem>
        <ListItem>Woman Fashion</ListItem>
        <ListItem>Accessories</ListItem>
        <ListItem>My Account</ListItem>
        <ListItem>Order Tracking</ListItem>
        <ListItem> WishList</ListItem>
        <ListItem>Terms</ListItem>
</List>
</Center>
    <Right>
        </Right>        
        </Container>
    )
}
export default Footer;