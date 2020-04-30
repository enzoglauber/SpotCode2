import 'app.scss';
import 'react-bulma-components/dist/react-bulma-components.min.css';

import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Menu from './components/common/menu';
import Routes from './routes';


const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Menu />
        <Routes />
      </BrowserRouter>
    </Fragment>
  );
}
export default App;