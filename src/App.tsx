import React from 'react';
import Component, { FunctionComponent } from './component/Component';

import './App.css';
import CurlyBraces, { TodoList } from './component/CurlyBraces';
import Properties from './component_manage/Properties';
import ConditionalRender from './component_manage/example/ConditionalRender';

function App() {
  return (
    <>
    {/* < Component /> */}
      {/* <FunctionComponent /> */}
      {/* <CurlyBraces /> */}
      {/* <TodoList /> */}
      {/* <Properties/> */}
      <ConditionalRender/>
    </>
  );
}

export default App;
