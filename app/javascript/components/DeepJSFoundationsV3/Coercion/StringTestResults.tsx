import React from 'react';
import { formatForDisplay } from '@app/shared/helpers';

interface IProps {
  param1: any;
  param2: any;
  result: string;
}
export function StringTestResults({ param1, param2, result }: IProps) {
  const param1Formatted = formatForDisplay(param1);
  const param2Formatted = formatForDisplay(param2);
  const formattedOUtput = `stringNumberTest(${param1Formatted}, ${param2Formatted})`;

  return (
    <div>
      Results for StringNumberTest of {formattedOUtput} :: {result}
    </div>
  );
}
