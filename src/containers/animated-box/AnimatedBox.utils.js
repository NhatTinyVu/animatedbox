import {useCallback} from 'react';

export const useHandleTouch = ({setCoords}) =>
  useCallback(
    (event) => {
      setCoords({
        x: event?.nativeEvent?.locationX,
        y: event?.nativeEvent?.locationY,
      });
    },
    [setCoords],
  );
