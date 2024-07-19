"use client"

import React, { useState, useEffect } from 'react';
import { HeroParallaxDemo , products} from "@/components/HeroParallaxDemo";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import { HeroScrollDemo } from "./HeroScrollDemo";
import { WobbleCardDemo } from "./WobbleCardDemo";
import LoaderAnimation from '@/components/LoaderAnimation'

const Homepage: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <LoaderAnimation />;
  }

  return (
    <div>
      <HeroParallaxDemo />
      <WobbleCardDemo />
      <HeroScrollDemo />
      <InfiniteMovingCardsDemo />
      <p className="text-center text-sm">Copyright @mukulEDITH</p>
    </div>
  );
};

export default Homepage;
 
