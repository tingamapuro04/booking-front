/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';

const Loading = () => {
  const { promiseInProgress } = usePromiseTracker();
  return (
    <div>
      {promiseInProgress && <p>ugugygyugugug</p>}
    </div>
  );
};

export default Loading;
