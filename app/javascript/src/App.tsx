import React from 'react';
import './App.css';
import { Greet } from '@app/components/GreetTest/Greet';
// import { Counter } from '@app/components/GreetTest/Counter';
// import { InputAmount } from '@app/components/GreetTest/InputAmount';

export function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
      <Greet />
      {/* <InputAmount /> */}
    </div>
  );
}
