import React, { useState, useEffect } from 'react';
import { ISkillsProps } from '@app/types/Skills';

export function Skills({ skills }: ISkillsProps) {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const handleLogIn = () => setLoggedIn(!loggedIn);
  useEffect(() => {
    setTimeout(() => setLoggedIn(true), 1002);
  });
  return (
    <div id='Skills'>
      <ul>
        {skills.map((skill: string) => {
          return <li key={skill}> {skill}</li>;
        })}
      </ul>
      {!loggedIn && (
        <button type='button' onClick={handleLogIn}>
          Log me In
        </button>
      )}
      {loggedIn && (
        <>
          <div>Start learning React</div>
          <br />
          <button type='button' onClick={handleLogIn}>
            Log me Out
          </button>
        </>
      )}
    </div>
  );
}
