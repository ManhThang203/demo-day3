# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Thư viện Redux-persist

- Redux Persist là thư viện dùng để lưu (persist) state của Redux vào bộ nhớ lâu dài của trình duyệt để khi reload trang hoặc đóng/mở lại web thì dữ liệu vẫn còn.

✅ Nó dùng để làm gì?

- Bình thường, khi refresh trang thì Redux store sẽ bị reset → mất dữ liệu.
  Redux Persist giúp:

- Lưu state vào localStorage hoặc sessionStorage

- Khi reload trang → tự động khôi phục lại state cũ

- Thường dùng để giữ:

- Thông tin đăng nhập (auth)

- Giỏ hàng

- Cài đặt người dùng (theme, language…)

🔍 Ví dụ dễ hiểu

- Không dùng Redux Persist:

- Bạn đăng nhập → F5 → mất trạng thái → bị logout

- Có dùng Redux Persist:

- Bạn đăng nhập → F5 → vẫn đăng nhập bình thường

🧠 Nó hoạt động như thế nào?

- Redux Persist sẽ:

- Lấy state từ Redux store

- Lưu nó vào localStorage

- Khi app chạy lại → đọc từ localStorage → nạp lại vào Redux

✅ Khi nào nên dùng?

- Nên dùng nếu bạn muốn giữ:

- Token đăng nhập

- Thông tin user

- Cart, wishlist

- Không nên lưu:

- Dữ liệu nhạy cảm (password gốc)

- Data quá lớn

- Nếu bạn muốn, mình có thể giải thích luôn cách dùng trong dự án React của bạn.
