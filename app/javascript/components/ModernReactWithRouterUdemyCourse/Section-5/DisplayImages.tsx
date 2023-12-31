import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from '@app/config/routes';
import { searchImages } from '@app/queries/searchImages';
import { IUnsplashImages } from '@app/types/unsplashImages';
import axios, { AxiosError } from 'axios';
import Alert from '@mui/material/Alert';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { SearchBar } from './SearchBar';
import { ImageList } from './ImageList';
import './DisplayImages.css';

export function DisplayImages() {
  const [searchTerm, setSearchTerm] = useState('');
  const [imageData, setImageData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const fetchImages = async () => {
    const images: IUnsplashImages | AxiosError = await searchImages({ searchTerm });
    setSearchTerm('');
    if (!axios.isAxiosError(images)) {
      setErrorMessage('');
      setImageData(images.results);
    } else {
      setImageData(null);
      setErrorMessage('Could Not Fetch Data');
    }
  };
  const handleClick = (term: string): void => {
    setSearchTerm(term);
  };
  if (searchTerm) {
    fetchImages();
  }

  return (
    <div>
      <div className='display-images-container'>
        <div className='search-bar'>
          <SearchBar handleClick={handleClick} />
          <Divider />
        </div>
        {imageData && <ImageList images={imageData} />}
        {errorMessage && <Alert severity='error'>{errorMessage}</Alert>}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant='outlined'
          type='submit'
          id='btn-back-button'
          sx={{ mt: 4, mb: 8 }}
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
