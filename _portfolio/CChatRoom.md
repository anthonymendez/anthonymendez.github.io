---
layout: post
title: "C Chat Room"
tags: [C, UNIX, Networking]
feature-img: "assets/img/portfolio/cchatroom.png"
img: "assets/img/portfolio/cchatroom.png"
date: 2018-12-14
---

C Chat Room is a client-server program allowing clients to join a server to converse with other clients connected to the server. Created for ECE 373 Software Intensive Engineering.

### Development

I worked on this project with a friend of mine, <a href = "https://github.com/Parzival6">Joshua Howell</a>.

In server.c, our program starts with a given port address to run on, then it waits and listens for connections from clients. After it accepts, it adds the new client to a doubly linked list, and creates a thread dedicated for that client, and waits for the next connection. In that thread, it is detatched so we don't have to worry about reaping it manually. The newClient is launched in clientHandlerStart where it takes of care of reading messages from the client, and handling appropriate cases in handleMessage. If handleMessage detects quit, it will break out of the while loop in clientHandlerStart. If not, it will send the appropriate information to the client, such as user list, or send message to another client, and it does this as long as the client is connected. In client.c, our program starts with an ip address to connect to, the port, and the username to assign once connection with the server is confirmed. It also checks to make sure the username is under our MAXLINE-2 limit to account for the newline and null terminating characters when sending to the server. The client has two functions, senderRoutine and receiverRoutine. receiverRoutine is created in a separate thread and just listens to messages from the server, prints them to stdout for as long as the client is running. senderRoutine is run in the main function and waits for input from the client. It sends all messages to the server and checks if quit is ever sent to stop the while loop and signify to receiverRoutine to stop.

When we approached this project, we knew the client would need two threads, one to keep receiving messages from the server, and one to send messages to the server. We used some of the code in server.c to create the thread to continuously receive data. We also knew our server would need to create a thread for each client and continously listen to messages and respond by handling dropping, sending messages to other clients from that client, or error reporting for that client. With this, we first ensured our clients could connect to the server, and disconnect with no problems. After, we moved on to be able to get the list of users so the server could send messages to the clients and make sure that the server was appropriately allocating memory and showing all of the clients. Then we moved onto making sure clients could quit from the server properly and the server was handling deleting them from the list and memory. Then we finally moved on to sending messages to and from clients via the server.

Problems we encountered:
1. When client receives a message, it doesn't print "> " on the newline after the message.
2. Messages being sent sometimes had garbage or extra characters from previous messages.

How we solved these problems:
1. We weren't able to get our prompt > to print after receiving a message. The terminal would only show a blank new line. We were able to fix this by changing the formatting of our print string to "\b\b%s> " combined with a fflush(stdout).
2. Created the clearBuffer function to 0 out any string given the pointer and length.

### Final Words

This was my second favorite project of the semester. We already have the knowledge of networking from assignment 5, retooling the Go Fish program to work with a server. But with this we had to create a multi-threaded client and server application to constantly listen for messages, and send messages.

### Links

<a href = "https://github.com/anthonymendez/C-Chat-Program">Github Repository</a>