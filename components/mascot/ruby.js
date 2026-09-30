/* ============================================================
   Finora Mascot Component — Ruby
   Tier: Rich (100M – 500M ₫) · Role: Quý Cô Hưởng Thụ
   Exported as Web Component <mascot-ruby> and JS Object window.FinoraMascotRuby
   ============================================================ */

(function (global) {
  "use strict";

  var svg = `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(0, 20)">
    <!-- Body Blob -->
    <path d="M 35 80 Q 35 30 100 30 Q 165 30 165 80 Q 175 160 100 160 Q 25 160 35 80 Z" fill="#9b2c2c" />

    <!-- Fur Cape / Boa -->
    <path d="M 20 110 Q 50 80 100 100 Q 150 80 180 110 Q 170 140 100 130 Q 30 140 20 110 Z" fill="#fff5f5" />

    <!-- Large Gold Crown -->
    <path d="M 70 10 L 80 -15 L 100 5 L 120 -15 L 130 10 Z" fill="#ecc94b" />
    <!-- Jewels on Crown -->
    <circle cx="80" cy="-5" r="4" fill="#fc8181" />
    <circle cx="100" cy="5" r="5" fill="#fc8181" />
    <circle cx="120" cy="-5" r="4" fill="#fc8181" />

    <!-- Eyes (Sultry / Elegant) -->
    <g transform="translate(70, 70)">
      <circle cx="0" cy="0" r="14" fill="#ffffff" class="eye" />
      <path d="M -15 -5 Q 0 -10 15 -5 L 15 -15 L -15 -15 Z" fill="#742a2a" />
      <path d="M 12 -8 L 20 -12" stroke="#742a2a" stroke-width="3" stroke-linecap="round" />
      <circle cx="0" cy="3" r="6" fill="#2d3748" class="pupil" />
      <circle cx="2" cy="0" r="2" fill="#ffffff" class="highlight" />
    </g>
    <g transform="translate(130, 70)">
      <circle cx="0" cy="0" r="14" fill="#ffffff" class="eye" />
      <path d="M -15 -5 Q 0 -10 15 -5 L 15 -15 L -15 -15 Z" fill="#742a2a" />
      <path d="M -12 -8 L -20 -12" stroke="#742a2a" stroke-width="3" stroke-linecap="round" />
      <circle cx="0" cy="3" r="6" fill="#2d3748" class="pupil" />
      <circle cx="2" cy="0" r="2" fill="#ffffff" class="highlight" />
    </g>

    <!-- Blushes -->
    <ellipse cx="50" cy="85" rx="10" ry="5" fill="#f56565" opacity="0.6" />
    <ellipse cx="150" cy="85" rx="10" ry="5" fill="#f56565" opacity="0.6" />

    <!-- Mouth (Sophisticated smirk, red lips) -->
    <path d="M 90 95 Q 100 102 112 90" fill="none" stroke="#742a2a" stroke-width="4" stroke-linecap="round" />
    <path d="M 98 96 Q 100 93 102 96" fill="none" stroke="#f56565" stroke-width="3" stroke-linecap="round" />

    <!-- Prop: Giant Diamond Necklace -->
    <path d="M 80 130 L 100 150 L 120 130" fill="none" stroke="#ecc94b" stroke-width="4" />
    <polygon points="90,150 110,150 100,170" fill="#63b3ed" />
    <polygon points="90,150 110,150 100,150" fill="#90cdf4" />
  </g>
</svg>`;

  var config = {
    id: "ruby",
    name: "Ruby",
    role: "Quý Cô Hưởng Thụ",
    tier: "Rich (100M – 500M ₫)",
    range: "100.000.000 – 500.000.000 ₫",
    min: 100000000,
    max: 499999999,
    color: "#ec4899",
    blobColor: "#feb2b2",
    accent: "#9b2c2c",
    personality: "Sang chảnh, tinh tế, thích đồ \"Auth\" và trải nghiệm cao cấp.",
    finance: "Cuộc đời quá ngắn để dùng đồ rẻ tiền. Đầu tư vào bản thân và trải nghiệm là khoản đầu tư tốt nhất.",
    advice: "Cổ vũ bạn chọn những món đồ chất lượng cao, tối ưu hóa phong cách sống. Chê bai những khoản tiết kiệm vụn vặt.",
    q1: "Quẹt thẻ mua hẳn đồ Auth đi cưng, bạn dư sức mà. Chất lượng mới là mãi mãi!",
    q2: "Kỳ nghỉ này hãy book hạng thương gia nhé. Chúng ta không có thời gian cho việc mệt mỏi đâu.",
    bubble: "Tiền không còn là nỗi lo nữa, hãy tận hưởng!",
    svg: svg
  };

  // Ensure global namespace & base factory
  global.FinoraMascots = global.FinoraMascots || {};
  global.FinoraMascots.registry = global.FinoraMascots.registry || {};
  var factory = global.FinoraMascots.create;
  var component = factory ? factory(config) : config;

  // Global exports
  global.FinoraMascotRuby = component;
  global.FinoraMascots.ruby = component;
  global.FinoraMascots.registry.ruby = component;

  // ES module & CommonJS export support
  if (typeof module !== "undefined" && module.exports) {
    module.exports = component;
  }
})(typeof window !== "undefined" ? window : this);
