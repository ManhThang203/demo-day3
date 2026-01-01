import { useLoading } from "@/features/product";
import clsx from "clsx";
import PropTypes from "prop-types";
import styles from "./Loading.module.scss";
function Loading({ type = "global" }) {
  const iseLoading = useLoading();
  if (!iseLoading) return null;
  return <div className={clsx(styles.wrapper, styles[`wrapper--${type}`])} />;
}
Loading.propTypes = {
  type: PropTypes.string,
};
export default Loading;
