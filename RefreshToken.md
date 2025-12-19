- Bước login gửi thông tin đang nhập gồm email và passwork và nhận lại response có access_token
  => Được gọi là Authentication (xác thực người dùng)

Bước 1. Truy cập tài nguyên được bảo vệ (VD: thông tin người dùng đang đăng nhập)

- Nếu không nhận được do tài nguyên bị bảo vệ -> VD: Gọi API /auth/me (without JWT) => 401

Bước 2. Authentication (Xác thực người dùng: người dùng này có phải là người dùng thật không, tài khoản và mật khẩu có đúng hay không, email, facebook có đùng hay không) (Bước này là bước đang nhập)

- Gửi đi thông tin đăng nhập (Credentials)
  => Nhận token (lưu vào client)

Bước 3. Truy cập tài nguyên được bảo vệ
-> VD: Gọi API /auth/me (with JWT) => Backend check JWT (Authorization)

- JWT hợp lệ: 200 + data
- JWT không hợp lệ: 401
