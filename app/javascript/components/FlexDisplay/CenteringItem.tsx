import React from 'react';
import '@app/stylesheets/CenteringItem.css';

export function CenteringItem() {
  return (
    <div>
      <div id='centering-item'>Centering Item Component</div>
      <div>****************************************</div>
      <div className='container'>
        <div className='item'>Item</div>
      </div>
    </div>
  );
}
