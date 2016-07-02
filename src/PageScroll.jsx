import React, { Component, PropTypes } from 'react';
import './scrollTrigger';
import './scrollTrigger.css';

const directions = ['Left', 'Right', 'Bottom', 'Up'];
const direction2property = {
  'Left': ['fromLeftIn', 'fromLeftOut'],
  'Right': ['fromRightIn', 'fromRightOut'],
  'Bottom': ['fromBottomIn', 'fromBottomOut'],
  'Up': ['scaleUpIn', 'scaleUpOut'],
};
// const PageScroll = () => <div>PageScroll</div>;
class PageScroll extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
    ScrollTrigger.init();
  }

  getPagesJSX() {
    const { pages } = this.props;
    return pages.map((page, pageIdx) => {
      const { customized, content } = page;
      if (!customized) {
        const contentJSX = content.map((word, wordIdx) => {
          // pick a random element from the array
          let dataScroll;
          const direction = directions[Math.floor(Math.random() * directions.length)];
          const property = direction2property[direction];
          if (pageIdx === 0) {
            dataScroll = `0 ${property[0]} ${property[1]}`;
          } else {
            dataScroll = `200 ${property[0]} ${property[1]}`;
          }
          console.log(dataScroll);
          switch (wordIdx+1) {
            case 1:
              return <h1 data-scroll={dataScroll} key={wordIdx}>{word}</h1>;
            case 2:
              return <h2 data-scroll={dataScroll} key={wordIdx}>{word}</h2>;
            case 3:
            default:
              return <h3 data-scroll={dataScroll} key={wordIdx}>{word}</h3>;
          }
        });
        return <div className="block" key={pageIdx}>{contentJSX}</div>
      } else {
        return <div className="block" key={pageIdx}>{content}</div>;
      }
    })
  }

  render() {
    const pagesJSX = this.getPagesJSX();
    return (
      <div>
        {pagesJSX}
      </div>
    );
  }

}

PageScroll.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.shape({
    customized: PropTypes.bool,
    content: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.object,
    ]),
  }))
}

export default PageScroll;
