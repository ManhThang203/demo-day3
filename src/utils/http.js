import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_API;

export const httpClient = axios.create({
  baseURL,
});

httpClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.set("Authorization", `Bearer ${token}`);
  }
  return config;
});

// ============================================
// PHẦN 3: XỬ LÝ LÀM MỚI TOKEN TỰ ĐỘNG
// ============================================

// Biến theo dõi xem có đang làm mới token không
// Tránh trường hợp nhiều request cùng lúc đều cố gắng làm mới token
let isRefreshing = false;

// Hàng đợi chứa các request bị lỗi 401 (hết hạn token)
// Giống như hàng người chờ, khi có token mới sẽ cho tất cả vào cùng lúc
let failedQueue = [];

// Hàm xử lý tất cả request đang chờ trong hàng đợi
const processQueue = (error) => {
  // Duyệt qua từng request đang chờ
  failedQueue.forEach((prom) => {
    if (error) {
      // Nếu có lỗi (làm mới token thất bại), thông báo lỗi cho tất cả
      prom.reject(error);
    } else {
      // Nếu thành công, cho phép tất cả request thử lại
      prom.resolve();
    }
  });

  // Xóa sạch hàng đợi sau khi xử lý xong
  failedQueue = [];
};

// Hàm thực hiện việc làm mới token
const refreshToken = async () => {
  try {
    // Gọi API làm mới token bằng refreshToken hiện có
    const result = await axios.post(`${baseURL}/auth/refresh-token`, {
      refresh_token: localStorage.getItem("refreshToken"),
    });
    if (result.status === "success") {
      // Lưu cặp token mới vào localStorage
      localStorage.setItem("accessToken", result.data.access_token);
      localStorage.setItem("refreshToken", result.data.refresh_token);
    }

    // Thông báo thành công cho tất cả request đang chờ
    processQueue(null);
  } catch (error) {
    // Nếu làm mới token thất bại, thông báo lỗi cho tất cả
    processQueue(error);
    throw error; // Ném lỗi để hàm gọi biết việc làm mới thất bại
  }
};

// Hàm điều phối việc lấy token mới
// Đảm bảo chỉ có 1 request làm mới token tại một thời điểm
const getNewToken = async () => {
  // Nếu chưa có ai đang làm mới token
  if (!isRefreshing) {
    isRefreshing = true; // Đánh dấu là đang làm mới
    await refreshToken(); // Thực hiện làm mới token
    isRefreshing = false; // Đánh dấu hoàn thành
    return;
  }

  // Nếu đã có request khác đang làm mới token
  // Thì request này sẽ xếp hàng chờ đợi
  return new Promise((resolve, reject) => {
    // Thêm vào hàng đợi, sẽ được xử lý khi token mới sẵn sàng
    failedQueue.push({ resolve, reject });
  });
};

// ============================================
// PHẦN 4: XỬ LÝ RESPONSE VÀ LÀM MỚI TOKEN
// ============================================

// Interceptor (bộ chặn) response: chạy SAU KHI nhận được phản hồi từ server
httpClient.interceptors.response.use(
  // Nếu response thành công (status 200-299), trả về nguyên bản
  (response) => response,

  // Nếu có lỗi, xử lý ở đây
  async (error) => {
    // Lưu lại thông tin request gốc để có thể thử lại sau
    const originalRequest = error.config;

    // Kiểm tra xem có nên làm mới token không:
    // - Lỗi 401 (Unauthorized - token hết hạn)
    // - Request này chưa từng được thử lại (_retry chưa set)
    const shouldRenewToken =
      error.response.status === 401 && !originalRequest._retry;

    if (shouldRenewToken) {
      // Đánh dấu request này đã được thử lại, tránh lặp vô hạn
      originalRequest._retry = true;

      try {
        // Lấy token mới
        console.log("getNewToken");
        await getNewToken();

        // Thử lại request ban đầu với token mới
        // httpClient sẽ tự động gắn token mới vào (nhờ interceptor request)
        console.log("success");
        return httpClient(originalRequest);
      } catch (error) {
        // Nếu làm mới token thất bại, trả về lỗi
        // (Thường thì sẽ redirect về trang login)
        console.log("error");
        return Promise.reject(error);
      }
    }
    console.log("done");

    // Nếu không phải lỗi 401 hoặc đã thử lại rồi, trả về lỗi bình thường
    return Promise.reject(error);
  }
);

const _send = async (method, path, data, config) => {
  const response = await httpClient.request({
    ...config,
    method,
    url: path,
    data,
  });
  return response.data;
};

const get = async (path, config) => {
  return await _send("get", path, null, config);
};

const post = async (path, data, config) => {
  return await _send("post", path, data, config);
};

const patch = async (path, data, config) => {
  return await _send("patch", path, data, config);
};

const put = async (path, data, config) => {
  return await _send("put", path, data, config);
};

const del = async (path, config) => {
  return await _send("delete", path, null, config);
};

const http = { get, post, patch, put, del };

export default http;
