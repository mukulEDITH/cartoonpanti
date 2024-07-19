'use client'

import React, { useEffect, useState } from 'react';
 

import '/public/assets/both.png'

const LoaderAnimation = () => (
  <div className="flex justify-center items-center h-screen square-full h-240 w-240 bg-gray-200 ">

    <img src="/assets/c logo.png" alt="Loading animation" className="w-1/2" />
  </div>
);

export default LoaderAnimation;
