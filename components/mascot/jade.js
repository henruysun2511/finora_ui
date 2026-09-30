/* ============================================================
   Finora Mascot Component — Jade
   Tier: Wealthy (20M – 100M ₫) · Role: Chiến Lược Gia Đầu Tư
   Exported as Web Component <mascot-jade> and JS Object window.FinoraMascotJade
   ============================================================ */

(function (global) {
  "use strict";

  var svg = `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(0, 20)">
    <!-- Body Blob -->
    <path d="M 40 80 Q 40 30 100 30 Q 160 30 160 80 Q 170 160 100 160 Q 30 160 40 80 Z" fill="#38a169" />

    <!-- Sharp Blazer -->
    <path d="M 40 100 L 100 150 L 160 100 L 170 160 L 30 160 Z" fill="#22543d" />
    <!-- Inner shirt -->
    <path d="M 80 100 L 100 140 L 120 100 Z" fill="#fff" />

    <!-- Smart Glasses (Thick dark frames) -->
    <rect x="55" y="65" width="40" height="28" rx="6" fill="#fff" opacity="0.9" stroke="#1a202c" stroke-width="4" />
    <rect x="105" y="65" width="40" height="28" rx="6" fill="#fff" opacity="0.9" stroke="#1a202c" stroke-width="4" />
    <line x1="95" y1="79" x2="105" y2="79" stroke="#1a202c" stroke-width="4" />

    <!-- Eyes (Confident, looking up/forward) -->
    <g transform="translate(75, 79)">
      <circle cx="0" cy="0" r="6" fill="#2d3748" />
      <circle cx="2" cy="-2" r="2" fill="#fff" />
    </g>
    <g transform="translate(125, 79)">
      <circle cx="0" cy="0" r="6" fill="#2d3748" />
      <circle cx="2" cy="-2" r="2" fill="#fff" />
    </g>

    <!-- Mouth (Confident smirk) -->
    <path d="M 90 105 Q 100 110 112 100" fill="none" stroke="#2d3748" stroke-width="3" stroke-linecap="round" />

    <!-- Prop: Upward Chart Tablet -->
    <g transform="translate(110, 110) rotate(10)">
      <rect x="0" y="0" width="40" height="50" rx="4" fill="#f7fafc" stroke="#2d3748" stroke-width="2" />
      <!-- Green upward line -->
      <path d="M 5 40 L 15 30 L 25 35 L 35 15 L 35 45 Z" fill="#48bb78" opacity="0.5" />
      <path d="M 5 40 L 15 30 L 25 35 L 35 15" fill="none" stroke="#2f855a" stroke-width="3" stroke-linejoin="round" />
      <!-- Hand holding it -->
      <circle cx="0" cy="40" r="6" fill="#48bb78" />
    </g>
  </g>
</svg>`;

  var config = {
    id: "jade",
    name: "Jade",
    role: "Chiến Lược Gia Đầu Tư",
    tier: "Wealthy (20M – 100M ₫)",
    range: "20.000.000 – 100.000.000 ₫",
    min: 20000000,
    max: 99999999,
    color: "#059669",
    blobColor: "#68d391",
    accent: "#276749",
    personality: "Sắc sảo, thực tế, ghét việc tiền nằm im một chỗ.",
    finance: "Tiền là công cụ: dùng tiền đẻ ra tiền, dùng tiền để mua lại thời gian.",
    advice: "Thường xuyên gợi ý các quỹ đầu tư, gửi tiết kiệm sinh lời. Khuyến khích chi tiền cho các dịch vụ tiện ích giúp tiết kiệm thời gian.",
    q1: "Số tiền này để không trong thẻ ATM làm gì? Chuyển ngay 10 triệu vào quỹ tích lũy sinh lời đi.",
    q2: "Thời gian của bạn kiếm được nhiều tiền hơn thế. Hãy ủy thác các việc vụn vặt!",
    bubble: "Tiền nên tự sinh lời, đúng chứ?",
    svg: svg
  };

  // Ensure global namespace & base factory
  global.FinoraMascots = global.FinoraMascots || {};
  global.FinoraMascots.registry = global.FinoraMascots.registry || {};
  var factory = global.FinoraMascots.create;
  var component = factory ? factory(config) : config;

  // Global exports
  global.FinoraMascotJade = component;
  global.FinoraMascots.jade = component;
  global.FinoraMascots.registry.jade = component;

  // ES module & CommonJS export support
  if (typeof module !== "undefined" && module.exports) {
    module.exports = component;
  }
})(typeof window !== "undefined" ? window : this);
