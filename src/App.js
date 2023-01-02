import React from 'react';
import './App.css';

import Tabs from "./components/Tabs";
function App() {
  return (
    <div>
    <h1>Tabs Demo</h1>
    <Tabs>
      <div label="Slider">
         <em>Hey</em>!
      </div>
      <div label="Video">
         <em>Hello</em>!
      </div>
      <div label="Comparison">
         <em>Hi</em>!
      </div>
    </Tabs>
  </div>
  );
}

export default App;