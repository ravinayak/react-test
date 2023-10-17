import React from 'react';

interface IProps {
  alt: string;
  url: string;
}
export function ImageShow({ alt, url }: IProps) {
  return (
    <div className='image-show'>
      <img src={url} alt={alt} />
    </div>
  );
}
