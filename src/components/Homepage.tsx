"use client"

import React, { useState, useEffect } from 'react';
import { HeroParallaxDemo , products} from "@/components/HeroParallaxDemo";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import { HeroScrollDemo } from "./HeroScrollDemo";
import LoaderAnimation from '@/components/LoaderAnimation'
import { AnimatedTooltipPreview } from '@/components/AnimatedTooltipPreview';

const Homepage: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <LoaderAnimation />;
  }

  return (
    <div>
      <HeroParallaxDemo />
      <AnimatedTooltipPreview/>
      <HeroScrollDemo />
      <InfiniteMovingCardsDemo />
      <p className="text-center text-sm">Copyright @mukulEDITH</p>
    </div>
  );
};

export default Homepage;
 
