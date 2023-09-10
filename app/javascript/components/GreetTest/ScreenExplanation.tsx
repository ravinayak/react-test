import React from 'react';
import { Skills } from '@app/components/GreetTest/Skills';
import { SKILLS } from '@app/shared/Constants';

export function ScreenExplanation() {
  return (
    <div id='ScreenExplanation'>
      <span>I am Screen Explanation Component being rendered</span>
      <button type='button'>ScreenExplanation</button>
      <Skills skills={SKILLS} />
    </div>
  );
}
