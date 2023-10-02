import React from 'react';
import { logger } from '@app/lib/Logger';
import { validateHeaderValue } from 'http';
import { UseStateImplementation } from './UseStateImplementation';

let resetIndexFunction;

const { resetIndex, useState } = UseStateImplementation();

const displayMultipleStates = () => {
  // If this order changes in a component, say because of a condition or because of some condition
  // inside a loop, useState calls will be out of order and the values stored/referenced through index
  // will go in wrong order resulting in incorrect states
  //
  const [counter, setCounter] = useState(1);

  // if (testCondition) {
  // 		const [displayName, setDisplayName]] = useState<boolean>(false);
  //		setDisplayName(true);
  // }

  // If in the 1st call to this function (or for a component :: render), testCondition is false
  // useState defined in the condition will not be called. Hence, index at position 1 will point to valName
  // If testCondition becomes true in 2nd call to function (or for a component :: render), useState defined
  // in the condition will be called and it will point to position at index 1, and overwrite the existing value
  // valName will incorrectly point to index at position 2, and the value referenced will be incorrect

  // Because, state array is used to hold the values referenced by useState, index of array is used to keep
  // track of the values in state. If this order changes in a render, index position for values in state array
  // will be incorrect.

  // useState and other hooks must always be used in the same order in a component
  // A condition or a while loop can change the order and hence hooks should not be called inside condition/loop

  const [valName, setValName] = useState('TestString');

  logger.info('Counter :: ', counter);
  logger.info('valName :: ', valName);

  if (counter !== 2) {
    setCounter(2);
  }
  if (valName !== 'New TestString') {
    setValName('New TestString');
  }

  resetIndexFunction = resetIndex;
};

export function UseStateRender() {
  displayMultipleStates();
  resetIndexFunction();
  displayMultipleStates();
  logger.info('UseStateComponent Rendered');
  return (
    <center>
      <div style={{ marginTop: '255px' }}>UseStateRender Component Called</div>
    </center>
  );
}
