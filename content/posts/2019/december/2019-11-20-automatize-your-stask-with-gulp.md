---
title: "Build a front-end workflow with Gulp v4.0"
slug:
description: ""
date: 2019-11-20 13:16:13
author: Heraldo
tags:
    - gulp
    - front-end
    - javascript
cover:
fullscreen: false
---

So to begin, what is Gulp.js? Gulp.js is a tool to automate and enhance your development workflow made in Javascript. With this tool, you can achieve some tasks like compiling your SCSS/SASS or any other pre-processor you want to use to CSS, optimize images for the web, compiling your javascript scripts, and generating sprites.

Web development has evolved very fast, and with this evolution, new patterns surge. To help us with this evolution, things like SCSS, Babel, PostCSS, came to improve our workflow.

### Why use Gulp?

Performance - By using the power of streams of Nodejs, it allows us to make very fast builds.
Vast Ecosystem - Use NPM modules to do anything you want + over 2000 curated plugins for streaming file transformations
Simple - it's a small API, is easy to learn and simple to use

How do we start?
First, we should start a project with `npm init -y` for a basic setup. You will get a package.json file where our dependencies will be listed.

```json
{
    "name": "gulp",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC"
}
```

In this project, we will be using SCSS as pre-processor, Rollup as our javascript bundler, and Nunjucks as a template engine. But remember that you can use many other tools with Gulp, like Webpack, Less, Ejs, and many more as an alternative.

Let's create some files and structure for your front-end project.
