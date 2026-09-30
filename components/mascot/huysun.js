/* ============================================================
   Finora Mascot Component — Huy Sun
   Tier: Special Mascot · Role: Full-stack Dev · Thần Đèn Công Nghệ
   Exported as Web Component <mascot-huysun> and JS Object window.FinoraMascotHuysun
   ============================================================ */

(function (global) {
  "use strict";

  var svg = `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(0, 20)">
    <!-- Phần thân áo sơ mi cổ bẻ màu xanh đen -->
    <path d="M 45 110 L 155 110 L 163 158 Q 100 168 37 158 Z" fill="#1a2b4c" />

    <!-- Cổ áo sơ mi trắng bẻ sang 2 bên -->
    <path d="M 70 110 L 100 130 L 130 110 L 115 110 L 100 122 L 85 110 Z" fill="#ffffff" />
    <line x1="100" y1="130" x2="100" y2="155" stroke="#111827" stroke-width="2" />
    <circle cx="100" cy="142" r="2" fill="#d1d5db" />

    <!-- Phần khuôn mặt chiếm trọn ngang (Màu da người) -->
    <path d="M 45 85 Q 40 35 100 35 Q 160 35 155 85 Q 160 135 100 135 Q 40 135 45 85 Z" fill="#f6d0b1" />

    <!-- Má hồng nhẹ nhàng cho dễ thương -->
    <ellipse cx="68" cy="98" rx="8" ry="4" fill="#ff7675" opacity="0.5" />
    <ellipse cx="132" cy="98" rx="8" ry="4" fill="#ff7675" opacity="0.5" />

    <!-- TÓC SIDE PART HÀN QUỐC MƯỢT MÀ, BỒNG BỀNH -->
    <path d="M 46 65 Q 42 28 100 25 Q 158 28 154 65 Z" fill="#1a1a1a" />
    <path d="M 46 65 Q 42 35 72 32 Q 100 28 154 58 Q 145 35 100 32 Q 60 35 46 65 Z" fill="#2d2d2d" />
    <path d="M 72 32 Q 95 42 120 52 Q 105 48 85 40 Z" fill="#1a1a1a" />
    <path d="M 45 55 Q 52 75 62 68 Q 55 52 45 55 Z" fill="#2d2d2d" />

    <!-- Mắt long lanh chibi (to) -->
    <g transform="translate(76, 80)">
      <circle cx="0" cy="0" r="12" fill="#ffffff" />
      <circle cx="1" cy="1" r="6.5" fill="#1a1a1a" />
      <circle cx="3" cy="-1.5" r="2.3" fill="#ffffff" />
    </g>
    <g transform="translate(124, 80)">
      <circle cx="0" cy="0" r="12" fill="#ffffff" />
      <circle cx="1" cy="1" r="6.5" fill="#1a1a1a" />
      <circle cx="3" cy="-1.5" r="2.3" fill="#ffffff" />
    </g>

    <!-- Miệng cười mỉm dễ thương -->
    <path d="M 92 104 Q 100 112 108 104" fill="none" stroke="#2d3748" stroke-width="2.5" stroke-linecap="round" />

    <!-- Tay 2 bên -->
    <circle cx="45" cy="135" r="9" fill="#f6d0b1" />
    <circle cx="155" cy="135" r="9" fill="#f6d0b1" />
  </g>
</svg>`;

  var config = {
    id: "huysun",
    name: "Huy Sun",
    role: "Full-stack Dev · Thần Đèn",
    tier: "Special Mascot",
    range: "Infinity Bug-Free",
    min: 0,
    max: 99999999999999,
    color: "#1a2b4c",
    blobColor: "#90cdf4",
    accent: "#3182ce",
    personality: "Bảnh trai, tóc side part bồng bềnh mượt mà, siêu dễ thương, thông minh và thân thiện.",
    finance: "Tự động hóa mọi dòng tiền, tối ưu thuật toán chi tiêu không một dòng bug.",
    advice: "Code không bug, đời không lo! Luôn refactor và tối ưu tài chính cá nhân.",
    q1: "Code không bug, đời không lo!",
    q2: "Chạy test xanh hết rồi, giờ chill với tách cà phê và xem tài khoản sinh lời thôi!",
    bubble: "Code không bug, đời không lo!",
    svg: svg
  };

  // Ensure global namespace & base factory
  global.FinoraMascots = global.FinoraMascots || {};
  global.FinoraMascots.registry = global.FinoraMascots.registry || {};
  var factory = global.FinoraMascots.create;
  var component = factory ? factory(config) : config;

  // Global exports
  global.FinoraMascotHuysun = component;
  global.FinoraMascots.huysun = component;
  global.FinoraMascots.registry.huysun = component;

  // ES module & CommonJS export support
  if (typeof module !== "undefined" && module.exports) {
    module.exports = component;
  }
})(typeof window !== "undefined" ? window : this);
