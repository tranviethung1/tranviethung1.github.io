# RUBIK F2L trainer

Trang web luyện F2L (Three.js). Chi tiết yêu cầu: [`docs/rubik-requirements.md`](docs/rubik-requirements.md).

## Chạy local

Trainer dùng ES modules (`import` từ `f2l-data.js`, …). **Không mở bằng `file://`** — Chrome sẽ chặn CORS (`origin 'null'`).

```bash
npm start
# hoặc: python3 -m http.server 4173
```

Rồi mở:

- F2L: http://localhost:4173/f2l/
- Cross: http://localhost:4173/statistics/cross/

## Test Playwright (F2L formulas)

### Cài lần đầu (WSL / Ubuntu)

```bash
npm install
npx playwright install-deps chromium   # cần sudo — thư viện hệ thống (libnspr4, …)
npx playwright install chromium        # tải browser vào ~/.cache/ms-playwright
```

Hoặc:

```bash
npm run test:setup:deps
npm run test:setup
```

### Chạy test

```bash
npm run test:f2l      # toàn bộ case
npm run test:f2l-2    # chỉ F2L -2
npm run test:f2l-10   # chỉ F2L -10
```

Config (`playwright.config.mjs`) tự chạy `python3 -m http.server 4173`, mở `/f2l/?test=1`, timeout suite `180s`. Trong chế độ test, trainer áp nước tức thì (không animation) nên validate không bị timeout 60s.

### Env

| Biến | Ý nghĩa |
| --- | --- |
| `PLAYWRIGHT_BROWSERS_PATH` | Thư mục chứa Chromium của Playwright. **Để trống** khi chạy trên terminal thường → dùng `~/.cache/ms-playwright`. |

Cursor Agent đôi khi set `PLAYWRIGHT_BROWSERS_PATH` sang cache sandbox (`/tmp/cursor-sandbox-cache/...`). Terminal của bạn không dùng biến đó, nên phải cài browser vào home:

```bash
env -u PLAYWRIGHT_BROWSERS_PATH npx playwright install chromium
```

Nếu lỗi `Executable doesn't exist at .../.cache/ms-playwright/...`, chạy lại lệnh trên.

File mẫu: [`.env.example`](.env.example).
