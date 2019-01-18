---
layout: post
title: "Tiny Shell"
tags: [C, UNIX]
feature-img: "assets/img/portfolio/tinyshell.png"
img: "assets/img/portfolio/tinyshell.png"
date: 2018-11-06
---

Tiny Shell is a tiny shell Unix program created in C for ECE 373 Software Intensive Engineering. It supports Job Control, and Signal Interrupts.

### Development

I worked on this project with a friend of mine, <a href = "https://github.com/Parzival6">Joshua Howell</a>. When we were initially given this project, we were only given header files with prototype functions, helper functions and structs. We need to fill in 7 functions:
1. eval - Main routine that parses and interprets the command line.
2. builtin_cmd - Recognizes and interprets the built-in commands: quit, fg, bg, and jobs.
3. do_bgfg - Implements the bg and fg built-in commands.
4. waitfg - Waits for a foreground job to complete.
5. sigchld_handler - Catches SIGCHILD signals.
6. sigint_handler - Catches SIGINT (ctrl-c) signals.
7. sigtstp_handler - Catches SIGTSTP (ctrl-z) signals.

### Links

<a href = "https://github.com/anthonymendez/Tiny-Shell">Github Repository</a>