import React from 'react';
// When we are importing images or any files other than JS/JSX/TS/TSX we have to specify the file extension
// Here we are importing images, so we have to specify the name of the image
// Images are imported as default imports and not named imports
//
import { routes } from '@app/config/routes';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import AlexaImage from '@app/images/alexa.png';
import CortonaImage from '@app/images/cortana.png';
import SiriImage from '@app/images/siri.png';
import '@app/src/App.css';
import { ProfileCard } from './ProfileCard';
// When a developer is importing a file created by him/her, we specify directory path - @app (app/javascript/...)
// When we are importing any library installed through yarn/npm, we simply specify the library - 'bulma/css/bulma.css' or 'react'
//  -- By default, loader will look for these files in node_modules directory
//	 -- node_modules/bulma/css/bulma.css: We only have to specify 'bulma/css/bulma.css', node_modules is understood to
//			be the path where the file will be searched
import 'bulma/css/bulma.css';

export function Profile() {
  const navigate = useNavigate();
  return (
    <div id='Profiles'>
      <section className='hero is-primary'>
        <div className='hero-body'>
          <p className='title'>Personal Digital Assistant</p>
        </div>
      </section>
      <div className='section-container'>
        <div className='section'>
          <div className='columns'>
            <div className='column is-4'>
              <ProfileCard
                title='Alexa'
                handle='@alexa99'
                image={AlexaImage}
                description='Alexa was created by Amazon and helps you buy things'
              />
            </div>
            <div className='column is-4'>
              <ProfileCard
                title='Cortana'
                handle='@cortana32'
                image={CortonaImage}
                description='Cortona was created by Microsoft'
              />
            </div>
            <div className='column is-4'>
              <ProfileCard
                title='Siri'
                handle='@siri01'
                image={SiriImage}
                description='Siri was made by Apple and is being phased out'
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant='outlined'
          type='submit'
          id='btn-back-button'
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
