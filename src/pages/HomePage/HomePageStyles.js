import { styled } from "styled-components";

export const PageContainer = styled.div`
font-family: 'Work Sans', sans-serif;
background: #000818 ;
width:100%;
color:#f5f5f5;
`

export const HeroContainer = styled.div`
height:100vh;
display: flex;
justify-content: center;
align-items: center;

`
export const HeroTitle = styled.div`
font-size:4vw;
color:white;
font-weight:700;
@media only screen and (max-width: 750px){
  font-size:4rem;
}
`