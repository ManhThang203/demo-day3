import { useLoading } from "@/features/product";
import clsx from "clsx";
import PropTypes from "prop-types";
import styles from "./Loading.module.scss";
import { useEffect, useState } from "react";
function Loading({ type = "global", delay = 0 }) {
  const iseLoading = useLoading();
  const [show, setShow] = useState(false);
  useEffect(() => {
    let timer;
    if (iseLoading) {
      timer = setTimeout(() => {
        setShow(true);
      }, delay);
    } else {
      setShow(false);
    }
    return () => clearTimeout(timer);
  }, [delay, iseLoading]);
  if (!show) return null;
  return <div className={clsx(styles.wrapper, styles[`wrapper--${type}`])} />;
}
Loading.propTypes = {
  type: PropTypes.string,
  delay: PropTypes.number,
};
export default Loading;
