import http from "@/utils/http";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getList = createAsyncThunk(
  "product/getList",
  // { limit = 10, page = 1 } bằng  {} để tránh gây lỗi
  // {} không có limit → lấy 10
  // {} không có page → lấy 1
  async ({ limit = 10, page = 1 }) => {
    const response = await http.get(`/products?limit=${limit}&page=${page}`);
    return response.data;
  }
);
