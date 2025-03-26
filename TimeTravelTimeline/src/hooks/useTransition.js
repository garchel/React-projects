import { useState, useCallback } from 'react';

export const useTransition = (duration = 300) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const startTransition = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsTransitioning(false);
    }, duration);
  }, [duration]);

  return { isTransitioning, startTransition };
};