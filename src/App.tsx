import React from 'react';
import Component, { FunctionComponent } from './component/Component';

import './App.css';
import CurlyBraces, { TodoList } from './component/CurlyBraces';
import Properties from './component_manage/Properties';
import ConditionalRender from './component_manage/example/ConditionalRender';
import Example2 from './component_manage/example/Example2';
import ListRender from './component_manage/example/ListRender';

function App() {
  return (
    <>
    {/* < Component /> */}
      {/* <FunctionComponent /> */}
      {/* <CurlyBraces /> */}
      {/* <TodoList /> */}
      {/* <Properties/> */}
      {/* <ConditionalRender/> */}
      <Example2 />
      {/* <ListRender/> */}
    </>
  );
}

export default App;
