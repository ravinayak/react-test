import React from 'react';
// When a developer is importing a file created by him/her, we specify directory path - @app (app/javascript/...)
// When we are importing any library installed through yarn/npm, we simply specify the library - 'bulma/css/bulma.css' or 'react'
//  -- By default, loader will look for these files in node_modules directory
//	 -- node_modules/bulma/css/bulma.css: We only have to specify 'bulma/css/bulma.css', node_modules is understood to
//			be the path where the file will be searched
import 'bulma/css/bulma.css';

interface IProps {
  title: string;
  handle: string;
  image: string;
  description: string;
}

export function ProfileCard({ title, handle, image, description }: IProps) {
  return (
    <div id='ProfileCard'>
      <div className='card'>
        <div className='card-image'>
          <figure className='image-is-1by1'>
            <img src={image} alt='pda logo' />
          </figure>
        </div>
      </div>
      <div className='card-content'>
        <div className='media-content'>
          <p className='title is-4'>{title}</p>
          <p className='subtitle is-6'>{handle}</p>
        </div>
        <div className='content'>{description}</div>
      </div>
    </div>
  );
}
