---
layout: post
title: "Networked Go Fish"
tags: [C, Networking, Game Design]
feature-img: "assets/img/portfolio/networkedgofish.png"
img: "assets/img/portfolio/networkedgofish.png"
date: 2018-12-04
---

Networked Go Fish is exactly what it sounds like, a client and server program to enable players to play GoFish over the internet with a computer.

### Development

I worked on this project with a friend of mine, <a href = "https://github.com/Parzival6">Joshua Howell</a>. This project was created for ECE 373 Software Intensive Engineering.

The GoFish code interacts with the server to keep the player updated, and handle input coming from the player. The flow of the code is largly the same as in the original GoFish assignment. There is added overhead to establish the network connection and transmit data during the game. Additionally, the server blocks while waiting for input from the network instead of the terminal. The client opens the connection to the server, prints data received from the server, and sends user input when prompted. The server drives the GoFish code by opening the connection to the client, sending game updates to the client, and passing data from the client to the GoFish code.

First, we added GoFish files to compile with server files in Makefile. We then converted print statements into calls to a function to send data to the client. We adopted the strategy of performing all logic/processing on the server and simply displaying results and prompts to the client. Therefore, the GoFish code is almost exclusively running on the server. The client gets updated with the current game state and responds to prompts (card choice and whether to play another game or not).

We encountered a few problems:
1. Prompting the player for input did not work at first.
2. The program would get stuck after the first iteration of the game.
3. The printout of the cards in the player's hand did not separate each card.

This is how we solved them:
1. The client now checks received data for a special character. When receiving this character, the client will wait for user input and send it back to the server (instead of printing the special character).
2. The code for the prompt at the end of the game was largly rewritten, similar to the prompt at the beginning of each turn.
3. We reworked the server code to include a space separator when concatenating cards in the player's hand to send.

### Final Words

I think this was my favorite project of the semester. It was really interesting to take an already existing project, and retooling it to work over the internet, sending data between client and server.

### Links

<a href = "https://github.com/anthonymendez/Networked-GoFish">Github Repository</a>