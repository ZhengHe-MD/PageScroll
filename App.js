import React from 'react';
import PageScroll from './src/PageScroll.jsx';
import data from './data';

const App = () => (
  <div>
    <PageScroll
      {...data}
    />
  </div>
);

export default App;
