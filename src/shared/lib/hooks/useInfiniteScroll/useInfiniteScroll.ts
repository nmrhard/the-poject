/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

export interface UseInfiniteScrollProps {
  callback?: () => void;
  triggerRef: React.MutableRefObject<HTMLDivElement>;
  wrapperRef: React.MutableRefObject<HTMLDivElement>;
}

export const useInfiniteScroll = ({
  callback,
  triggerRef,
  wrapperRef,
}: UseInfiniteScrollProps) => {
  React.useEffect(() => {
    let observer: IntersectionObserver | null = null;

    if (callback) {
      const options = {
        root: wrapperRef.current,
        rootMargin: '0px',
        threshold: 1.0,
      };

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      }, options);

      if (triggerRef.current) {
        observer.observe(triggerRef.current);
      }
    }

    return () => {
      if (observer) {
        observer.unobserve(triggerRef.current);
      }
    };
  }, [callback, triggerRef, wrapperRef]);
};
