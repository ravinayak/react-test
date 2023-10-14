import React from 'react';
import { DEEP_JS_FOUNDATIONS_OBJECT_IS } from '@app/shared/Constants';
import { PolyfillTestResults } from './PolyfillTestResults';
import '@app/src/App.css';

export function PollyfillObjectIs() {
  const negZero = (element) => typeof element == 'number' && 1 / element === -Infinity;

  const polyfillImplementation = (a: any, b: any): boolean => {
    const aNegZero = negZero(a);
    const bNegZero = negZero(b);
    if (aNegZero || bNegZero) {
      return aNegZero && bNegZero;
      // eslint-disable-next-line no-else-return
    } else if (Number.isNaN(a) && Number.isNaN(b)) {
      return true;
    } else {
      return a === b;
    }
  };

  const polyfillTestArr = [];

  DEEP_JS_FOUNDATIONS_OBJECT_IS.forEach((paramArray) =>
    polyfillTestArr.push(
      <PolyfillTestResults
        param1={paramArray[0]}
        param2={paramArray[1]}
        result={polyfillImplementation(paramArray[0], paramArray[1]).toString()}
      />,
    ),
  );

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
        marginTop: '16px',
        width: '1800px',
        height: '900px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'column',
          alignContent: 'center',
        }}
      >
        <div style={{ marginLeft: '30px' }}>Object.is Polyfill Implementation Tests Results </div>
        <div>**********************************************************</div>
      </div>
      <div className='div-polyfill'>{polyfillTestArr}</div>
    </div>
  );
}
