import { styled } from "styled-components";

export const PageContainer = styled.div`
font-family: 'Work Sans', sans-serif;
font-family: 'Anonymous Pro', monospace;
background: #000818 ;
width:100%;
color:#f5f5f5;
height:200vh;
padding:0;
margin:0;
`

export const HeroContainer = styled.div`
height:100vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

export const HeroSubtitle = styled.div`
font-size:2.2vw;
font-weight:300;
letter-spacing:0.8rem;
text-align:center;
@media only screen and (max-width: 750px){
  font-size:1.2rem;
}
`
export const HeroTitle = styled.div`
font-size:6vw;
font-weight:400;
letter-spacing:1rem;
text-align:center;
margin-top:2rem;
@media only screen and (max-width: 750px){
  font-size:3.5rem;
  margin-top:1rem;
}
`