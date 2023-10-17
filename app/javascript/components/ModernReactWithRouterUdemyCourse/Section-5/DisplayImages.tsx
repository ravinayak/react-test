import React, { useState } from 'react';
import { searchImages } from '@app/queries/searchImages';
import { SearchBar } from './SearchBar';
import { ImageList } from './ImageList';

export function DisplayImages() {
  const [searchTerm, setSearchTerm] = useState('');
  const [imageData, setImageData] = useState(null);

  const fetchImages = async () => {
    const images = await searchImages({ searchTerm });
    setImageData(images.data.results);
  };
  const handleClick = (term: string): void => {
    setSearchTerm(term);
  };
  if (searchTerm) {
    fetchImages();
  }

  return (
    <div>
      <div>
        <SearchBar handleClick={handleClick} />
      </div>
      {imageData && <ImageList images={imageData} />}
    </div>
  );
}
