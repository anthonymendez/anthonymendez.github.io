---
layout: post
title: "Go Fish in C"
tags: [C, Game Design, UNIX]
feature-img: "assets/img/portfolio/gofishinc.png"
img: "assets/img/portfolio/gofishinc.png"
date: 2018-10-15
---

Go Fish in C is the game Go Fish created in C and played on the command line or terminal. You play Go Fish against the Computer which randomly guesses the cards you may have in your hand. This project was created for ECE 373 Software Intensive Engineering for Fall 2018 at UMass Amherst.

### Development

I worked on this project with a friend of mine, <a href = "https://github.com/Parzival6">Joshua Howell</a>. When we were initially given this project, we were only given header files with prototype functions and structs. We went ahead and created some psuedo-code with how the game loop would work, and handle edge cases. The general case would be neither play has won the game, so they would guess a card, if right, they take all their cards of that rank, otherwise they pick a random card from the deck.

The only edge case we had to fix, was to figure out how to handle a user inputting the rank 10 into the prompt. In our code, we represent all ranks with single characters, and 10 is represented with a 'T'. So when we check what the user has inputted, if the first character isn't a 1, we check if its any other card rank, else if the next character is a 0, and then end character, we go through the process for checking a 10.

### Final Words

Developing this project was really smooth. Me and Josh started early with writing pseudo-code to figure out what to do in our code. Once we had established our psuedo code with edge cases, we started programming in C and fixing small bugs as we went along.

### Links

<a href = "https://github.com/anthonymendez/GoFish-in-C">Github Repository</a>