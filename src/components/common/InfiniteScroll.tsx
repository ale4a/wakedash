import React, { useEffect, ReactNode } from "react";
import { useInView } from "react-intersection-observer";

/**
 * InfiniteScroll Component
 *
 * This component handles infinite scrolling functionality by triggering a load more action
 * when the user scrolls near the bottom of the content. It does NOT render the actual list items -
 * that should be handled by the parent component.
 *
 * @example
 * ```tsx
 * <div>
 *   {items.map(item => <ItemCard key={item.id} {...item} />)}
 *
 *   <InfiniteScroll
 *     onLoadMore={fetchNextPage}
 *     isLoading={isFetchingNextPage}
 *     hasMore={hasNextPage}
 *   >
 *     {({ isLoading }) => (
 *       <div className="custom-loader">{isLoading ? 'Loading...' : 'No more items'}</div>
 *     )}
 *   </InfiniteScroll>
 * </div>
 * ```
 */
interface InfiniteScrollProps {
  onLoadMore: () => void;
  isLoading: boolean;
  hasMore: boolean;
  loadingText?: string;
  noMoreText?: string;
  children?: (props: { isLoading: boolean; hasMore: boolean }) => ReactNode;
  threshold?: number;
}

const InfiniteScroll = ({
  onLoadMore,
  isLoading,
  hasMore,
  loadingText = "Loading more items...",
  noMoreText = "No more items to load.",
  children,
  threshold = 100,
}: InfiniteScrollProps) => {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: `0px 0px ${threshold}px 0px`,
  });

  useEffect(() => {
    if (inView && hasMore && !isLoading) {
      onLoadMore();
    }
  }, [inView, hasMore, isLoading, onLoadMore]);

  // Si se proporciona un render prop personalizado, úsalo
  if (children) {
    return (
      <div ref={ref} role="status" aria-live="polite">
        {children({ isLoading, hasMore })}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className="mt-8 flex justify-center py-4"
      role="status"
      aria-live="polite"
    >
      {isLoading && (
        <div className="flex items-center gap-2">
          <div
            className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-primary"
            aria-hidden="true"
          />
          <p className="text-sm text-gray-500">{loadingText}</p>
        </div>
      )}
      {!isLoading && !hasMore && (
        <p
          className="text-sm text-gray-400"
          role="status"
          aria-label="No more content available"
        >
          {noMoreText}
        </p>
      )}
    </div>
  );
};

export default InfiniteScroll;
