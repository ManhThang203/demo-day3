import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "@/utils/baseQuery";
import { transformData } from "../helper";
export const addressApi = createApi({
  reducerPath: "addressApi",
  baseQuery,
  endpoints: (builder) => ({
    getProvinces: builder.query({
      query: () => "/address/provinces",
      transformResponse: transformData,
      keepUnusedDataFor: 5,
    }),
  }),
  refetchOnFocus: true,
  refetchOnReconnect: true,
});
export const { useGetProvincesQuery } = addressApi;

/**
 * +++ Chú ý +++
 * trong RTK query sẽ tự sinh ra nameSpace riêng của nó hay là 1 reducerPath riêng
 * + Cơ chế:  sẽ tự tạo ra reduce và action
 *
 * + endpoints: Mỗi endpoints là 1 api riêng lẻ
 * + endpoints là 1 hàm và sẽ trả ra là 1 obj
 *
 * + Khi mà sử dụng @reduxjs/toolkit/query/react thì nó sẽ tạo ra 1 cái hook thông qua cái tên endpoints tương ứng
 * **/

/**
 * + Khi nào cần dử dụng keepUnusedDataFor ?
 *   + Khi chuyển lại qua các page trong trang thì không gọi lại dữ quá nhiều lần
 * + keepUnusedDataFor: không gọi lại dữ liệu trong bao nhiêu lâu
 * + keepUnusedDataFor: gọi lại dữ liệu chỉ sau khi không sử dụng các hooks tự tạo thông qua endpoints thì mới có thời gian gọi
 * + Còn nếu chuyển qua các page có sử dụng cùng hooks tự tạo qua endpoints thì sẽ không gọi lại nữa mà chỉ gọi là 1 lần duy nhât
 * **/

/**
 * + refetchOnFocus hoạt động trên tất cả các endpoints
 * + Muốn refetchOnFocus (dùng để goi lại api) muốn nó hoạt động ta phải setupListeners ở bên file store
 * **/

/**
 *  + refetchOnReconnect: Nếu mất mạng mà có mạng lại thì gọi lại dữ liệu
 * **/

/**
 * + transformResponse: thiết lập lại đường dẫn gọi api ngắn gọn hơn
 * **/
