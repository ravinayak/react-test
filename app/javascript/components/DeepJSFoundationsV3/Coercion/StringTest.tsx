import React from 'react';
import { formatForDisplay } from '@app/shared/helpers';

interface IProps {
  param: any;
  result: string;
}
export function StringTest({ param, result }: IProps) {
  const paramFormatted = formatForDisplay(param);
  const str = `stringTest(${paramFormatted})`;

  return (
    <div style={{ whiteSpace: 'pre-wrap' }}>
      Results for StringTest of {str} :: {result}
    </div>
  );
}
