import React from 'react';

export function CopyCutPasteKeyboardPress() {
  return (
    <div>
      <br />
      <br />
      <div id='copy-cut-paste-keyboard-press'>CopyCutPasteKeyboardPress Component</div>
      <div>*******************************************************</div>
      <label style={{ paddingRight: '10px' }} htmlFor='copy-cut-input'>
        Type In this box ::
      </label>
      <input type='text' id='copy-cut-input' style={{ paddingLeft: '10px' }} />
      <label style={{ paddingLeft: '50px', paddingRight: '10px' }} htmlFor='paste-input'>
        Input from Previous Input will be pasted here ::
      </label>
      <input type='text' id='paste-input' />
    </div>
  );
}
