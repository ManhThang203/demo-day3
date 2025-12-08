// import { useLoading } from "@/features/product";
import styles from "./Loading.module.scss";
import { useGetProvincesQuery } from "@/features/address/provincesSlice";
function Loading() {
  // const isLoading = useLoading();
  const { isLoading } = useGetProvincesQuery();
  if (!isLoading) return null;
  return <div className={styles.wrapper} />;
}
export default Loading;
