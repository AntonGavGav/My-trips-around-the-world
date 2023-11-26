import Header from '../Header';
import Content from './Content';
import TopInfo from './TopInfo';
import React from 'react';


function App() {


  return (
    <div>
      <Header id="header"/>
      <TopInfo />
      <div>
        <Content />
      </div>
    </div>
  );
}

export default App;
