import React from "react"
import styled from "styled-components"
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitterSquare } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Container = styled.div`
display:flex;
align-items: center;
justify-content: center;
background-color: white;
`
const Left = styled.div`
flex:1;
padding: 40px;

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
margin: 20px;
background-color: purple;
padding: 20px;
border-radius: 20px;
color:white;

&:hover{
    transition: all 3s ease;
    transform: scale(1.1);
}
`
const Logo = styled.h1`
text-align: center;
color: purple;
&:hover{
    color: black;
    transition: all 3s ease;
    transform: scale(1.8);
}
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

&:hover{
    

    transition: all 3s ease;
    transform: scale(1.8);
}

`
 const Title = styled.h3`
 margin-bottom: 30px;`
 const List = styled.ul`
 margin:0;
 padding:0;
 list-style: none;
 display: flex;
 flex-wrap: wrap;
 `
 const ListItem = styled.li`
 width: 50%;
 margin-bottom: 10px;
 text-decoration: none;
 `


const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`

const Payment =styled.img`
width: 50%;`


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
        <ListItem><a href="#" style={{textDecoration:"none", color: "purple"}}>Home</a></ListItem>
        <ListItem><a href="#" style={{textDecoration:"none", color: "purple"}}>Cart</a></ListItem>
        <ListItem><a href="#" style={{textDecoration:"none", color: "purple"}}>Man Fashion</a></ListItem>
        <ListItem><a href="#" style={{textDecoration:"none", color: "purple"}}>Woman Fashion</a></ListItem>
        <ListItem><a href="#" style={{textDecoration:"none", color: "purple"}}>Accessories</a></ListItem>
        <ListItem><a href="#" style={{textDecoration:"none", color: "purple"}}>My Account</a></ListItem>
        <ListItem><a href="#" style={{textDecoration:"none", color: "purple"}}>Order Tracking</a></ListItem>
        <ListItem><a href="#" style={{textDecoration:"none", color: "purple"}}>WishList</a></ListItem>
        <ListItem><a href="#" style={{textDecoration:"none", color: "purple"}}>Terms</a></ListItem>
</List>
</Center>
    <Right>
        <Title>
            Contact
        </Title>
        <ContactItem> 
            <FaMapMarkerAlt style={{marginRight:"10px"}} />
            San Francisco, CA</ContactItem>
        <ContactItem>
            <BsTelephoneFill style={{marginRight:"10px"}} />
            +(1) 628-233-0440
        </ContactItem>
        <ContactItem>
            <MdEmail style={{marginRight:"10px"}} />
            mi7akhror@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>        
        </Container>
    )
}
export default Footer;