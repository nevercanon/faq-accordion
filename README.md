# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

I will include screenshots in my GitHub repository.

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

There were two main things that I learned with this project. First was how to make the accordion, with the sections expanding when clicked on. I was proud to have figured out how to do that in JavaScript on my own. I still can't figure out why forEach isn't working for my projects. I finally got it to work for just making the question titles bold. I'm hoping I can learn how to make it work, because making individual event listeners is taking up a lot of space.

The second main thing I learned involved the positioning of the images in the desktop view. I couldn't figure out how to make part of the image of the woman cut off for a long time. I finally watched a YouTube video and learned I needed to use overflow: hidden, but it took a while to figure it out since my html was set up different from the person's who made the video. Then after position the box using position: absolute, I thought I had finished the project. But I realized after expanding multiple questions that it moved the box upwards, so I had to rearrange my HTML a little bit and switch the positioning to fixed.

### Continued development

I really need to figure out why forEach isn't working for me. It only seemed to work when I used it immediately after initializing the variables that I was adding the event listener to, but I would prefer to be able to initialize the variable and then use forEach on it. I also need to learn more about positioning and the best methods for postitioning images and backgrounds.

### Useful resources

- [Resource 1](https://www.svgviewer.dev/) - This website helps so much in viewing SVGs so that I can see how I need to set up my code.
- [Resource 2](https://www.w3schools.com/cssref/pr_background-position.php) - I read this to refresh my knowledge on background positioning.
- [Resource 3](https://www.w3schools.com/css/css_rwd_images.asp) - This taught me how to make my images responsive so that they would grow and shrink as the screen does.


## Author

- Frontend Mentor - [@nevercanon](https://www.frontendmentor.io/profile/nevercanon)
- GitHub- [@nevercanon](https://www.github.com/nevercanon)


## Acknowledgments

Thanks to Coder Coder for her YouTube video that showed me how I needed to use overflow: hidden on this project.
