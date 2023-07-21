# TRVL Landing Page 🏔️

Welcome to TRVL Landing Page, a React-based web application for showcasing hiking and outdoors-related content. This project provides a visually appealing interface to engage users and help them plan their hiking adventures. 🚶‍♂️🏞️

## Table of Contents

1. [Description](#description)
2. [Project Website](#project-website-link)                          
3. [Project Structure](#project-structure)
4. [Dependencies](#dependencies)
5. [Strugles](#strugles)

## Description

TRVL Landing Page is a single-page application built using React, designed to offer a smooth and interactive experience for users interested in hiking. The page includes various sections that cover essential information about hiking levels, gear selection, and map reading. 🥾🌲

This project was build with an idea to upgrade myself as a future Front-end programer, since the main idea of this position is to implement the design using code. So the same did I: I searched for design on Dribble and Figma websites and found one, that was good looking for me and which has something interesting to think about while buildng. 
### So, that's how the initial design looks like: 
![image](https://github.com/Maxv1z/trvl-landing-page/assets/122612827/1db28b0a-21b9-4c51-923c-24635235e394)

# [Project Website Link](https://trvl-landing-page.netlify.app/)
---

## Project Structure
```
📁 src/
 ├─ 📁 components/
 │   ├─ 📁 content/
 │   │   ├─ 01.png
 │   │   ├─ 02.png
 │   │   ├─ 03.png
 │   │   ├─ content.style.scss
 │   │   ├─ content.component.jsx
 │   ├─ 📁 footer/
 │   │   ├─ footer.style.scss
 │   │   ├─ footer.component.jsx
 │   ├─ 📁 hero/
 │   │   ├─ hero.style.scss
 │   │   ├─ hero.component.jsx
 │   ├─ 📁 mobile/
 │   │   ├─ mobile.style.scss
 │   │   ├─ mobile.component.jsx
 │   ├─ 📁 navbar/
 │   │   ├─ navbar.style.scss
 │   │   ├─ navbar.component.jsx
 │   ├─ 📁 section-track/
 │   │   ├─ section-track.style.scss
 │   │   ├─ section-track.component.jsx
 ├─ App.css
 ├─ App.js
 ├─ index.js
```

The `src` folder contains various components that compose the landing page. Images and assets are stored in their respective directories. The `App.js` file serves as the main entry point for the application.

## Dependencies

The TRVL Landing Page project relies on the following external packages and libraries:
- [framer-motion](https://www.npmjs.com/package/framer-motion) - A library for animations and transitions in React applications. Here it was used for text appear on scroll animation. Later I'm planing to study it fully and use in all of the projects.
- [sass](https://www.npmjs.com/package/sass) - A popular CSS extension language, which allows writing styles in parent styles, what is more convinient and for what mainly was used.

# Strugles
There are some thigs, which were the hardest to implement and I'd like to show solved it
## Problems
- Section-track sidebar
- Reusable Content component
  The problem here was, that the design have the only element with reversed view (image is on the left side and the text on the right). The idea to have three or at least two different components to make it look good is not bad, but it was interesting for me, how I can do it only using one component. The obvius thought was, that I need to paste different styles for this element and it was done by using props to this unique element. Other elements can take these props for custom component styles, but they weren't pasted there, so nothing chaged for the rest of the components.
 ```
const Content = ({ textAbove, textBefore, mainText, header, image, side1, side2, reverseContainer, textBeforeStyle, textStyle,pictureStyle, }) => {
 ...
}
 ```
And every element has its own style to place it right (variable with styles entered in ***style*** ): 
```
 <div className="container" style={reverseContainer}>
        <motion.div ref={ref} initial="hidden" animate={controls} variants={variants}>
          <div className={`${side2}`}>
            <div className="text-before" style={textBeforeStyle}>
              {textBefore}
            </div>
            <div className="text">
              <p className="text-above" style={textStyle}>
                <i className="palka">{palka}</i>
                {textAbove}
              </p>
              <p className="header" style={textStyle}>
                {header}
              </p>
              <p className="main-text" style={textStyle}>
                {mainText}
              </p>
              <p className="bottom-text" style={textStyle>
                read more <i class="arrow">{rightArrow}</i>
              </p>
            </div>
          </div>
        </motion.div>
        <div className={`${side1}`}>
          <div className="picture" style={pictureStyle}>
            <img src={image} alt="" />
          </div>
        </div>
      </div>
```
### Styles where entered like this:
```
const reverseContainer = {
    direction: "rtl",
  };
const textBeforeStyle = {
    left: '-3.5rem',
};
const textStyle = {
    direction: "ltr",
};
const pictureStyle = {
    margin: 'auto auto auto 0.5rem',
  };
```

