import React, { useState } from 'react';
// When we are importing images or any files other than JS/JSX/TS/TSX we have to specify the file extension
// Here we are importing images, so we have to specify the name of the image
// Images are imported as default imports and not named imports
//
import { routes } from '@app/config/routes';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { ANIMALS, ANIMALS_IMAGES_MAPPING } from '@app/shared/Constants';
import { Animal } from './Animal';
import '@app/src/App.css';

export function AnimalShow() {
  const navigate = useNavigate();
  const randomIndex = (randomNumber: number, length: number): number =>
    Math.floor(randomNumber * length);
  const [animalsDisplayed, setAnimalsDisplayed] = useState<string[]>([]);

  const handleClick = () => {
    const element: number = randomIndex(Math.random(), ANIMALS.length);
    setAnimalsDisplayed([...animalsDisplayed, ANIMALS_IMAGES_MAPPING[ANIMALS[element]]]);
  };

  const renderedAnimals = animalsDisplayed.map((animal, index) => {
    const animalName = Object.keys(ANIMALS_IMAGES_MAPPING).find(
      (key) => ANIMALS_IMAGES_MAPPING[key] === animal,
    );
    const key = `${animal}_${index}`;
    return <Animal animal={animal} key={key} animalName={animalName} />;
  });
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '30px',
        }}
      >
        <Button
          variant='contained'
          color='success'
          type='submit'
          id='add-animal-button'
          className='add-animal'
          onClick={handleClick}
        >
          Add Animal
        </Button>
      </div>
      <div className='animal-container-div'>{renderedAnimals}</div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant='outlined'
          type='submit'
          id='btn-back-button'
          sx={{ mt: 4 }}
          onClick={() =>
            navigate(routes.MODERN_REACT_WITH_ROUTER, { state: { displayWelcomePage: true } })
          }
        >
          Back to Course Sections Listing Page
        </Button>
      </div>
    </div>
  );
}
