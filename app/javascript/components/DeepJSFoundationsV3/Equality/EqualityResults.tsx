import React from 'react';
import { formatForDisplay } from '@app/shared/helpers';
import './EqualityImplementation.css';

interface IProps {
  inputValue: any;
  testArray: any[];
  result: boolean;
}
export function EqualityResults({ inputValue, testArray, result }: IProps) {
  const testArrayFmt = formatForDisplay(testArray);
  const resultStr = String(result);
  const formattedOutput = `EqualityTest(${inputValue}, ${testArrayFmt}) => `;
  return (
    <div className='border-below-div flex-display row-flex-direction'>
      <div>{formattedOutput}</div>
      <div style={{ marginLeft: '10px' }}>Result :: {resultStr}</div>
    </div>
  );
}
