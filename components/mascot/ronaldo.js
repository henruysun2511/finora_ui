/* ============================================================
   Finora Mascot Component — Ronaldo
   Tier: Legend (1B+ ₫) · Role: CR7 Siuuu · Kỷ Lục Gia
   Exported as Web Component <mascot-ronaldo> and JS Object window.FinoraMascotRonaldo
   ============================================================ */

(function (global) {
  "use strict";

  var svg = `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(0, 20)">
    <!-- Thân áo ngoài tổng thể: Màu đỏ bã trầu (Form Nora) -->
    <path d="M 40 80 Q 40 30 100 30 Q 160 30 160 80 Q 165 160 100 160 Q 35 160 40 80 Z" fill="#8a1c14" />

    <!-- Phần xanh lá làm vạt/áo bên dưới -->
    <path d="M 42 110 L 158 110 L 163 155 Q 100 163 37 155 Z" fill="#1e6f3e" />

    <!-- Khuôn mặt (Màu da người) -->
    <rect x="50" y="46" width="100" height="70" rx="35" fill="#f6d0b1" />

    <!-- Mắt (Đen) -->
    <g transform="translate(75, 76)">
      <circle cx="0" cy="0" r="10" fill="#1a202c" />
      <circle cx="2" cy="-2" r="3" fill="#fff" />
    </g>
    <g transform="translate(125, 76)">
      <circle cx="0" cy="0" r="10" fill="#1a202c" />
      <circle cx="2" cy="-2" r="3" fill="#fff" />
    </g>

    <!-- Mồm chu (hình số 3 đứng) -->
    <path d="M 96 84 Q 109 83 106 90 Q 103 92 98 92 Q 103 94 106 97 Q 109 103 96 102" fill="none"
      stroke="#2d3748" stroke-width="3.5" stroke-linecap="round" />

    <!-- Số 7 (Vàng kim) nằm chính giữa phần áo xanh -->
    <text x="100" y="142" font-family="'Outfit', sans-serif" font-weight="900" font-size="28" fill="#f6e05e" text-anchor="middle">7</text>

    <!-- Tay -->
    <g transform="translate(100, 140)">
      <circle cx="-24" cy="-4" r="9" fill="#f6d0b1" />
      <circle cx="24" cy="-4" r="9" fill="#f6d0b1" />
    </g>

    <!-- Chú dê con tròn dễ thương (bên trái) -->
    <g transform="translate(-2, 140) scale(0.55)">
      <path d="M 20 -14 Q 24 -26 13 -28" fill="none" stroke="#b7791f" stroke-width="5" stroke-linecap="round" />
      <path d="M 48 -14 Q 44 -26 55 -28" fill="none" stroke="#b7791f" stroke-width="5" stroke-linecap="round" />
      <ellipse cx="11" cy="6" rx="7" ry="11" fill="#f2d5c0" transform="rotate(18 11 6)" />
      <ellipse cx="57" cy="6" rx="7" ry="11" fill="#f2d5c0" transform="rotate(-18 57 6)" />
      <circle cx="34" cy="14" r="25" fill="#fffaf0" stroke="#e2d9c5" stroke-width="2" />
      <circle cx="24" cy="10" r="3.5" fill="#2d3748" />
      <circle cx="46" cy="10" r="3.5" fill="#2d3748" />
      <ellipse cx="35" cy="22" rx="3.5" ry="2.6" fill="#b7791f" />
      <path d="M 30 27 Q 35 31 41 27" fill="none" stroke="#2d3748" stroke-width="2" stroke-linecap="round" />
      <path d="M 26 33 Q 35 44 44 33 Z" fill="#e6ded0" />
      <circle cx="19" cy="17" r="4" fill="#ffb8b8" opacity="0.75" />
      <circle cx="51" cy="17" r="4" fill="#ffb8b8" opacity="0.75" />
    </g>

    <!-- Cúp World Cup (bên phải) -->
    <g transform="translate(173, 145)">
      <rect x="-6" y="8" width="12" height="4" rx="1.5" fill="#1e6f3e" />
      <rect x="-9" y="12" width="18" height="4" rx="2" fill="#d69e2e" />
      <path d="M -5 8 C -12 2, -10 -8, -3 -2" fill="none" stroke="#f6e05e" stroke-width="2.5" stroke-linecap="round" />
      <path d="M 5 8 C 12 2, 10 -8, 3 -2" fill="none" stroke="#f6e05e" stroke-width="2.5" stroke-linecap="round" />
      <line x1="0" y1="8" x2="0" y2="-2" stroke="#d69e2e" stroke-width="2" />
      <circle cx="0" cy="-9" r="7" fill="#ffd75e" stroke="#d69e2e" stroke-width="1.2" />
      <path d="M -6 -9 A 6 6 0 0 0 6 -9" fill="none" stroke="#d69e2e" stroke-width="0.8" />
      <path d="M 0 -16 L 0 -2" fill="none" stroke="#d69e2e" stroke-width="0.8" />
    </g>
  </g>
</svg>`;

  var config = {
    id: "ronaldo",
    name: "Ronaldo",
    role: "CR7 Siuuu · Kỷ Lục Gia",
    tier: "Legend (1B+ ₫)",
    range: "≥ 1.000.000.000 ₫",
    min: 1000000000,
    max: 99999999999999,
    color: "#8a1c14",
    blobColor: "#feb2b2",
    accent: "#1e6f3e",
    personality: "Nhiệt huyết, tự tin vô song, không ngừng phá vỡ mọi kỷ lục tài chính và cuộc sống.",
    finance: "Vô địch tài chính, mỗi khoản đầu tư đều hướng tới đỉnh cao số 1 thế giới.",
    advice: "Không bao giờ thỏa mãn với hiện tại. Luôn đặt mục tiêu cao hơn và Siuuu tới đích!",
    q1: "Siuuuuu! 1 tỷ đó Messi ơi, đếm mỏi tay!",
    q2: "Kỷ lục sinh ra là để phá vỡ. Khối tài sản của bạn cũng vậy!",
    bubble: "Siuuuuu! 1 tỷ đó Messi ơi, đếm mỏi tay!",
    svg: svg
  };

  // Ensure global namespace & base factory
  global.FinoraMascots = global.FinoraMascots || {};
  global.FinoraMascots.registry = global.FinoraMascots.registry || {};
  var factory = global.FinoraMascots.create;
  var component = factory ? factory(config) : config;

  // Global exports
  global.FinoraMascotRonaldo = component;
  global.FinoraMascots.ronaldo = component;
  global.FinoraMascots.registry.ronaldo = component;

  // ES module & CommonJS export support
  if (typeof module !== "undefined" && module.exports) {
    module.exports = component;
  }
})(typeof window !== "undefined" ? window : this);
