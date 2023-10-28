import React from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from '@app/config/routes';
import Button from '@mui/material/Button';
import { DEEP_JS_EQUALITY_TEST, DEEP_JS_EQUALITY_ARRAY } from '@app/shared/Constants';
import { formatForDisplay, keyGenerator } from '@app/shared/helpers';
import { logger } from '@app/lib/Logger';
import _ from 'lodash';
import { EqualityResults } from './EqualityResults';
import './EqualityImplementation.css';

import '@app/src/App.css';

export function EqualityImplementation() {
  const navigate = useNavigate();
  const equalityResults = [];
  let num = 1;

  const negZeroCheck = (value: any): boolean => Object.is(value, -0);

  const nanInfinitycheck = (value: any): boolean =>
    Object.is(value, NaN) || Object.is(value, Infinity) || Object.is(value, -Infinity);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const strCoerciveMatch = (inputValue: any, arrayValue: any): any[] => {
    const result = [];
    // eslint-disable-next-line eqeqeq
    if (Object.is(inputValue, arrayValue)) {
      result.push(arrayValue);
      return result;
    }
    // eslint-disable-next-line eqeqeq
    if (typeof inputValue == 'string' && inputValue.trim() != '') {
      const inputValueNum = Number(inputValue);
      if (negZeroCheck(inputValueNum) && negZeroCheck(arrayValue)) {
        result.push(arrayValue);
        return result;
      }
      if (!nanInfinitycheck(inputValueNum) && Object.is(inputValueNum, arrayValue)) {
        result.push(arrayValue);
        return result;
      }
    }
    if (
      typeof inputValue === 'number' &&
      negZeroCheck(inputValue) &&
      (negZeroCheck(arrayValue) || Object.is(arrayValue, '-0'))
    ) {
      result.push(arrayValue);
      return result;
    }
    // eslint-disable-next-line eqeqeq
    if (
      typeof inputValue === 'number' &&
      !negZeroCheck(inputValue) &&
      !nanInfinitycheck(inputValue)
    ) {
      const inputValueStr = String(inputValue);
      if (Object.is(inputValueStr, arrayValue)) {
        result.push(arrayValue);
        return result;
      }
    }
    if (inputValue == null && arrayValue == null) {
      result.push(arrayValue);
      return result;
    }
    return result;
  };

  const strCoerciveMatchFromFE = (inputValue: any, arrayValue: any) => {
    const ret = [];
    if (Object.is(inputValue, arrayValue)) {
      ret.push(arrayValue);
    } else if (inputValue == null && arrayValue == null) {
      ret.push(arrayValue);
    } else if (typeof inputValue === 'boolean' && typeof arrayValue === 'boolean') {
      if (inputValue == arrayValue) {
        ret.push(arrayValue);
      }
    } else if (
      typeof inputValue === 'string' &&
      inputValue.trim() != '' &&
      !nanInfinitycheck(Number(inputValue)) &&
      typeof arrayValue === 'number'
    ) {
      if (Object.is(Number(inputValue), arrayValue)) {
        ret.push(arrayValue);
      }
    } else if (
      typeof inputValue === 'number' &&
      !nanInfinitycheck(inputValue) &&
      typeof arrayValue === 'string' &&
      arrayValue.trim() != ''
    ) {
      if (Object.is(inputValue, Number(arrayValue))) {
        ret.push(arrayValue);
      }
    }
    return ret;
  };

  DEEP_JS_EQUALITY_TEST.forEach((givenObject) => {
    const result = [];
    DEEP_JS_EQUALITY_ARRAY.forEach((arrayElement) => {
      let match = [];
      match = strCoerciveMatchFromFE(givenObject.input, arrayElement);
      if (match.length == 1) {
        result.push(match[0]);
      }
    });
    const resultOfMatch = _.isEqual(
      formatForDisplay(result),
      formatForDisplay(givenObject.testArray),
    );
    logger.info(
      `Match :: ${formatForDisplay(result)} -- ${formatForDisplay(givenObject.testArray)}`,
    );
    equalityResults.push(
      <EqualityResults
        // eslint-disable-next-line no-plusplus
        key={`${keyGenerator(num++)}`}
        inputValue={givenObject.input}
        testArray={givenObject.testArray}
        result={resultOfMatch}
      />,
    );
  });
  return (
    <div id='equality-implementation'>
      <div className='flex-column-justify-align-center'>
        <div className='heading-introduction'>Equality Implementation - Find All </div>
        <div>********************************************************************************</div>
      </div>
      <div id='equality-results' className='equality-results-div'>
        {equalityResults}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant='outlined'
          type='submit'
          id='btn-back-button'
          sx={{ mt: 4, mb: 8 }}
          onClick={() =>
            navigate(routes.DEEP_JS_FOUNDATIONS, { state: { displayWelcomePage: true } })
          }
        >
          Back to Course Sections Listing Page
        </Button>
      </div>
    </div>
  );
}
