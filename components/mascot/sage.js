/* ============================================================
   Finora Mascot Component — Sage
   Tier: Getting By (1M – 5M ₫) · Role: Người Làm Vườn Nhẫn Nại
   Exported as Web Component <mascot-sage> and JS Object window.FinoraMascotSage
   ============================================================ */

(function (global) {
  "use strict";

  var svg = `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(0, 20)">
    <!-- Body Blob (Fresh, upright posture) -->
    <path d="M 45 75 Q 45 25 100 25 Q 155 25 155 75 Q 165 155 100 155 Q 35 155 45 75 Z" fill="#e6fffa" />
    <!-- Neat apron/shirt -->
    <path d="M 60 110 L 140 110 L 130 160 L 70 160 Z" fill="#b2f5ea" />

    <!-- Eyes (Bright, hopeful) -->
    <g transform="translate(70, 75)">
      <circle cx="0" cy="0" r="14" fill="#ffffff" class="eye" />
      <circle cx="0" cy="-2" r="7" fill="#2d3748" class="pupil" />
      <path d="M -5 -8 Q 0 -15 5 -8" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" />
    </g>
    <g transform="translate(130, 75)">
      <circle cx="0" cy="0" r="14" fill="#ffffff" class="eye" />
      <circle cx="0" cy="-2" r="7" fill="#2d3748" class="pupil" />
      <path d="M -5 -8 Q 0 -15 5 -8" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" />
    </g>
    <ellipse cx="50" cy="90" rx="10" ry="6" fill="#ff8a80" opacity="0.4" class="blush" />
    <ellipse cx="150" cy="90" rx="10" ry="6" fill="#ff8a80" opacity="0.4" class="blush" />

    <!-- Mouth (Gentle Smile) -->
    <path d="M 90 95 Q 100 110 110 95" fill="none" stroke="#2d3748" stroke-width="4" stroke-linecap="round" />

    <!-- Prop: A sprouting plant in a little pot -->
    <g transform="translate(100, 135)">
      <!-- Pot -->
      <path d="M -15 15 L 15 15 L 10 -5 L -10 -5 Z" fill="#ed8936" />
      <!-- Soil -->
      <ellipse cx="0" cy="-5" rx="10" ry="3" fill="#744210" />
      <!-- Leaves -->
      <path d="M 0 -5 Q -15 -20 -5 -25 Q 5 -15 0 -5" fill="#48bb78" />
      <path d="M 0 -5 Q 15 -15 20 -5 Q 10 5 0 -5" fill="#38a169" />
      <!-- Hands holding the pot -->
      <circle cx="-15" cy="5" r="7" fill="#81e6d9" />
      <circle cx="15" cy="5" r="7" fill="#81e6d9" />
    </g>
  </g>
</svg>`;

  var config = {
    id: "sage",
    name: "Sage",
    role: "Người Làm Vườn Nhẫn Nại",
    tier: "Getting By (1M – 5M ₫)",
    range: "1.000.000 – 5.000.000 ₫",
    min: 1000000,
    max: 4999999,
    color: "#48bb78",
    blobColor: "#9ae6b4",
    accent: "#38a169",
    personality: "Ấm áp, tích cực, kiên nhẫn. Coi tài chính như một cái cây cần được tưới nước mỗi ngày.",
    finance: "Xây dựng thói quen tốt quan trọng hơn là cắt giảm cực đoan.",
    advice: "Cân bằng giữa tiết kiệm và tự thưởng. Rất thích khen ngợi khi bạn đạt được những cột mốc nhỏ.",
    q1: "Quỹ dự phòng của chúng ta đang nhú mầm rất đẹp rồi. Cuối tuần này mua một cuốn sách tự thưởng nhé!",
    q2: "Chậm mà chắc. Hôm nay bạn tiêu xài rất có kỷ luật đấy.",
    bubble: "Cây tài chính đang lớn lên từng ngày rồi!",
    svg: svg
  };

  // Ensure global namespace & base factory
  global.FinoraMascots = global.FinoraMascots || {};
  global.FinoraMascots.registry = global.FinoraMascots.registry || {};
  var factory = global.FinoraMascots.create;
  var component = factory ? factory(config) : config;

  // Global exports
  global.FinoraMascotSage = component;
  global.FinoraMascots.sage = component;
  global.FinoraMascots.registry.sage = component;

  // ES module & CommonJS export support
  if (typeof module !== "undefined" && module.exports) {
    module.exports = component;
  }
})(typeof window !== "undefined" ? window : this);
