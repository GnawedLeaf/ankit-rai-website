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
              strings: ['Ankit Kumar'],
              autoStart: true,
              loop: true,
              delay: 150,
              pauseFor: 30000,
            }}
          /></HeroSubtitle>
        <HeroTitle>RAI</HeroTitle>

      </HeroContainer>
      hi bitch
    </PageContainer>
  )
}

export default Homepage;