import React from 'react';
import { logger } from '@app/lib/Logger';
import { Car } from '@app/types/Car';
import { useUserContext } from './UserContext';

interface IProps {
  arrayProp?: Array<Number>;
  carProp?: Car;
  handleClick?: Function;
}
export function Child({ arrayProp, carProp, handleClick }: IProps) {
  const user = useUserContext();
  const date = new Date();
  let arrayElements: string = '';
  arrayProp?.forEach((_index, value) => {
    arrayElements = arrayElements.concat(value + ' ');
  });
  const name = `${user.childFirstName} ${user.childLastName}`;

  // Even if we define a constant to be a value and not a function, it should display the correct date and time
  // whenever it renders. This is because, on every render, this constant will be initialized to the result of
  // calling getHours etc functions on date class
  // This would have been a problem if this component was in an application where it was loaded only once and used
  // by other components. In such a case, it would continue to show the value for date and time which was assigned
  // to it at the initial load. In that case, it is necessary to define it as a function
  //
  const dateAndTime = () =>
    `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}  ${date.getHours()}HR:${date.getMinutes()}Min:${date.getSeconds()}Sec`;
  logger.info('Child Component Rendered');

  return (
    <>
      <div>Child Component :: Current Date And Time :: {dateAndTime()}</div>
      <br /> <br />
      <div>Child Component Props :: Array Prop - {arrayElements}</div>
      <div>
        Child Component Props :: Car Props - {carProp?.name}:{carProp?.model}
      </div>
      <div>Child Component Props :: Function Props - {handleClick()}</div>
    </>
  );
}
