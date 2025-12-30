import { useEffect } from "react";

export const useInfiniteScroll = ({
  targetRef,
  onLoadMore,
  enabled = true,
} = {}) => {
  useEffect(() => {
    if (!enabled) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onLoadMore();
        }
      });
    });
    // Do mới đâu khi với load thì current sẽ là null hoặc undefined nên dùng ? để tránh gây lỗi
    const element = targetRef?.current;

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [enabled, onLoadMore, targetRef]);
};
