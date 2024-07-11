"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-beige dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden ">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the season of Light ✨, it was the season of Darkness 🌑, it was the spring of hope 🌷, it was the winter of despair ❄️.",
    name: "Charles Dickens 👓",
    title: "Fashionable Times: A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fashion 💃, Or to take Arms against a Sea of trends 🌊, And by opposing end them: to dress, to shop.",
    name: "William Shakespeare 🎭",
    title: "Hamlet: A Fashion Dilemma",
  },
  {
    quote:
      "All that we see or seem is but a dream within a dream 💭. In fashion, reality and illusion intertwine seamlessly.",
    name: "Edgar Allan Poe 🦇",
    title: "A Dream Within a Dream: Couture Chronicles",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a fashionable person in possession of a good wardrobe, must be in want of the latest trends 👗.",
    name: "Jane Austen 🌹",
    title: "Pride and Prejudice: Fashion Edition",
  },
  {
    quote:
      "Call me Ishmael 🌊. Some years ago—never mind how long precisely—having little or no money in my purse 👛, and nothing particular to interest me on shore 🏖️, I thought I would sail about a little and see the watery part of the fashion world 🌍.",
    name: "Herman Melville ⚓",
    title: "Moby-Dick: A Seafaring Style Saga",
  },
  {
    quote:
      "The joy of dressing is an art 🎨, and fashion is the canvas on which we express ourselves.",
    name: "John Galliano 👠",
    title: "Fashionable Elegance: The Art of Dressing",
  },
  {
    quote:
      "Style is a way to say who you are without having to speak 🗣️.",
    name: "Rachel Zoe 💄",
    title: "Stylistic Identity: Expressing Through Fashion",
  },
  {
    quote:
      "Fashion is the armor to survive the reality of everyday life 🛡️.",
    name: "Bill Cunningham 📸",
    title: "Armor of Style: Fashion for Everyday Warriors",
  },
  {
    quote:
      "I don't do fashion. I am fashion 👗.",
    name: "Coco Chanel 🌟",
    title: "Fashion Manifesto: Defining Style",
  },
  {
    quote:
      "Fashion should be a form of escapism, and not a form of imprisonment 🚀.",
    name: "Alexander McQueen 🌈",
    title: "Escaping Through Fashion: Freedom in Style",
  },
  {
    quote:
      "A woman is never sexier than when she is comfortable in her clothes 👑.",
    name: "Vera Wang 💍",
    title: "Comfortable Elegance: Embracing Inner Beauty",
  },
  {
    quote:
      "In difficult times, fashion is always outrageous 🌟.",
    name: "Elsa Schiaparelli 💥",
    title: "Outrageous Fashion: Breaking Norms",
  },
  {
    quote:
      "Fashion is about suspense, surprise and fantasy ✨. It's not about rules.",
    name: "Wolfgang Joop 🎩",
    title: "Fantasy in Fashion: Creating Magic",
  },
  {
    quote:
      "Fashion is the most powerful art 🎭 there is. It's movement, design and architecture all in one. It shows the world who we are and who we'd like to be.",
    name: "Blair Waldorf 💃",
    title: "The Power of Fashion: Art in Motion",
  },
  {
    quote:
      "I like my money right where I can see it: hanging in my closet 👗.",
    name: "Carrie Bradshaw 💼",
    title: "Closet Confidential: A Love Affair with Fashion",
  },
  {
    quote:
      "Fashion is the armor to survive the reality of everyday life 🛡️.",
    name: "Bill Cunningham 📸",
    title: "Armor of Style: Fashion for Everyday Warriors",
  },
  {
    quote:
      "I don't do fashion. I am fashion 👗.",
    name: "Coco Chanel 🌟",
    title: "Fashion Manifesto: Defining Style",
  },
  {
    quote:
      "Fashion fades, only style remains the same 💫.",
    name: "Coco Chanel 💄",
    title: "Eternal Style: Timeless Fashion",
  },
  {
    quote:
      "The difference between style and fashion is quality 👜.",
    name: "Giorgio Armani 👑",
    title: "Quality Over Quantity: The Essence of Style",
  },
  {
    quote:
      "Elegance is elimination 🌹.",
    name: "Cristóbal Balenciaga 👠",
    title: "Elegant Simplicity: Mastering the Art of Fashion",
  },
  {
    quote:
      "Fashion should be a form of escapism, and not a form of imprisonment 🚀.",
    name: "Alexander McQueen 🌈",
    title: "Escaping Through Fashion: Freedom in Style",
  },
  {
    quote:
      "A woman is never sexier than when she is comfortable in her clothes 👑.",
    name: "Vera Wang 💍",
    title: "Comfortable Elegance: Embracing Inner Beauty",
  },
  {
    quote:
      "In difficult times, fashion is always outrageous 🌟.",
    name: "Elsa Schiaparelli 💥",
    title: "Outrageous Fashion: Breaking Norms",
  },
  {
    quote:
      "Fashion is about suspense, surprise and fantasy ✨. It's not about rules.",
    name: "Wolfgang Joop 🎩",
    title: "Fantasy in Fashion: Creating Magic",
  },
  {
    quote:
      "Fashion is the most powerful art 🎭 there is. It's movement, design and architecture all in one. It shows the world who we are and who we'd like to be.",
    name: "Blair Waldorf 💃",
    title: "The Power of Fashion: Art in Motion",
  },
  {
    quote:
      "I like my money right where I can see it: hanging in my closet 👗.",
    name: "Carrie Bradshaw 💼",
    title: "Closet Confidential: A Love Affair with Fashion",
  },
  {
    quote:
      "Fashion is the armor to survive the reality of everyday life 🛡️.",
    name: "Bill Cunningham 📸",
    title: "Armor of Style: Fashion for Everyday Warriors",
  },
  {
    quote:
      "I don't do fashion. I am fashion 👗.",
    name: "Coco Chanel 🌟",
    title: "Fashion Manifesto: Defining Style",
  },
  {
    quote:
      "Fashion fades, only style remains the same 💫.",
    name: "Coco Chanel 💄",
    title: "Eternal Style: Timeless Fashion",
  },
  {
    quote:
      "The difference between style and fashion is quality 👜.",
    name: "Giorgio Armani 👑",
    title: "Quality Over Quantity: The Essence of Style",
  },
  {
    quote:
      "Elegance is elimination 🌹.",
    name: "Cristóbal Balenciaga 👠",
    title: "Elegant Simplicity: Mastering the Art of Fashion",
  },
];


