# PageScroll
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/ZhengHe-MD/PageScroll/master/LICENSE)

this is a react component that implements the [ScrollTrigger](https://github.com/terwanerik/ScrollTrigger)

# Demo

You can see the demo in the github page of [terwanerik/ScrollTrigger](https://terwanerik.github.io/ScrollTrigger/)

# Install
```
npm install pagescroll
```

# Properties

Just give you the PageScroll's propTypes in source code
```
PageScroll.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.shape({
    customized: PropTypes.bool,
    content: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.object,
    ]),
  }))
}
```

To make it clear:

* `customized`: bool - means whether it is a cutomized content. If it is false, the component will take the content as an array of strings, and display the string one by one with the tag from h1 -> h2 -> h3. If it is true, the component will take the content as an JSX object. Feel free to design any JSX object.

* `content`: array of strings or a JSX object - explained in `customized`

## example props

```
import React from 'react';
const data = {
  pages: [
    {
      customized: false,
      content: [
        'ScrollTrigger',
        'Add scroll based animations to your site with ease.',
      ],
    },
    {
      customized: false,
      content: [
        'CSS Animations',
        'All animations are triggered by classes, so you can take advantage of the power that CSS3 animations give you.'
      ],
    },
    {
      customized: false,
      content: [
        'Vanilla JS',
        'It\'s written in vanilla javascript, so you can use it with any framework.'
      ],
    },
    {
      customized: false,
      content: [
        'Request Animation Frame',
        'It uses the window.requestAnimationFrame method so it doesn\'t jack the users scroll. Animations are triggered when the browser is ready for it.'
      ]
    },
    {
      customized: false,
      content: [
        'Simple syntax',
        'You define the options inside the HTML attribute, so after you have initialised the ScrollTrigger you don\'t have to touch JavaScript again.'
      ],
    },
    {
      customized: true,
      content: <div>
                 <h1>Open source</h1>
                 <h2>The project, with documentation, is on <a href="https://github.com/terwanerik/ScrollTrigger">GitHub</a>. Give it some love!</h2>
                 <h3>Written by <a href="https://erikterwan.com" target="_blank">Erik Terwan</a></h3>
               </div>
    }
  ]
}
```
