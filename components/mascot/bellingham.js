/* ============================================================
   Finora Mascot Component — Bellingham
   Tier: Tycoon (500M+ ₫) · Role: Chủ Tịch Tài Phiệt
   Exported as Web Component <mascot-bellingham> and JS Object window.FinoraMascotBellingham
   ============================================================ */

(function (global) {
  "use strict";

  var svg = `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(0, 20)">
    <!-- Floating Gold Bars Background -->
    <g transform="translate(20, 20) rotate(-20)">
      <rect x="0" y="0" width="30" height="15" rx="2" fill="#d69e2e" />
      <rect x="2" y="2" width="26" height="6" rx="1" fill="#ecc94b" />
    </g>
    <g transform="translate(140, 50) rotate(15)">
      <rect x="0" y="0" width="30" height="15" rx="2" fill="#d69e2e" />
      <rect x="2" y="2" width="26" height="6" rx="1" fill="#ecc94b" />
    </g>

    <!-- Body Blob -->
    <path d="M 30 80 Q 30 30 100 30 Q 170 30 170 80 Q 180 160 100 160 Q 20 160 30 80 Z" fill="#1a202c" />

    <!-- Pinstripe Suit details -->
    <line x1="60" y1="120" x2="50" y2="160" stroke="#4a5568" stroke-width="2" />
    <line x1="80" y1="120" x2="70" y2="160" stroke="#4a5568" stroke-width="2" />
    <line x1="120" y1="120" x2="130" y2="160" stroke="#4a5568" stroke-width="2" />
    <line x1="140" y1="120" x2="150" y2="160" stroke="#4a5568" stroke-width="2" />

    <!-- White collar & Gold Tie -->
    <path d="M 80 110 L 100 135 L 120 110 Z" fill="#fff" />
    <path d="M 95 115 L 105 115 L 100 155 Z" fill="#d69e2e" />

    <!-- Solid Gold Top Hat -->
    <path d="M 60 25 L 140 25 L 130 -15 L 70 -15 Z" fill="#d69e2e" />
    <path d="M 50 25 L 150 25 L 150 35 L 50 35 Z" fill="#d69e2e" />
    <rect x="65" y="15" width="70" height="10" fill="#b7791f" />

    <!-- Eyes (Cool, sunglasses) -->
    <g transform="translate(100, 70)">
      <!-- Aviator sunglasses -->
      <path d="M -40 0 Q -20 -10 0 0 Q 20 -10 40 0 L 35 15 Q 20 25 5 10 L 0 5 L -5 10 Q -20 25 -35 15 Z" fill="#2d3748" />
      <!-- Highlight on glasses -->
      <path d="M -30 2 L -15 2" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity="0.5" />
      <path d="M 15 2 L 30 2" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity="0.5" />
      <!-- Bridge frame -->
      <path d="M -45 -2 Q 0 -15 45 -2" fill="none" stroke="#d69e2e" stroke-width="3" />
    </g>

    <!-- Mouth (Very smug) -->
    <path d="M 85 105 Q 100 112 115 98" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" />

    <!-- Prop: Gold cane -->
    <line x1="150" y1="90" x2="165" y2="170" stroke="#d69e2e" stroke-width="6" stroke-linecap="round" />
    <circle cx="150" cy="90" r="8" fill="#fff" stroke="#d69e2e" stroke-width="2" />
    <!-- Hand holding cane -->
    <circle cx="150" cy="110" r="7" fill="#1a202c" stroke="#4a5568" stroke-width="1" />
  </g>
</svg>`;

  var config = {
    id: "bellingham",
    name: "Bellingham",
    role: "Chủ Tịch Tài Phiệt",
    tier: "Tycoon (500M+ ₫)",
    range: "≥ 500.000.000 ₫",
    min: 500000000,
    max: 999999999999,
    color: "#b7791f",
    blobColor: "#ecc94b",
    accent: "#1a202c",
    personality: "Tự mãn, vĩ mô, suy nghĩ kiểu \"tỷ phú\".",
    finance: "Tiền lẻ không quan trọng, đa dạng hóa danh mục đầu tư mới là chân ái. Tiền là điểm số của một trò chơi.",
    advice: "Bỏ qua hoàn toàn các phân tích chi tiêu lặt vặt. Luôn hướng bạn tới việc sở hữu tài sản lớn.",
    q1: "Ly cà phê 100k? Thích thì mua luôn cái chuỗi cà phê đó đi, cấn trừ vào quỹ đầu tư mạo hiểm.",
    q2: "Cảnh báo: Bạn đang có quá nhiều tiền mặt. Chuyển ngay vài trăm triệu vào bất động sản cho tôi!",
    bubble: "Tầm nhìn luôn dài hơi, tiền là điểm số trò chơi.",
    svg: svg
  };

  // Ensure global namespace & base factory
  global.FinoraMascots = global.FinoraMascots || {};
  global.FinoraMascots.registry = global.FinoraMascots.registry || {};
  var factory = global.FinoraMascots.create;
  var component = factory ? factory(config) : config;

  // Global exports
  global.FinoraMascotBellingham = component;
  global.FinoraMascots.bellingham = component;
  global.FinoraMascots.registry.bellingham = component;

  // Aliases for Sterling compatibility
  global.FinoraMascotSterling = component;
  global.FinoraMascots.sterling = component;
  global.FinoraMascots.registry.sterling = component;

  // ES module & CommonJS export support
  if (typeof module !== "undefined" && module.exports) {
    module.exports = component;
  }
})(typeof window !== "undefined" ? window : this);
