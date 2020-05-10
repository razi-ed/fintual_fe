import React from 'react';
import { render } from 'react-dom';

import './index.css';

const App = () => {
  return <div>{'Hello world!'}</div>;
};

render(<App />, document.getElementById('app'));
