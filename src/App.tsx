import React from 'react';
import Component, { FunctionComponent } from './component/Component';

import './App.css';
import CurlyBraces, { TodoList } from './component/CurlyBraces';
import Properties from './component_manage/Properties';
import ConditionalRender from './component_manage/example/ConditionalRender';
import Example2 from './component_manage/example/Example2';
import ListRender from './component_manage/example/ListRender';
import EventComponent from './interaction/EventComponent';
import StateComponent from './interaction/StateComponent';
import FowardingComponent from './interaction/ForwardingComponent';
import HookComponent1 from './hook/HookComponent1';
import HookComponent2 from './hook/HookComponent2';
import CustomHook from './hook/CustomHook';

function App() {
  return (
    <>
    {/* < Component /> */}
      {/* <FunctionComponent /> */}
      {/* <CurlyBraces /> */}
      {/* <TodoList /> */}
      {/* <Properties/> */}
      {/* <ConditionalRender/> */}
      {/* <Example2 /> */}
      {/* <ListRender/> */}
      {/* <EventComponent/> */}
      {/* <StateComponent /> */}
      {/* <FowardingComponent /> */}
      {/* <HookComponent1 /> */}
      {/* <HookComponent2 /> */}
      <CustomHook />
    </>
  );
}

export default App; 
