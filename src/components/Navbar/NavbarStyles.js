import { styled } from "styled-components";

export const NavbarContainer = styled.div`
font-family: 'Work Sans', sans-serif;
display: flex;
justify-content: flex-end;
padding: 2vw;
position:fixed;
top:0;
right:0;
width:100%;
background:#000818 ;
@media only screen and (max-width: 750px){
  padding:1rem;
}
`
export const NavbarItem = styled.a`
text-decoration:none;
color:#f5f5f5;
margin: 0 1rem;
font-size:1.1vw;
transition-duration: 0.3s;
@media only screen and (max-width: 750px){
  font-size:1rem;
  margin: 0 0.5rem;
}

&:hover{
  cursor:pointer;
  transform: scale(1.2);
}
`
export const NavbarLogo = styled.div``