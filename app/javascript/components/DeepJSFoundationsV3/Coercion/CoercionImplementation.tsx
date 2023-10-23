import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { routes } from '@app/config/routes';
import {
  DEEP_JS_FOUNDATIONS_COERCION_STRING_TEST,
  DEEP_JS_FOUNDATIONS_COERCION_NUMBER_STRING_TEST,
} from '@app/shared/Constants';
import { StringTestResults } from './StringTestResults';
import { StringTest } from './StringTest';
import '@app/src/App.css';
import './Coercion.css';

export function CoercionImplementation() {
  const navigate = useNavigate();
  const nonWhitespaceCharLength = (input: any): number => {
    let len = 0;

    Array.from(input).forEach((element: string) => {
      if (element.match(/\s/) === null) {
        len += 1;
      }
    });
    return len;
  };
  const stringTest = (input: any): boolean => {
    // eslint-disable-next-line eqeqeq
    if (typeof input == 'string' && input.trim() !== '' && nonWhitespaceCharLength(input) >= 3) {
      return true;
    }
    return false;
  };

  const stringNumberTest = (a: any, b: any): boolean => {
    if (
      // eslint-disable-next-line eqeqeq
      (typeof a == 'string' || typeof a == 'number') &&
      // eslint-disable-next-line eqeqeq
      (typeof b == 'string' || typeof b == 'number')
    ) {
      const aNum = Number(a);
      const bNum = Number(b);
      if (aNum > 0 && bNum > 0 && Number.isInteger(aNum) && Number.isInteger(bNum) && aNum < bNum) {
        return true;
      }
      return false;
    }
    return false;
  };

  const stringTestComponents = DEEP_JS_FOUNDATIONS_COERCION_STRING_TEST.map((element) => (
    <StringTest key={`${element}`} param={element} result={`${stringTest(element)}`} />
  ));

  const stringNumberTestComponents = DEEP_JS_FOUNDATIONS_COERCION_NUMBER_STRING_TEST.map(
    (paramArray) => (
      <StringTestResults
        key={`${paramArray[0]}${paramArray[1]}`}
        param1={paramArray[0]}
        param2={paramArray[1]}
        result={`${stringNumberTest(paramArray[0], paramArray[1])}`}
      />
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
      }}
    >
      <div className='flex-column-justify-align-center'>
        <div className='heading-introduction'>
          Coercion Test - a. String Test b. StringNumber Test - Results{' '}
        </div>
        <div>
          ****************************************************************************************************
        </div>
      </div>
      <div className='div-coercion'>
        <div>{stringTestComponents}</div>
        <div>{stringNumberTestComponents}</div>
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
