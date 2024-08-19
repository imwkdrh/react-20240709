import React from 'react';
import Component, { FunctionComponent } from './component/Component';

import './App.css';
import CurlyBraces, { TodoList } from './component/CurlyBraces';

function App() {
  return (
    <>
    {/* < Component /> */}
      {/* <FunctionComponent /> */}
      <CurlyBraces />
      <TodoList />
    </>
  );
}

export default App;
