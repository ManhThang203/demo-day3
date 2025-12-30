import { useEffect, useRef } from "react";

export const useInfinifyLoad = ({
  bottomOffset = 0,
  onEnd = () => {},
} = {}) => {
  const isEnded = useRef(false);
  console.log(isEnded);
  useEffect(() => {
    const handle = () => {
      // Tổng Chiều cao của Network tab - (chiều cao của window  + chiều cao khi cuộn + chiều cao khi gần chạm đáy)
      const isCrollEnd =
        document.documentElement.scrollHeight +
        bottomOffset -
        (window.innerHeight + window.scrollY);
      // Khi cuộn xuống cuối trang nó không phải là số chẵn đôi khi là 1 số lẻ 0.5
      // Để 1 để tránh gặp phải vấn đề đấy
      if (!isEnded.current && isCrollEnd <= 1) {
        isEnded.current = true;
        onEnd();
      } else if (isCrollEnd >= 1) {
        isEnded.current = false;
      }
    };
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, [bottomOffset, onEnd]);
};
