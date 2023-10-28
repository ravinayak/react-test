import React from 'react';

export function SelectOptions() {
  return (
    <div>
      <br /> <br />
      <div id='select-options'>Select Options Component</div>
      <div>*******************************</div>
      <label htmlFor='select-subject'>
        Select a Subject
        <select name='select-subject' id='select-subject' multiple>
          <option value='1'>Maths</option>
          <option value='2'>Astrology</option>
          <option value='3'>Computer Science</option>
          <option value='4'>Psychology</option>
        </select>
      </label>
    </div>
  );
}
