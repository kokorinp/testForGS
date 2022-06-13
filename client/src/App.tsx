import React, { ReactElement } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

function App(): ReactElement {
  return (
    <div className="app">
      <div className="app__top">
        <Header />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
