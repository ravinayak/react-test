import React from 'react';
import './App.css';
import { ParentCounterWithProps } from '@app/components/RenderHooksTest/ParentCounterWithProps';
// import { CopyCutPasteKeyboardPress } from '@app/components/GreetTest/CopyCutPasteKeyboardPress';
// import { ProviderWrappedComponent } from '@app/components/GreetTest/ProviderWrappedComponent';
//import { Greet } from '@app/components/GreetTest/Greet';
// import { Counter } from '@app/components/GreetTest/Counter';
// import { InputAmount } from '@app/components/GreetTest/InputAmount';
// import { SelectOptions } from '@app/components/GreetTest/SelectOptions';
// import { FileUploader } from '@app/components/GreetTest/FileUploader';
// import { Profile } from '@app/components/ModernReactWithRouterUdemyCourse/Section-3/Profile';

export function App() {
  return (
    <div className='App'>
      {/* <header className='App-header'>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
      <Greet /> */}
      {/* <InputAmount /> */}
      {/* <SelectOptions /> */}
      {/* <FileUploader /> */}
      {/* <CopyCutPasteKeyboardPress /> */}
      {/* <ProviderWrappedComponent /> */}
      {/* <Profile /> */}
      <ParentCounterWithProps />
    </div>
  );
}
