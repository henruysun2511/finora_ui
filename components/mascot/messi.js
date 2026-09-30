/* ============================================================
   Finora Mascot Component — Messi
   Tier: Legend (1B+ ₫) · Role: M10 Goat · Thiên Tài Điềm Đạm
   Exported as Web Component <mascot-messi> and JS Object window.FinoraMascotMessi
   ============================================================ */

(function (global) {
  "use strict";

  var svg = `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(0, 20)">
    <!-- Thân áo ngoài tổng thể: Xanh Argentina -->
    <path d="M 40 80 Q 40 30 100 30 Q 160 30 160 80 Q 165 160 100 160 Q 35 160 40 80 Z" fill="#54a0de" />

    <!-- Phần áo trắng + sọc xanh làm vạt/áo bên dưới -->
    <path d="M 42 110 L 158 110 L 163 155 Q 100 163 37 155 Z" fill="#ffffff" />
    <path d="M 42 110 L 158 110 L 160 120 L 40 120 Z" fill="#54a0de" />
    <path d="M 42 132 L 158 132 L 154 142 L 46 142 Z" fill="#54a0de" />

    <!-- Khuôn mặt (Màu da người) -->
    <rect x="50" y="46" width="100" height="70" rx="35" fill="#f6d0b1" />

    <!-- Râu quai nón -->
    <path d="M 58 82 Q 65 118 100 116 Q 135 118 142 82" fill="none" stroke="#3a2b1e" stroke-width="5" stroke-linecap="round" />

    <!-- Mắt (Đen, nhìn sang Ronaldo phía trái) -->
    <g transform="translate(75, 76)">
      <circle cx="0" cy="0" r="10" fill="#1a202c" />
      <circle cx="-3" cy="-2" r="3" fill="#fff" />
    </g>
    <g transform="translate(125, 76)">
      <circle cx="0" cy="0" r="10" fill="#1a202c" />
      <circle cx="-3" cy="-2" r="3" fill="#fff" />
    </g>

    <!-- Mồm buồn (cong ngược) -->
    <path d="M 88 104 Q 100 96 112 104" fill="none" stroke="#2d3748" stroke-width="3.5" stroke-linecap="round" />

    <!-- Số 10 (Xanh đậm) nằm chính giữa phần áo trắng -->
    <text x="100" y="142" font-family="'Outfit', sans-serif" font-weight="900" font-size="28" fill="#1c4e80" text-anchor="middle">10</text>

    <!-- Tay -->
    <g transform="translate(100, 140)">
      <circle cx="-24" cy="-4" r="9" fill="#f6d0b1" />
      <circle cx="24" cy="-4" r="9" fill="#f6d0b1" />
    </g>

    <!-- Quả bóng (bên trái) -->
    <g transform="translate(-2, 150) scale(0.5)">
      <circle cx="0" cy="0" r="22" fill="#ffffff" stroke="#1a202c" stroke-width="2" />
      <polygon points="0,-9 8,-2 5,7 -5,7 -8,-2" fill="#1a202c" />
      <circle cx="-14" cy="8" r="3.5" fill="#1a202c" />
      <circle cx="14" cy="8" r="3.5" fill="#1a202c" />
    </g>

    <!-- Ngôi sao vàng (bên phải) -->
    <g transform="translate(185, 60)">
      <path d="M 0 -10 L 3 -3 L 10 0 L 3 3 L 0 10 L -3 3 L -10 0 L -3 -3 Z" fill="#f6e05e" stroke="#d69e2e" stroke-width="1.5" />
    </g>
  </g>
</svg>`;

  var config = {
    id: "messi",
    name: "Messi",
    role: "M10 Goat · Thiên Tài Điềm Đạm",
    tier: "Legend (1B+ ₫)",
    range: "≥ 1.000.000.000 ₫",
    min: 1000000000,
    max: 99999999999999,
    color: "#54a0de",
    blobColor: "#bee3f8",
    accent: "#1c4e80",
    personality: "Trầm tĩnh, ma thuật, biến những điều phức tạp nhất của tài chính thành nghệ thuật tinh tế.",
    finance: "Quản lý dòng tiền mượt mà như pha đi bóng solo qua 5 hậu vệ.",
    advice: "Giữ vững bình tĩnh, điềm đạm tích lũy và tỏa sáng đúng khoảnh khắc.",
    q1: "Đủ rồi, tôi nghe tiếng 'siuuu' còn ám ảnh hơn báo nợ!",
    q2: "Tài chính vững vàng như cầm cúp vàng World Cup trên tay.",
    bubble: "Đủ rồi, tôi nghe tiếng 'siuuu' còn ám ảnh hơn báo nợ!",
    svg: svg
  };

  // Ensure global namespace & base factory
  global.FinoraMascots = global.FinoraMascots || {};
  global.FinoraMascots.registry = global.FinoraMascots.registry || {};
  var factory = global.FinoraMascots.create;
  var component = factory ? factory(config) : config;

  // Global exports
  global.FinoraMascotMessi = component;
  global.FinoraMascots.messi = component;
  global.FinoraMascots.registry.messi = component;

  // ES module & CommonJS export support
  if (typeof module !== "undefined" && module.exports) {
    module.exports = component;
  }
})(typeof window !== "undefined" ? window : this);
