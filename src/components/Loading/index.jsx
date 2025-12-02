import { useLoading } from "@/features/product";
import styles from "./Loading.module.scss";
function Loading() {
  const isLoading = useLoading();
  if (!isLoading) return null;
  return <div className={styles.wrapper} />;
}
export default Loading;
