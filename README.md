# Frontend Mentor - Planets fact site solution

This is a solution to the [Planets fact site challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/planets-fact-site-gazqN8w_f). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- View each planet page and toggle between "Overview", "Internal Structure", and "Surface Geology"

### Screenshot

![](https://i.imgur.com/RWeSuIJ.png)

### Live Site Link
- Live Site URL: [Planets Fact Site](https://kristiingco-planets-fact-site.netlify.app/)

## My process

### Built with

- SCSS
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [React Router DOM](https://www.npmjs.com/package/react-router-dom) - React library for routing
- [Framer Motion](https://www.framer.com/motion/) - React animation library

### What I learned

- I learned a lot about CSS selectors and pseudo-classes I don't normally use. For example, I just learned that about the `:not()`
pseudo-class existing, and it was totally helpful in implementing the hover state for the buttons. I didn't even know chaining CSS pseudo-classes was possibe until I tried it out.

```css
button:not(.active):hover {
    background-color: rgba(255,255,255, 0.2);
}
```
- I learned how to utilize Framer Motion for page transitions! It was simple to implement, yet really interesting to see how it was able to work. 
- I am now more acquainted with React Router v6 and have learned of changes such as the Switch component now becoming Routes. 
- This was the first time I used the useLocation() hook to be able to keep track of URL changes which was necessary to update state everytime a page changed.


### Continued development

- **Using a React Framework** - I want to learn how to use a React framework to apply it in another project. I am planning to utilize Gatsby or Next.js.
- **Styled Components** - I wish to utilize Styled Components in my next project, as I was unable to do so for this project.
- **CSS Grid** - I wish to implement CSS Grid as an alternative way to implement layouts 
- **Tailwind CSS** - I want to be able to learn how to use Tailwind CSS in my next project.
- **BEM CSS convention** - I recently learned this while working on this project. I wish to use this in my next project!

### Useful resources

- [Zero to Mastery](https://zerotomastery.io/) - I recently joined this community as a way to improve my skills through lectures and hands-on exercises. What I have learned so far through reviewing the Web Developer course and the React course has been insanely invaluable in how I was able to work through this project.
- [Kevin Powell's Conquering Responsive Layouts](https://courses.kevinpowell.co/conquering-responsive-layouts) - This course strenghened my fundamentals in designing responsive layouts with flexbox. I have learned great tips and tricks that helped me through creativing responsiveness with more ease.
- [Smooth Page Transitions with React Router and Framer Motion](https://www.youtube.com/watch?v=pTinipkJBcs) - A great video tutorial simplifying how to implement Framer Motion in your project to add page transitions.

## Author
- Frontend Mentor - [@kristiingco](https://www.frontendmentor.io/profile/kristiingco)
- LinkedIn - [Kristi Ingco](https://www.linkedin.com/in/kristianaingco/)

## Acknowledgments

I'd like to thank the Frontend Mentor community for providing amazing resources in the Slack Channel! I have learned more about best practices and useful tools, and I will continue to strive learning and get better.
