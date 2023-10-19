import React from 'react';
import { negZeroNumberCheck } from '@app/shared/helpers';

interface IProps {
  param1: any;
  param2: any;
  result: string;
}
export function PolyfillTestResults({ param1, param2, result }: IProps) {
  const str1 = negZeroNumberCheck(param1);
  const str2 = negZeroNumberCheck(param2);

  return (
    <div>
      Results for Object.is comparison of {str1} and {str2} :: {result}
    </div>
  );
}
