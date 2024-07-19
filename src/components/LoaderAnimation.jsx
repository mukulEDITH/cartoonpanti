'use client'

import React, { useEffect, useState } from 'react';
 

import '/public/assets/both.png'

const LoaderAnimation = () => (
  <div className="flex justify-center items-center  ">
      
    <img src="/assets/c logo.png" alt="Loading animation" className=" flex justify-center items-center  h-100 w-100 bg-gray-200" 
    style={{ marginTop: '250px' ,
      transition: 'opacity 0.5s ease',
      borderRadius: '32px',
    }}

    />
  </div>
);

export default LoaderAnimation;
 
