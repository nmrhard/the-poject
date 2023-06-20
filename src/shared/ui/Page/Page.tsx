import React from 'react';
import { classNames } from 'shared/lib/classNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import styles from './Page.module.scss';

interface PageProps {
  className?: string;
  children: React.ReactNode;
  onScrollEnd?: () => void;
}

export const Page = ({ className, children, onScrollEnd }: PageProps) => {
  const wrapperRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;
  const triggerRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({
    wrapperRef,
    triggerRef,
    callback: onScrollEnd,
  });

  return (
    <section
      className={classNames(styles.Page, {}, [className])}
      ref={wrapperRef}
    >
      {children}
      <div ref={triggerRef} />
    </section>
  );
};
