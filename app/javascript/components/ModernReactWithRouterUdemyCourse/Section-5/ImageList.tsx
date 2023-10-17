import React from 'react';
import { ImageShow } from './ImageShow';

interface IProps {
  images: any[];
}

export function ImageList({ images }: IProps) {
  const renderedImages = images.map((imageData) => (
    <ImageShow key={imageData.id} alt={imageData.alt_description} url={imageData.urls.small} />
  ));
  return <div>{renderedImages}</div>;
}
