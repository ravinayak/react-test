import React, { useState } from 'react';
// When we are importing images or any files other than JS/JSX/TS/TSX we have to specify the file extension
// Here we are importing images, so we have to specify the name of the image
// Images are imported as default imports and not named imports
//
import Heart from '@app/images/heart.svg';
import '@app/src/App.css';

interface IProps {
  animal: string;
  key: string;
  animalName: string;
}
export function Animal({ animal, key, animalName }: IProps) {
  const [clicks, setClicks] = useState<number>(0);
  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div
      key={key}
      onClick={handleClick}
      onKeyDown={handleClick}
      role='presentation'
      className='animal-div'
    >
      <img alt={animalName} src={animal} className='animal-image' />
      <div className='heart-div'>
        <img alt='heart' className='heart' src={Heart} style={{ width: `${10 + 10 * clicks}px` }} />
      </div>
    </div>
  );
}
