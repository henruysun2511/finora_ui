/* ============================================================
   Finora Mascot Component — Nora
   Tier: Comfortable (5M – 20M ₫) · Role: Huấn Luyện Viên Đời Sống (Trợ Lý AI Chính)
   Exported as Web Component <mascot-nora> and JS Object window.FinoraMascotNora
   ============================================================ */

(function (global) {
  "use strict";

  var svg = `<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(0, 20)">
    <!-- Spark Background Aura -->
    <circle cx="100" cy="90" r="80" fill="#ebf4ff" opacity="0.6" />
    <!-- Body Blob (Perfectly symmetrical, futuristic) -->
    <path d="M 40 80 Q 40 30 100 30 Q 160 30 160 80 Q 165 160 100 160 Q 35 160 40 80 Z" fill="#0072d5" />

    <!-- Face Plate (Screen aesthetic) -->
    <rect x="50" y="50" width="100" height="70" rx="35" fill="#ffffff" stroke="#f7fcff" stroke-width="4" />

    <!-- Eyes (Digital/Calm) -->
    <g transform="translate(75, 80)">
      <circle cx="0" cy="0" r="10" fill="#0055a9" />
      <circle cx="2" cy="-2" r="3" fill="#fff" />
    </g>
    <g transform="translate(125, 80)">
      <circle cx="0" cy="0" r="10" fill="#0055a9" />
      <circle cx="2" cy="-2" r="3" fill="#fff" />
    </g>

    <!-- Mouth (Perfect smile arc) -->
    <path d="M 92 98 Q 100 104 108 98" fill="none" stroke="#0055a9" stroke-width="3" stroke-linecap="round" />

    <!-- Prop: Finora Spark ✦ (Floating) -->
    <g transform="translate(145, 30)">
      <path d="M 0 10 Q -10 10 -10 20 Q -10 10 -20 10 Q -10 10 -10 0 Q -10 10 0 10 Z" fill="#f6e05e" />
    </g>
    <g transform="translate(57, 120)">
      <path d="M 0 10 Q -10 10 -10 20 Q -10 10 -20 10 Q -10 10 -10 0 Q -10 10 0 10 Z" fill="#f6e05e" transform="scale(0.6)" />
    </g>

    <!-- Clean UI Collar -->
    <path d="M 70 120 L 130 120 L 120 140 L 80 140 Z" fill="#fff" opacity="0.3" />

    <!-- Prop: Bank Card held in the middle (like Penny holds her coin) -->
    <g transform="translate(100, 140)">
      <!-- Hands wrapping around the card -->
      <circle cx="-24" cy="-4" r="9" fill="#d9e6ff" />
      <circle cx="24" cy="-4" r="9" fill="#d9e6ff" />
      <!-- Bank card -->
      <g transform="translate(0, 0) scale(0.72)">
        <rect x="-24" y="-16" width="48" height="32" rx="6" fill="#ffffff" stroke="#b8c2d4" stroke-width="4" />
        <rect x="-24" y="-16" width="48" height="13" rx="6" fill="#0072d5" />
        <rect x="-24" y="-3" width="48" height="4" fill="#c9d3e2" />
        <rect x="-16" y="-9" width="10" height="8" rx="2" fill="#f5c04a" />
        <circle cx="8" cy="-7" r="1.6" fill="#8892a6" />
        <circle cx="15" cy="-7" r="1.6" fill="#8892a6" />
        <circle cx="22" cy="-7" r="1.6" fill="#8892a6" />
      </g>
    </g>
  </g>
</svg>`;

  var config = {
    id: "nora",
    name: "Nora",
    role: "Huấn Luyện Viên Đời Sống",
    tier: "Comfortable (5M – 20M ₫)",
    range: "5.000.000 – 20.000.000 ₫",
    min: 5000000,
    max: 19999999,
    color: "#0072d5",
    blobColor: "#0072d5",
    accent: "#0055a9",
    personality: "Điềm tĩnh, logic, chuyên nghiệp nhưng vẫn rất thân thiện (chuẩn AI hiện đại).",
    finance: "Quản lý theo quy tắc rõ ràng (ví dụ: 50/30/20): chất lượng cuộc sống và tài chính đi đôi với nhau.",
    advice: "Phân tích dữ liệu, đưa ra lời khuyên dựa trên biểu đồ. Cho phép bạn tiêu tiền nhưng phải nằm trong kế hoạch.",
    q1: "Khoản chi 500k này vẫn nằm trong quỹ \"Giải trí\" của tháng. Bạn hoàn toàn có thể chi trả mà không ảnh hưởng mục tiêu chung.",
    q2: "Có vẻ dạo này bạn hơi tốn tiền ăn ngoài. Có muốn tôi lên kế hoạch nấu ăn tuần tới không?",
    bubble: "Có tôi hỗ trợ bạn, yên tâm nhé ✦",
    svg: svg
  };

  // Ensure global namespace & base factory
  global.FinoraMascots = global.FinoraMascots || {};
  global.FinoraMascots.registry = global.FinoraMascots.registry || {};
  var factory = global.FinoraMascots.create;
  var component = factory ? factory(config) : config;

  // Global exports
  global.FinoraMascotNora = component;
  global.FinoraMascots.nora = component;
  global.FinoraMascots.registry.nora = component;

  // ES module & CommonJS export support
  if (typeof module !== "undefined" && module.exports) {
    module.exports = component;
  }
})(typeof window !== "undefined" ? window : this);
