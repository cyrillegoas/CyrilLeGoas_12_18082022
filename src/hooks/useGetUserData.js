/** @module useGetUserData */
import { useEffect, useState } from 'react';
import { UserData } from '../utils/userData';

/**
 * @typedef state
 * @type {Object}
 * @property {user|null} user - user data if available
 * @property {String} status - fetch status (loading / error / ok)
 */

/**
 * Fetch the user data and returns it if available
 *
 * @function
 * @param {userID} - user id
 * @returns {state}
 */
export const useGetUserData = (userID) => {
  const [state, setState] = useState({ user: null, status: 'loading' });

  useEffect(() => {
    async function getUserData() {
      const userPromise = fetch(`http://localhost:3000/user/${userID}`);
      const activityPromise = fetch(
        `http://localhost:3000/user/${userID}/activity`
      );
      const sessionsPromise = fetch(
        `http://localhost:3000/user/${userID}/average-sessions`
      );
      const performancePromise = fetch(
        `http://localhost:3000/user/${userID}/performance`
      );
      const responses = await Promise.allSettled([
        userPromise,
        activityPromise,
        sessionsPromise,
        performancePromise,
      ]);
      if (
        responses.every((res) => res.status === 'fulfilled' && res.value.ok)
      ) {
        Promise.all(responses.map((res) => res.value.json()))
          .then((value) => {
            setState({ user: new UserData(value), status: 'ok' });
          })
          .catch(() => {
            setState({ user: null, status: 'error' });
          });
      } else {
        setState({ user: null, status: 'error' });
      }
    }
    getUserData();
  }, [userID]);

  return state;
};
