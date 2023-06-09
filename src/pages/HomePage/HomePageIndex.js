import React from "react";
import { HeroContainer, HeroTitle, PageContainer, HeroSubtitle } from "./HomePageStyles";
import Typewriter from 'typewriter-effect';


const Homepage = () => {

  return (
    <PageContainer>
      <HeroContainer>
        <HeroSubtitle>
          <Typewriter
            options={{
              strings: ['Coder', 'Business Man', 'Handsome Fella', 'Gay'],
              autoStart: true,
              loop: true,
              delay: 150,
              pauseFor: 1000,
            }}
          /></HeroSubtitle>
        <HeroTitle>Ankit Kumar RAI</HeroTitle>

      </HeroContainer>
      hi bitch
    </PageContainer>
  )
}

export default Homepage;