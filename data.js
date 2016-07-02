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

export default data;
