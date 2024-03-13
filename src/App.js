import './App.scss';
import React from 'react';
import Content from './components/Content/Content';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="main_content">
        <div className="pogects">
          <Content />
        </div>
        <div className="right_sidebar">
          <div className="menu">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
