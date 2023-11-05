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
import { DefaultPage } from '@app/components/Welcome/DefaultPage';
import { IamSearchUsers } from '@app/components/Axios/IamSearchUsers';
import { WelcomeToCourse } from '@app/components/ModernReactWithRouterUdemyCourse/WelcomeToCourse';
import { WelcomeToCourse as JSWelcomeToCourse } from '@app/components/DeepJSFoundationsV3/WelcomeToCourse';
import { WelcomeToCourse as MaterialUiWelcomeToCourse } from '@app/components/MaterialUiCourse/WelcomeToCourse';
import { courseRoutes as materialUiCourseRoutes } from '@app/components/MaterialUiCourse/courseRoutes';
import { WelcomeToCourse as AxiosPractice } from '@app/components/Axios/WelcomeToCourse';
import { courseRoutes as axiosCourseRoutes } from '@app/components/Axios/courseRoutes';
import { courseRoutes } from '@app/components/ModernReactWithRouterUdemyCourse/courseRoutes';
import { courseRoutes as deepJsCourseRoutes } from '@app/components/DeepJSFoundationsV3/courseRoutes';
import { courseRoutes as flexboxCourseRoutes } from '@app/components/FlexDisplay/courseRoutes';
import { WelcomeToCourse as FlexboxPractice } from '@app/components/FlexDisplay/WelcomeToCourse';
import { FlexContainerDisplay } from '@app/components/FlexDisplay/FlexContainerDisplay';
import { Profile } from '@app/components/ModernReactWithRouterUdemyCourse/Section-3/Profile';
import { AnimalShow } from '@app/components/ModernReactWithRouterUdemyCourse/Section-4/AnimalShow';
import { PollyfillObjectIs } from '@app/components/DeepJSFoundationsV3/PolyfillObjectIs';
import { DisplayImages } from '@app/components/ModernReactWithRouterUdemyCourse/Section-5/DisplayImages';
import { CoercionImplementation } from '@app/components/DeepJSFoundationsV3/Coercion/CoercionImplementation';
import { EqualityImplementation } from '@app/components/DeepJSFoundationsV3/Equality/EqualityImplementation';
import { TypographyImplementation } from '@app/components/MaterialUiCourse/InputsFormControls/TypographyImplementation';
import { CenteringItem } from '@app/components/FlexDisplay/CenteringItem';
import { HolyGrail } from '@app/components/FlexDisplay/HolyGrail';
import { ResponsiveNavbar } from '@app/components/FlexDisplay/ResponsiveNavbar';
import { VariableHeights } from '@app/components/FlexDisplay/VariableHeights';
import { CardsFooter } from '@app/components/FlexDisplay/CardsFooter';
import { BookListShowEdit } from '@app/components/ModernReactWithRouterUdemyCourse/Section-6/BookListShowEdit';
import { BookListShowEdit as PersistBookListShowEdit } from '@app/components/ModernReactWithRouterUdemyCourse/Section-7/BookListShowEdit';
import { BookListShowEditWrappedInProvider } from '@app/components/ModernReactWithRouterUdemyCourse/Section-8/BookListShowEditWrappedInProvider';
import { UseEffectStaleReference } from '@app/components/ModernReactWithRouterUdemyCourse/Section-9/useEffectStaleReference';
import { UseEffectStaleReferenceFixedWithCleanup } from '@app/components/ModernReactWithRouterUdemyCourse/Section-9/useEffectStaleReferenceFixedWithCleanup';
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
        <Route path={routes.AXIOS} element={<AxiosPractice />}>
          <Route path={axiosCourseRoutes.SEARCH_USER} element={<IamSearchUsers />} />
          <Route path={axiosCourseRoutes.CREATE_USER} element={<AxiosUserCreation />} />
        </Route>
        <Route path={routes.FLEXBOX_DISPLAY} element={<FlexboxPractice />}>
          <Route
            path={flexboxCourseRoutes.FLEXBOX_CONTAINER_DISPLAY}
            element={<FlexContainerDisplay />}
          />
          <Route path={flexboxCourseRoutes.CENTERING_ITEMS} element={<CenteringItem />} />
          <Route path={flexboxCourseRoutes.HOLYGRAIL} element={<HolyGrail />} />
          <Route path={flexboxCourseRoutes.RESPONSIVE_NAVBAR} element={<ResponsiveNavbar />} />
          <Route path={flexboxCourseRoutes.VARIABLE_HEIGHTS} element={<VariableHeights />} />
          <Route path={flexboxCourseRoutes.CARDS_FOOTER} element={<CardsFooter />} />
        </Route>
        <Route path={routes.DEEP_JS_FOUNDATIONS} element={<JSWelcomeToCourse />}>
          <Route path={deepJsCourseRoutes.OBJECT_IS} element={<PollyfillObjectIs />} />
          <Route path={deepJsCourseRoutes.COERCION_TEST} element={<CoercionImplementation />} />
          <Route
            path={deepJsCourseRoutes.EQUALITY_IMPLEMENTATION}
            element={<EqualityImplementation />}
          />
        </Route>
        <Route path={routes.MATERIAL_UI_COURSE} element={<MaterialUiWelcomeToCourse />}>
          <Route path={materialUiCourseRoutes.SECTION_1} element={<TypographyImplementation />} />
        </Route>
        <Route path={routes.MODERN_REACT_WITH_ROUTER} element={<WelcomeToCourse />}>
          <Route path={courseRoutes.SECTION_3} element={<Profile />} />
          <Route path={courseRoutes.SECTION_4} element={<AnimalShow />} />
          <Route path={courseRoutes.SECTION_5} element={<DisplayImages />} />
          <Route path={courseRoutes.SECTION_6} element={<BookListShowEdit />} />
          <Route path={courseRoutes.SECTION_7} element={<PersistBookListShowEdit />} />
          <Route path={courseRoutes.SECTION_8} element={<BookListShowEditWrappedInProvider />} />
          <Route path={courseRoutes.SECTION_9_1} element={<UseEffectStaleReference />} />
          <Route
            path={courseRoutes.SECTION_9_2}
            element={<UseEffectStaleReferenceFixedWithCleanup />}
          />
        </Route>
        <Route path={routes.ROOT} element={<WelcomeUser />} />
        <Route path='*' element={<DefaultPage />} />
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
