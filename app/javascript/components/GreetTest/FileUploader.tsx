import React from 'react';

export function FileUploader() {
  return (
    <div>
      <br />
      <br />
      <div id='file-uploader'>File Uploader Component</div>
      <div>*******************************</div>
      <br />
      <label htmlFor='file-upload'>
        Upload File ::
        <input type='file' name='file-upload' id='file-upload' />
      </label>
    </div>
  );
}
