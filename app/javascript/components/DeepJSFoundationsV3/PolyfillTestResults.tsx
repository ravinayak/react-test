import React from 'react';

interface IProps {
  param1: any;
  param2: any;
  result: string;
}
export function PolyfillTestResults({ param1, param2, result }: IProps) {
  const negZeroNumberCheck = (element) => {
    let elementStr: string = '';
    if (Object.is(element, -0)) {
      elementStr += '-';
    } else if (typeof element === 'number' && !Number.isNaN(element)) {
      elementStr += 'Number ';
    }
    return elementStr + element;
  };
  const str1 = negZeroNumberCheck(param1);
  const str2 = negZeroNumberCheck(param2);

  return (
    <div key={`${param1}-${param2}`}>
      Results for Object.is comparison of {str1} and {str2} :: {result}
    </div>
  );
}
