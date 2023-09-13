import React from 'react';
import './App.css';
// import { ParentCounterWithProps } from '@app/components/RenderHooksTest/ParentCounterWithProps';
// import { HolyGrail } from '@app/components/FlexDisplay/HolyGrail';
// import { CopyCutPasteKeyboardPress } from '@app/components/GreetTest/CopyCutPasteKeyboardPress';
// import { ProviderWrappedComponent } from '@app/components/GreetTest/ProviderWrappedComponent';
// import { Greet } from '@app/components/GreetTest/Greet';
// import { Counter } from '@app/components/GreetTest/Counter';
// import { InputAmount } from '@app/components/GreetTest/InputAmount';
// import { SelectOptions } from '@app/components/GreetTest/SelectOptions';
// import { FileUploader } from '@app/components/GreetTest/FileUploader';
// import { Profile } from '@app/components/ModernReactWithRouterUdemyCourse/Section-3/Profile';
// import { ResponsiveNavbar } from '@app/components/FlexDisplay/ResponsiveNavbar';
// import { CenteringItem } from '@app/components/FlexDisplay/CenteringItem';
// import { VariableHeights } from '@app/components/FlexDisplay/VariableHeights';
// import { CardsFooter } from '@app/components/FlexDisplay/CardsFooter';
import { UsersApi } from '@app/components/MockingHttpRequests/UsersApi';
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
      {/* <ParentCounterWithProps /> */}
      {/* <ResponsiveNavbar /> */}
      {/* <CenteringItem /> */}
      {/* <VariableHeights /> */}
      {/* <CardsFooter /> */}
      {/* <HolyGrail /> */}
      <UsersApi />
    </div>
  );
}
