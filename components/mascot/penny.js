/* ============================================================
   Finora Mascot Component — Penny
   Tier: Struggling (0 – 1M ₫) · Role: Kế Toán Săn Sale
   Exported as Web Component <mascot-penny> and JS Object window.FinoraMascotPenny
   ============================================================ */

(function (global) {
  "use strict";

  var svg = `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(0, 20)">
    <!-- Body Blob -->
    <path d="M 40 80 Q 40 30 100 30 Q 160 30 160 80 Q 170 160 100 160 Q 30 160 40 80 Z" fill="#fefcbf" />
    <!-- Too large sweater collar (looks handed-down) -->
    <path d="M 60 130 Q 100 160 140 130" fill="none" stroke="#ed8936" stroke-width="12" stroke-linecap="round" />

    <!-- Eyes (Hyper-focused, wide open) -->
    <g transform="translate(70, 75)">
      <circle cx="0" cy="0" r="18" fill="#ffffff" class="eye" />
      <circle cx="3" cy="3" r="8" fill="#2d3748" class="pupil" />
      <circle cx="5" cy="1" r="3" fill="#ffffff" class="highlight" />
    </g>
    <g transform="translate(130, 75)">
      <circle cx="0" cy="0" r="18" fill="#ffffff" class="eye" />
      <circle cx="-3" cy="3" r="8" fill="#2d3748" class="pupil" />
      <circle cx="-1" cy="1" r="3" fill="#ffffff" class="highlight" />
    </g>

    <!-- Mouth (Biting lip / nervous concentration) -->
    <path d="M 92 100 Q 100 95 108 100" fill="none" stroke="#2d3748" stroke-width="3" stroke-linecap="round" />
    <rect x="96" y="100" width="8" height="4" rx="2" fill="#fff" stroke="#2d3748" stroke-width="1" />

    <!-- Sweat Drop (Working hard to save) -->
    <path d="M 155 45 Q 160 55 155 60 Q 150 55 155 45 Z" fill="#63b3ed" opacity="0.8" />

    <!-- Prop: Giant Penny clutched tightly -->
    <g transform="translate(100, 140)">
      <!-- Arms wrapping around coin -->
      <circle cx="-25" cy="-5" r="8" fill="#f6ad55" />
      <circle cx="25" cy="-5" r="8" fill="#f6ad55" />
      <!-- Giant Coin -->
      <circle cx="0" cy="0" r="22" fill="#ecc94b" stroke="#d69e2e" stroke-width="4" />
      <text x="0" y="6" font-family="'Outfit', sans-serif" font-weight="900" font-size="18" fill="#b7791f" text-anchor="middle">₫</text>
      <circle cx="-15" cy="10" r="8" fill="#f6ad55" />
      <circle cx="15" cy="10" r="8" fill="#f6ad55" />
    </g>
  </g>
</svg>`;

  var config = {
    id: "penny",
    name: "Penny",
    role: "Kế Toán Săn Sale",
    tier: "Struggling (0 – 1M ₫)",
    range: "0 – 1.000.000 ₫",
    min: 0,
    max: 999999,
    color: "#d97706",
    blobColor: "#fbd38d",
    accent: "#dd6b20",
    personality: "Tỉ mỉ, chi li, nữ hoàng săn mã giảm giá, ám ảnh với việc tối ưu từng nghìn lẻ.",
    finance: "\"Tích tiểu thành đại\", không lãng phí dù chỉ một đồng.",
    advice: "Luôn nhắc nhở về các mã freeship, voucher, và phân tích xem món đồ có thực sự \"đáng tiền\" không.",
    q1: "Đợi đã, nếu áp mã này vào thứ 6 thì rẻ hơn được 15k! Đừng mua vội!",
    q2: "Hôm nay tiết kiệm được 20k tiền xe ôm. Tôi bỏ ngay vào ống heo đây!",
    bubble: "Một đồng cũng là tiền, nhớ săn voucher nhé!",
    svg: svg
  };

  // Ensure global namespace & base factory
  global.FinoraMascots = global.FinoraMascots || {};
  global.FinoraMascots.registry = global.FinoraMascots.registry || {};
  var factory = global.FinoraMascots.create;
  var component = factory ? factory(config) : config;

  // Global exports
  global.FinoraMascotPenny = component;
  global.FinoraMascots.penny = component;
  global.FinoraMascots.registry.penny = component;

  // ES module & CommonJS export support
  if (typeof module !== "undefined" && module.exports) {
    module.exports = component;
  }
})(typeof window !== "undefined" ? window : this);
