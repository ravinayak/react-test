import React, { useEffect, useState } from 'react';
import { MockUser } from '@app/types/MockUser';
import axios from 'axios';
import { USER_JSON_API_ENDPOINT } from '@app/shared/Constants';

export function UsersApi() {
  const [error, setError] = useState<string>('');
  const [users, setUsers] = useState<MockUser[]>(null);
  useEffect(() => {
    // fetch data from JSON Placeholder API
    axios
      .get(USER_JSON_API_ENDPOINT)
      .then((res) => {
        const { data } = res;
        const userObjects: MockUser[] = data.map((userObject) => ({
          name: userObject.name,
          id: userObject.id,
        }));
        setUsers(userObjects);
      })
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div id='users-api-jsonplaceholder'>
      <br />
      <div>Users JSONPlaceholder API</div>
      <div>***********************************</div>
      {error && <div>{error}</div>}
      {users && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ul
            id='users-api'
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
            }}
          >
            {/* React Node would not accept any function which returns void, if we use forEach to iterate
					over users, it would throw an error because it does not return any data
					map returns data, so, we can use map to iterate over users and return JSX from it */}
            {users.map((user) => {
              return (
                <li key={user.id}>
                  Name :: {user.name}, Id :: {user.id}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
