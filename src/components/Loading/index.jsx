// import { useLoading } from "@/features/product";
import { useLoading } from "@/features/product";
import styles from "./Loading.module.scss";
function Loading() {
  const isLoading = useLoading();
  return <>{isLoading && <div className={styles.wrapper} />}</>;
}
export default Loading;
