import React, { useEffect } from 'react';

export const MyComponent = ({ callback }) => {
  useEffect(() => {
    callback('Say something');
  });

  return <div>Hello world!</div>;
};
