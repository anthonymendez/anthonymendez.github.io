---
layout: post
title: "Vector Shot 2.0"
tags: [C#, Unity]
feature-img: "assets/img/portfolio/vectorshot2.png"
img: "assets/img/portfolio/vectorshot2.png"
date: 2018-08-11
---

Vector Shot 2.0 is a re-imagining of my game Vector Shot from the Summer of 2017. In Vector Shot 2.0, you can play against 3 other players in a local multiplayer battle, the objective: eliminate anyone that isn't you.

### Back Story

I was on bit more of a time crunch this time around. At my internship with Zebra Technologies, I was having a conversation with the other interns and the HR Manager at the office. Zebra wanted the interns to do a reverse mentorship at the office, because while we're learning the industry side of Software Engineering, they wanted to learn something us interns are interested or are doing on the side. I mentioned I was working on doing some Game Development as a hobby and they wanted to roll with it. So I would give a presentation about Game Development to my office, but there was a problem.

None of my games were really "demo" ready even. Sure I was working on games from the <a href = "https://www.udemy.com/unitycourse2/">Complete C# Unity Developer 3D on Udemy</a> I was taking. But those weren't presentable with some decent UI, and polish. Plus if I were to demo something, I wanted multiple people to enjoy it at once.

I decided to pick up my project Vector Shot again because it was the game I made I was most proud of, it felt the most polished (at the time), and I wanted to rework the code because it was really messy.

### Development

I don't know where to begin with this project. A lot of the code last year was really awful. I spent a good part of the first day or two just refactoring the code, giving everything that wasn't a 0 or 1 a variable, revealing them in the inspector without making it public, etc. After I refactored the code and fixed any bugs that was still left over - I had one bug where the lasers would disappear out of no where sometimes... can't remember how I fixed it but it was fixed! - I would move on to my next big task, controller support.

I started tooling around with Unity's Input Manager, and it wasn't difficult to say the least. In order to support multiple players, I would have to add multiple Horizontal inputs for separate controllers. It became easier just to open the InputManager file in NotePad++, and copy and past the section for each controls but replace the name with "Horizontal_P2" and etc.

### Final Words

As I look back on this re-envisioning of my project, I'm pretty happy with the way it turned out. I was able to get multiple controllers to play the game, and the folks at my office had fun playing it. They found difficulty in playing the game on the controller for a bit, they stumbled mostly with the reloading mechanic, but they learned how to deal with it.

### Links

<a href = "https://github.com/anthonymendez/Vector-Shot">Github Repository</a>