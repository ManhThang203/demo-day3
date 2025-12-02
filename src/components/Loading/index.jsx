import { useLoading } from "@/features/product";
import styles from "./Loading.module.scss";
function Loading() {
  const isloading = useLoading();
  if (!isloading) return null;
  return <div className={styles.wrapper} />;
}
export default Loading;
