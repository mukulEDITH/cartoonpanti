"use client";
import React from "react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";




export const people = [
  {
    id: 1,
    name: "Abhijeet Thakur",
    designation: "CEO & Founder",
    src:
      "/assets/chole.png",},
  {
    id: 2,
    name: "Shivam  Nagle",
    designation: "Graphic designer",
    src:
      "/assets/perry.png",
  },
  // {
  //   id: 3,
  //   name: "Mukul Kaushal",
  //   designation: "Person who support them also a FSD",
  //   src:
  //     "/assets/ME2.png",
  // },
  // {
  //   id: 4,
  //   name: "Emily Davis",
  //   designation: "UX Designer",
  //   src:
  //     "/assets/f1 f.png",
  // },
  
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center   w-full"
    style={{ marginTop: '150px' ,
     
    }}
    >
      <AnimatedTooltip items={people} />
    </div>
  );
}
