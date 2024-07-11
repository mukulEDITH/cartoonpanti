"use client";
 
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export const products = [
  {
    title: "Moonbeam",
    link: "https://cartoonpanti.com/",
    src: "/assets/both.png",
  },
  {
    title: "Cursor",
    link: "https://cartoonpanti.com/",
    src: "/assets/me.png",
  },
  {
    title: "Rogue",
    link: "https://cartoonpanti.com/",
    src: "/assets/both.png",
  },
  {
    title: "Editorially",
    link: "https://cartoonpanti.com/",
    src: "/assets/f1 f.png",
  },
  {
    title: "Editrix AI",
    link: "https://cartoonpanti.com/",
    src: "/assets/me.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://cartoonpanti.com/",
    src: "/assets/DSC_1935.png",
  },
  {
    title: "Algochurn",
    link: "https://cartoonpanti.com/",
    src: "/assets/DSC_1917.png",
  },
  {
    title: "Aceternity UI",
    link: "https://cartoonpanti.com/",
    src: "/assets/DSC_1733.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://cartoonpanti.com/",
    src: "/assets/DSC_1586.png",
  },
  {
    title: "SmartBridge",
    link: "https://cartoonpanti.com/",
    src: "/assets/DSC_1586.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://cartoonpanti.com/",
    src: "/assets/DSC_1544.png",
  },
  {
    title: "Creme Digital",
    link: "https://cartoonpanti.com/",
    src: "/assets/DSC_1362.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://cartoonpanti.com/",
    src: "/assets/me.png",
  },
  {
    title: "Invoker Labs",
    link: "https://cartoonpanti.com/",
    src: "/assets/both.png",
  },
  {
    title: "E Free Invoice",
    link: "https://cartoonpanti.com/",
    src: "/assets/f1.png",
  },
  {
    title: "Moonbeam",
    link: "https://cartoonpanti.com/",
    src: "/assets/both.png",
  },
  {
    title: "Cursor",
    link: "https://cartoonpanti.com/",
    src: "/assets/me.png",
  },
  {
    title: "Rogue",
    link: "https://cartoonpanti.com/",
    src: "/assets/DSC_1917.png",
  },
  {
    title: "Editorially",
    link: "https://cartoonpanti.com/",
    src: "/assets/f1 f.png",
  },
  {
    title: "Editrix AI",
    link: "https://cartoonpanti.com/",
    src: "/assets/me.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://cartoonpanti.com/",
    src: "/assets/DSC_1935.png",
  },
  {
    title: "Algochurn",
    link: "https://cartoonpanti.com/",
    src: "/assets/DSC_1917.png",
  },
  {
    title: "Aceternity UI",
    link: "https://cartoonpanti.com/",
    src: "/assets/DSC_1733.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://cartoonpanti.com/",
    src: "/assets/DSC_1586.png",
  },
];


export function HeroParallaxDemo() {
    // Use HeroParallax component with products array
    return (
      <HeroParallax products={products} />
    );
  }
