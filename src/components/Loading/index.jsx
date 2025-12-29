// import { useLoading } from "@/features/product";

import { useLoading } from "@/features/product";
import styles from "./Loading.module.scss";
function Loading() {
  const iseLoading = useLoading();
  if (!iseLoading) return null;
  return (
    <>
      <div className={styles.wrapper} />
    </>
  );
}
export default Loading;
