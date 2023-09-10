import React from 'react';
import { ScreenParentContainer } from './ScreenParentContainer';

export function ScreenGrandParentContainer() {
  return (
    <div>
      <div id='ScreenGrandParentContainer'>I am ScreenGrandParent Component</div>
      <ScreenParentContainer />
    </div>
  );
}
