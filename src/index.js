import React from 'react';
import { render } from 'react-dom';
import App from './App';

import '../node_modules/antd/dist/antd.css';
import './index.css';

// const App = () => {
//   return <div>{'Hello world!'}</div>;
// };

render(<App />, document.getElementById('app'));
