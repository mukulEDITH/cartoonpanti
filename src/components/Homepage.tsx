'use client'
import React from 'react'
import { HeroParallaxDemo , products} from '@/components/HeroParallaxDemo';
import { InfiniteMovingCardsDemo } from '@/components/InfiniteMovingCardsDemo';
import { HeroScrollDemo } from './HeroScrollDemo';
 
function Homepage() {
  return (
    <div>
      
      <HeroParallaxDemo/>
      <HeroScrollDemo/>
      <InfiniteMovingCardsDemo/>
      <p className='text-center text-sm' >Copyright @mukulEDITH</p>
      
    </div>
  )
}

export default Homepage;