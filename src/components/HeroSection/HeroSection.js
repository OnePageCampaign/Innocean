import React from 'react'
import * as L from './HeroSection.style'

function HeroSection() {
  return (
    <L.Wrapper>
      <L.ImageContainer src='/img/herosection.png' alt='Background' />
      <L.Container>한 페이지가 될 수 있게</L.Container>
    </L.Wrapper>
  )
}

export default HeroSection
