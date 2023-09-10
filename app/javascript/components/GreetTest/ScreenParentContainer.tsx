import React from 'react';
import { ScreenChild } from './ScreenChild';

export function ScreenParentContainer() {
  return (
    <div>
      <div id='ScreenParentContainer'>I am ScreenParent Component</div>
      <ScreenChild />
    </div>
  );
}
