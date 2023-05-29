/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

export const useInitialEffect = (callback: () => void) => {
  React.useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      callback();
    }
  }, []);
};
