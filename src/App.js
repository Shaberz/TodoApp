import React from 'react';
import './App.css';
import {Header,
        TodoApp,
        Footer
        } from './Component'

function App() {
  return (
    <div className="App">
      <Header />
      <TodoApp/>
      <Footer/>
      
      
    </div>
  );
}

export default App;
