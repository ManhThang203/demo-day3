// import { useLoading } from "@/features/product";

import { forwardRef } from "react";
const Loading = forwardRef((props, ref) => {
  return <div ref={ref}>{props.loading && <span>Loading...</span>}</div>;
});
export default Loading;
