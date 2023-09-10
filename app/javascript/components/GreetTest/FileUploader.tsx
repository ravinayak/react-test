import React from 'react';

export function FileUploader() {
  return (
    <div>
      <br />
      <br />
      <div id='file-uploader'>File Uploader Component</div>
      <div>*******************************</div>
      <br />
      <label htmlFor='file-upload'>Upload File ::</label>
      <input type='file' id='file-upload' />
    </div>
  );
}
