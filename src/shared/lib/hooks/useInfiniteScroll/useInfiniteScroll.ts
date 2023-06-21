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
    const wrapperElement = wrapperRef.current;
    const triggerElement = triggerRef.current;

    let observer: IntersectionObserver | null = null;

    if (callback) {
      const options = {
        root: wrapperElement,
        rootMargin: '0px',
        threshold: 1.0,
      };

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      }, options);

      if (triggerRef.current) {
        observer.observe(triggerElement);
      }
    }

    return () => {
      if (observer && triggerElement) {
        observer.unobserve(triggerElement);
      }
    };
  }, [callback, triggerRef, wrapperRef]);
};
