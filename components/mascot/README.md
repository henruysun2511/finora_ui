# Finora AI Mascot Reusable Components

Thư mục `device-preview/components/mascot` cung cấp bộ Mascot Components độc lập, tái sử dụng trên mọi màn hình web/mobile của Finora.

Mỗi mascot được đóng gói thành **1 file component riêng biệt**, vừa hỗ trợ chuẩn **Web Component** (HTML Custom Elements: `<mascot-nora>`, `<mascot-ash>`, ...) vừa hỗ trợ **JavaScript Object API** (`window.FinoraMascotNora`, `window.FinoraMascots.nora`).

---

## 📁 Danh sách Components & Mascots

| File Component | Web Component Tag | JS Global Object | Phân tầng tài chính / Vai trò |
|---|---|---|---|
| [`base.js`](file:///f:/Project/FINORA/static-ui/device-preview/components/mascot/base.js) | Base Engine | `window.FinoraMascots` | Core Factory, Shared Styles, Lifecycle & Balance Resolving |
| [`ash.js`](file:///f:/Project/FINORA/static-ui/device-preview/components/mascot/ash.js) | `<mascot-ash>` | `FinoraMascotAsh` | **Debt (< 0 ₫)** · Kẻ Sinh Tồn |
| [`penny.js`](file:///f:/Project/FINORA/static-ui/device-preview/components/mascot/penny.js) | `<mascot-penny>` | `FinoraMascotPenny` | **Struggling (0 – 1M ₫)** · Kế Toán Săn Sale |
| [`sage.js`](file:///f:/Project/FINORA/static-ui/device-preview/components/mascot/sage.js) | `<mascot-sage>` | `FinoraMascotSage` | **Getting By (1M – 5M ₫)** · Người Làm Vườn Nhẫn Nại |
| [`nora.js`](file:///f:/Project/FINORA/static-ui/device-preview/components/mascot/nora.js) | `<mascot-nora>` | `FinoraMascotNora` | **Comfortable (5M – 20M ₫)** · Huấn Luyện Viên Đời Sống |
| [`jade.js`](file:///f:/Project/FINORA/static-ui/device-preview/components/mascot/jade.js) | `<mascot-jade>` | `FinoraMascotJade` | **Wealthy (20M – 100M ₫)** · Chiến Lược Gia Đầu Tư |
| [`ruby.js`](file:///f:/Project/FINORA/static-ui/device-preview/components/mascot/ruby.js) | `<mascot-ruby>` | `FinoraMascotRuby` | **Rich (100M – 500M ₫)** · Quý Cô Hưởng Thụ |
| [`bellingham.js`](file:///f:/Project/FINORA/static-ui/device-preview/components/mascot/bellingham.js) | `<mascot-bellingham>` | `FinoraMascotBellingham` | **Tycoon (500M+ ₫)** · Chủ Tịch Tài Phiệt |
| [`sterling.js`](file:///f:/Project/FINORA/static-ui/device-preview/components/mascot/sterling.js) | `<mascot-sterling>` | `FinoraMascotSterling` | **Tycoon (500M+ ₫)** · Alias tương thích với Bellingham |
| [`ronaldo.js`](file:///f:/Project/FINORA/static-ui/device-preview/components/mascot/ronaldo.js) | `<mascot-ronaldo>` | `FinoraMascotRonaldo` | **Legend (1B+ ₫)** · CR7 Siuuu · Kỷ Lục Gia |
| [`messi.js`](file:///f:/Project/FINORA/static-ui/device-preview/components/mascot/messi.js) | `<mascot-messi>` | `FinoraMascotMessi` | **Legend (1B+ ₫)** · M10 Goat · Thiên Tài Điềm Đạm |
| [`huysun.js`](file:///f:/Project/FINORA/static-ui/device-preview/components/mascot/huysun.js) | `<mascot-huysun>` | `FinoraMascotHuysun` | **Special Mascot** · Full-stack Dev · Thần Đèn Công Nghệ |
| [`index.js`](file:///f:/Project/FINORA/static-ui/device-preview/components/mascot/index.js) | Master Barrel Entry | Export toàn bộ | Hỗ trợ bundler (CommonJS, Webpack, Vite) và Browser helper |
| [`demo.html`](file:///f:/Project/FINORA/static-ui/device-preview/components/mascot/demo.html) | Showcase Demo | — | Trang demo tương tác trực tiếp tất cả 10 mascots & 4 modes |

---

## 🚀 Hướng Dẫn Sử Dụng

### Cách 1: Sử dụng như HTML Web Component (Khuyên dùng)

Chỉ cần nạp file `base.js` và file mascot mong muốn:

```html
<!-- Load Base Engine -->
<script src="device-preview/components/mascot/base.js"></script>

<!-- Load Mascot cần dùng (Ví dụ: Nora) -->
<script src="device-preview/components/mascot/nora.js"></script>

<!-- Chèn thẻ HTML trực tiếp vào giao diện -->
<mascot-nora 
  float 
  interactive 
  bubble="Hôm nay bạn chi tiêu rất có kế hoạch!" 
  size="140px">
</mascot-nora>
```

#### Các Attributes hỗ trợ:
- `size`: Chiều rộng SVG (vd: `"120px"`, `"100%"`).
- `float`: Hiệu ứng nhún nhảy lơ lửng nhẹ nhàng (floating animation).
- `interactive`: Thêm hiệu ứng hover phóng to nhẹ & hiệu ứng active.
- `bubble`: Chuỗi văn bản hiển thị trong Speech Bubble hoạt hình bên trên mascot (truyền rỗng hoặc không có thuộc tính để tắt).
- `mode`: Chế độ hiển thị:
  - `"avatar"` (mặc định): Mascot avatar độc lập.
  - `"card"`: Thẻ thẻ chọn kèm blob màu và vai trò.
  - `"dialogue"`: Dòng tin nhắn trò chuyện với avatar nhỏ bên trái và bóng hội thoại bên phải.
  - `"profile"`: Thẻ thông tin chi tiết đầy đủ với huy hiệu tier, tính cách, quan điểm tài chính và danh ngôn.
- `active`: Thêm viền active khi ở mode `"card"`.

#### Bắt sự kiện click:
```javascript
document.querySelector('mascot-nora').addEventListener('mascot-click', (e) => {
  console.log('Mascot data:', e.detail.mascot);
});
```

---

### Cách 2: Sử dụng qua JavaScript API

```javascript
// Lấy object component của mascot
const nora = window.FinoraMascotNora; // hoặc window.FinoraMascots.nora

// 1. Render dạng Avatar HTML
const avatarHtml = nora.render({
  size: "150px",
  float: true,
  interactive: true,
  bubble: "Tiết kiệm thêm 200k nhé!"
});

// 2. Render Card chọn mascot
const cardHtml = nora.renderCard({
  size: "100px",
  active: true
});

// 3. Render khung đối thoại (Dialogue)
const dialogueHtml = nora.renderDialogue({
  text: "Hôm nay bạn tiêu xài rất có kỷ luật!"
});

// 4. Render Profile Spotlight
const profileHtml = nora.renderProfile();

// Chèn vào DOM
document.getElementById('mascotContainer').innerHTML = avatarHtml;
```

---

### Cách 3: Tự động chọn Mascot theo số dư người dùng

```javascript
const userBalance = 15000000; // 15 triệu VND
const mascot = window.FinoraMascots.getMascotByBalance(userBalance);

console.log("Mascot phù hợp:", mascot.name); // Nora
document.getElementById('preview').innerHTML = mascot.render({ float: true });
```
