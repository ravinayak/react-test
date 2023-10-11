import '../../../wdyr'; // <--- first import
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from '@app/config/routes';
// import { GrandParent } from './GrandParent';
// import { Parent } from '@app/components/ParentChildAsProp/Parent';
// import { Child } from '@app/components/ParentChildAsProp/Child';
// import { UserContext } from '@app/components/ParentChildAsProp/UserContext';
// import { Parent } from '@app/components/ParentChild/Parent';
// import { Child } from '@app/components/ParentChild/Child';
// import { UserContext } from '@app/components/ParentChild/UserContext';
// import { Parent } from '@app/components/ParentChildAsRenderFunction/Parent';
// import { Child } from '@app/components/ParentChildAsRenderFunction/Child';
// import { UserContext } from '@app/components/ParentChildAsRenderFunction/UserContext';
// import { Parent } from '@app/components/ParentChildMemoized/Parent';
// import { UserContext } from '@app/components/ParentChildMemoized/UserContext';
// import { GrandParent } from '@app/components/GrandParentParentMemoizedChild/GrandParent';
// import { UserContext } from '@app/components/GrandParentParentMemoizedChild/UserContext';
// import { GrandParent } from '@app/components/GrandParentParentChildMemoized/GrandParent';
// import { UserContext } from '@app/components/GrandParentParentChildMemoized/UserContext';
// import { User } from '@app/types/User';
// import { Parent } from '@app/components/ParentChildMemoizedSubTree/Parent';
// import { UserContext } from '@app/components/ParentChildMemoizedSubTree/UserContext';
// import { Parent } from '@app/components/ParentChildIncorrectMemo/Parent';
// import { UserContext } from '@app/components/ParentChildIncorrectMemo/UserContext';
import { logger } from '@app/lib/Logger';
// import { Parent } from '@app/components/ParentChildContext/Parent';
// import { CounterContext } from '@app/components/ParentChildContext/CounterContext';
// import { Child } from '@app/components/ParentChildContext/Child';
// import { UserObject } from '@app/shared/UserObject';
// import { MountingLifecycleMethodsImplementation } from '@app/components/LifeCycleMethodsImplementation/MountingLIfecycleMethodsImplementation';
// import { ParentErrorComponent } from '@app/components/ErrorBoundaryImplementation/ParentErrorComponent';

// const ParentMemoized = React.memo(Parent);
// import { UseStateRender } from '@app/components/StateHooksImplementation/UseStateRender';
// import { FlexContainer } from '@app/components/FlexDisplay/FlexContainer';
import { AxiosUserCreation } from '@app/components/Axios/AxiosUserCreation';
import { WelcomeUser } from '@app/components/Welcome/WelcomeUser';
import { CircularColor } from '@app/components/ProgressIndicator/CircularColor';
import { AxiosUserCreatedForm } from '@app/components/Axios/AxiosUserCreatedForm';
import { IamSearchUsers } from '@app/components/Axios/IamSearchUsers';
import { IamSearchUserResult } from '@app/components/Axios/IamSearchUserResult';
import { FlexContainer } from '@app/components/FlexDisplay/FlexContainer';
// import { AxiosUserCreatedForm } from '@app/components/Axios/AxiosUserCreatedForm';

export function AppTest() {
  // const [userDetails, setUserDetails] = useState<User | undefined>(undefined);
  // const [counter, setCounter] = useState<number>(0);

  // let initialValue: number;
  // let counterContext: number;

  // if (userDetails === undefined) {
  //   setUserDetails(UserObject);
  // }
  logger.info('AppTest is being rendered');

  // const increment = () => {
  //   setCounter(counter + 1);
  // };

  // if (counter > 5) {
  // initialValue = counter;
  //   counterContext = counter;
  // }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.CREATE_USER} element={<AxiosUserCreation />} />
        <Route path={routes.SEARCH_USER} element={<IamSearchUsers />} />
        <Route path={routes.SEARCH_USER_RESULT} element={<IamSearchUserResult />} />
        <Route path={routes.USER_CREATED} element={<AxiosUserCreatedForm />} />
        <Route path={routes.CIRCULAR_COLOR} element={<CircularColor />} />
        <Route path={routes.FLEXBOX_DISPLAY} element={<FlexContainer />} />
        <Route path={routes.ROOT} element={<WelcomeUser />} />
      </Routes>
    </BrowserRouter>
    // <AxiosUserCreatedForm />
    // <FlexContainer />
    // <UserContext.Provider value={userDetails}>
    //   <Parent>
    //     <Child />
    //   </Parent>
    // </UserContext.Provider>
    // <ParentErrorComponent />
    // <MountingLifecycleMethodsImplementation />
    // <UseStateRender />
    // <CounterContext.Provider value={counterContext}>
    //   <div
    //     style={{
    //       margin: 'auto',
    //       textAlign: 'center',
    //     }}
    //   >
    //     <div id='counter'>GrandParent Counter :: {counter} </div>
    //     <br /> <br />
    //     <button id='increment-button' type='button' onClick={() => increment()}>
    //       Increment
    //     </button>
    //   </div>
    //   <ParentMemoized />
    // </CounterContext.Provider>
    // <Parent>
    //   <Child />
    // </Parent>
    // <GrandParent />
    // <UserContext.Provider value={userDetails}>
    // <div
    //   style={{
    //     margin: 'auto',
    //     textAlign: 'center',
    //   }}
    // >
    //   <div id='counter'>GrandParent Counter :: {counter} </div>
    //   <br /> <br />
    //   <button id='increment-button' type='button' onClick={() => increment()}>
    //     Increment
    //   </button>
    // </div>
    //   <Parent initialValue={initialValue}>
    //     <Child />
    //   </Parent>
    // </UserContext.Provider>
    // <UserContext.Provider value={userDetails}>
    // a. Pass Child component as a prop explicitly
    //   <Parent children={<Child />} />
    // b. Pass Child component as a prop implicitly as a component
    //   <Parent>
    //     <Child />
    //   </Parent>
    // c. Pass Child component as a prop and receive it as a prop in Parent element

    // a. Pass children as a render function
    //   <Parent children={() => <Child />} />
    // </UserContext.Provider>
    // <UserContext.Provider value={UserObject}>
    //   <Parent initialValue={0} />
    // </UserContext.Provider>
  );
  // return <GrandParent />;
}
AppTest.whyDidYouRender = true;
