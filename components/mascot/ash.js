/* ============================================================
   Finora Mascot Component — Ash
   Tier: Debt (< 0 ₫) · Role: Kẻ Sinh Tồn
   Exported as Web Component <mascot-ash> and JS Object window.FinoraMascotAsh
   ============================================================ */

(function (global) {
  "use strict";

  var svg = `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(0, 20)">
    <!-- Body Blob (Dull, sagging shape) -->
    <path d="M 30 90 Q 40 40 100 40 Q 160 40 170 90 Q 180 170 100 160 Q 20 170 30 90 Z" fill="#a0aec0" />
    <!-- Patches and Stitches -->
    <rect x="130" y="110" width="25" height="25" rx="3" fill="#cbd5e0" transform="rotate(15 130 110)" />
    <line x1="125" y1="120" x2="160" y2="125" stroke="#4a5568" stroke-width="2" />
    <line x1="135" y1="110" x2="140" y2="140" stroke="#4a5568" stroke-width="2" />
    <line x1="145" y1="112" x2="150" y2="142" stroke="#4a5568" stroke-width="2" />
    <!-- Bandage on cheek -->
    <rect x="40" y="90" width="20" height="8" fill="#fbd38d" transform="rotate(-20 40 90)" />
    <rect x="45" y="85" width="8" height="20" fill="#fbd38d" transform="rotate(-20 45 85)" />

    <!-- Eyes (Exhausted, dark circles) -->
    <ellipse cx="65" cy="85" rx="16" ry="8" fill="#4a5568" opacity="0.3" />
    <ellipse cx="135" cy="85" rx="16" ry="8" fill="#4a5568" opacity="0.3" />

    <g transform="translate(65, 75)">
      <circle cx="0" cy="0" r="14" fill="#e2e8f0" />
      <!-- Drooping eyelids -->
      <path d="M -15 -5 Q 0 5 15 -5 L 15 -15 L -15 -15 Z" fill="#a0aec0" />
      <circle cx="2" cy="2" r="5" fill="#2d3748" class="pupil" />
    </g>
    <g transform="translate(135, 75)">
      <circle cx="0" cy="0" r="14" fill="#e2e8f0" />
      <path d="M -15 -5 Q 0 5 15 -5 L 15 -15 L -15 -15 Z" fill="#a0aec0" />
      <circle cx="-2" cy="2" r="5" fill="#2d3748" class="pupil" />
    </g>
    <!-- Mouth (Trembling sad line) -->
    <path d="M 88 100 Q 95 95 100 100 T 112 100" fill="none" stroke="#2d3748" stroke-width="3" stroke-linecap="round" />
    <!-- Prop: Spider web & Fly -->
    <path d="M 170 30 L 150 50 M 160 20 L 150 40 M 175 40 L 155 45" stroke="#e2e8f0" stroke-width="1" />
    <circle cx="160" cy="15" r="2" fill="#2d3748" />
  </g>
</svg>`;

  var config = {
    id: "ash",
    name: "Ash",
    role: "Kẻ Sinh Tồn",
    tier: "Debt (< 0 ₫)",
    range: "Nợ · dưới 0 ₫",
    min: -999999999999,
    max: -1,
    color: "#718096",
    blobColor: "#718096",
    accent: "#4a5568",
    personality: "Hay hoảng loạn, cẩn trọng thái quá, theo chủ nghĩa \"thắt lưng buộc bụng\" tuyệt đối.",
    finance: "Mọi khoản chi tiêu đều là mối đe dọa. Ưu tiên số 1 là trả nợ.",
    advice: "Khuyên ngăn mọi khoản chi tiêu không thiết yếu. Thường xuyên cảnh tỉnh bạn.",
    q1: "Khoan đã!! Ly trà sữa này bằng cả 3 bữa mì tôm của chúng ta đấy! Bỏ xuống, bỏ xuống ngay!",
    q2: "Hôm nay bạn chưa quẹt thẻ lần nào! Kỷ lục tuyệt vời, giữ vững nhé!",
    bubble: "Khoan đã!! Ly trà sữa này bằng cả 3 bữa mì tôm đấy!",
    svg: svg
  };

  // Ensure global namespace & base factory
  global.FinoraMascots = global.FinoraMascots || {};
  global.FinoraMascots.registry = global.FinoraMascots.registry || {};
  var factory = global.FinoraMascots.create;
  var component = factory ? factory(config) : config;

  // Global exports
  global.FinoraMascotAsh = component;
  global.FinoraMascots.ash = component;
  global.FinoraMascots.registry.ash = component;

  // ES module & CommonJS export support
  if (typeof module !== "undefined" && module.exports) {
    module.exports = component;
  }
})(typeof window !== "undefined" ? window : this);
