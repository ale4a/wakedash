import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface InfiniteScrollProps {
  onLoadMore: () => void;
  isLoading: boolean;
  hasMore: boolean;
  loadingText?: string;
  noMoreText?: string;
}

const InfiniteScroll = ({
  onLoadMore,
  isLoading,
  hasMore,
  loadingText = "Loading more items...",
  noMoreText = "No more items to load.",
}: InfiniteScrollProps) => {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "100px",
  });

  useEffect(() => {
    if (inView && hasMore && !isLoading) {
      onLoadMore();
    }
  }, [inView, hasMore, isLoading, onLoadMore]);

  return (
    <div ref={ref} className="mt-8 flex justify-center py-4">
      {isLoading && (
        <div className="flex items-center gap-2">
          <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-primary"></div>
          <p className="text-sm text-gray-500">{loadingText}</p>
        </div>
      )}
      {!isLoading && !hasMore && (
        <p className="text-sm text-gray-400">{noMoreText}</p>
      )}
    </div>
  );
};

export default InfiniteScroll;
