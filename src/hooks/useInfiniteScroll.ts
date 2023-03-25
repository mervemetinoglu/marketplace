import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import _ from 'lodash';

export interface IInfiniteScrollProps {
  listRef: React.MutableRefObject<null | HTMLDivElement>;
  getNextPage: () => Promise<void>;
  isLastPage: boolean;
}

export const useInfiniteScroll = (props: IInfiniteScrollProps) => {
  const { listRef, getNextPage, isLastPage } = props;
  const [isFetching, setIsFetching] = useState(false);

  const handleScroll = useCallback(async () => {
    if (listRef.current === null) return;

    const itemElement = listRef.current.children;

    const lastItemElement =
      itemElement.length > 0
        ? (itemElement[itemElement.length - 1] as HTMLElement)
        : null;

    if (!lastItemElement) return;

    if (
      window.innerHeight + document.documentElement.scrollTop <
      lastItemElement.offsetTop - 200
    ) {
      return;
    }
    
    setIsFetching(true);
    await getNextPage();
    setIsFetching(false);
  }, [getNextPage, listRef]);

  useEffect(() => {
    const throttledHandleScroll = _.throttle(handleScroll, 2000);

    if (isLastPage) {
      window.removeEventListener('scroll', throttledHandleScroll);
      return;
    }

    window.addEventListener('scroll', throttledHandleScroll);

    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [handleScroll, isLastPage]);

  return { isFetching };
};
