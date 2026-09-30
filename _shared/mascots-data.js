/* Finora — _shared/mascots-data.js
   Centralized data & exact SVGs from static-ui/ai-mascot
*/
(function (global) {
  "use strict";

  var MASCOTS = {
  "ash": {
    "id": "ash",
    "name": "Ash",
    "role": "Kẻ Sinh Tồn",
    "range": "Nợ · dưới 0 ₫",
    "tier": "Debt (< 0 ₫)",
    "color": "#718096",
    "blobColor": "#718096",
    "accent": "#4a5568",
    "min": -999999999999,
    "max": -1,
    "personality": "Hay hoảng loạn, cẩn trọng thái quá, theo chủ nghĩa \"thắt lưng buộc bụng\" tuyệt đối.",
    "finance": "Mọi khoản chi tiêu đều là mối đe dọa. Ưu tiên số 1 là trả nợ.",
    "advice": "Khuyên ngăn mọi khoản chi tiêu không thiết yếu. Thường xuyên cảnh tỉnh bạn.",
    "q1": "Khoan đã!! Ly trà sữa này bằng cả 3 bữa mì tôm của chúng ta đấy! Bỏ xuống, bỏ xuống ngay!",
    "q2": "Hôm nay bạn chưa quẹt thẻ lần nào! Kỷ lục tuyệt vời, giữ vững nhé!",
    "svg": "<svg viewBox=\"0 0 200 240\" xmlns=\"http://www.w3.org/2000/svg\">\n          <g transform=\"translate(0, 20)\">\n            <!-- Body Blob (Dull, sagging shape) -->\n            <path d=\"M 30 90 Q 40 40 100 40 Q 160 40 170 90 Q 180 170 100 160 Q 20 170 30 90 Z\" fill=\"#a0aec0\" />\n            <!-- Patches and Stitches -->\n            <rect x=\"130\" y=\"110\" width=\"25\" height=\"25\" rx=\"3\" fill=\"#cbd5e0\" transform=\"rotate(15 130 110)\" />\n            <line x1=\"125\" y1=\"120\" x2=\"160\" y2=\"125\" stroke=\"#4a5568\" stroke-width=\"2\" />\n            <line x1=\"135\" y1=\"110\" x2=\"140\" y2=\"140\" stroke=\"#4a5568\" stroke-width=\"2\" />\n            <line x1=\"145\" y1=\"112\" x2=\"150\" y2=\"142\" stroke=\"#4a5568\" stroke-width=\"2\" />\n            <!-- Bandage on cheek -->\n            <rect x=\"40\" y=\"90\" width=\"20\" height=\"8\" fill=\"#fbd38d\" transform=\"rotate(-20 40 90)\" />\n            <rect x=\"45\" y=\"85\" width=\"8\" height=\"20\" fill=\"#fbd38d\" transform=\"rotate(-20 45 85)\" />\n\n            <!-- Eyes (Exhausted, dark circles) -->\n            <ellipse cx=\"65\" cy=\"85\" rx=\"16\" ry=\"8\" fill=\"#4a5568\" opacity=\"0.3\" /> <!-- Eye bags -->\n            <ellipse cx=\"135\" cy=\"85\" rx=\"16\" ry=\"8\" fill=\"#4a5568\" opacity=\"0.3\" />\n\n            <g transform=\"translate(65, 75)\">\n              <circle cx=\"0\" cy=\"0\" r=\"14\" fill=\"#e2e8f0\" />\n              <!-- Drooping eyelids -->\n              <path d=\"M -15 -5 Q 0 5 15 -5 L 15 -15 L -15 -15 Z\" fill=\"#a0aec0\" />\n              <circle cx=\"2\" cy=\"2\" r=\"5\" class=\"pupil\" />\n            </g>\n            <g transform=\"translate(135, 75)\">\n              <circle cx=\"0\" cy=\"0\" r=\"14\" fill=\"#e2e8f0\" />\n              <path d=\"M -15 -5 Q 0 5 15 -5 L 15 -15 L -15 -15 Z\" fill=\"#a0aec0\" />\n              <circle cx=\"-2\" cy=\"2\" r=\"5\" class=\"pupil\" />\n            </g>\n            <!-- Mouth (Trembling sad line) -->\n            <path d=\"M 88 100 Q 95 95 100 100 T 112 100\" fill=\"none\" stroke=\"#2d3748\" stroke-width=\"3\"\n              stroke-linecap=\"round\" />\n            <!-- Prop: Spider web & Fly -->\n            <path d=\"M 170 30 L 150 50 M 160 20 L 150 40 M 175 40 L 155 45\" stroke=\"#e2e8f0\" stroke-width=\"1\" />\n            <circle cx=\"160\" cy=\"15\" r=\"2\" fill=\"#2d3748\" /> <!-- Fly -->\n          </g>\n        </svg>"
  },
  "penny": {
    "id": "penny",
    "name": "Penny",
    "role": "Kế Toán Săn Sale",
    "range": "0 – 1.000.000 ₫",
    "tier": "Struggling (0 – 1M ₫)",
    "color": "#dd6b20",
    "blobColor": "#fbd38d",
    "accent": "#dd6b20",
    "min": 0,
    "max": 999999,
    "personality": "Tỉ mỉ, chi li, nữ hoàng săn mã giảm giá, ám ảnh với việc tối ưu từng nghìn lẻ.",
    "finance": "\"Tích tiểu thành đại\", không lãng phí dù chỉ một đồng.",
    "advice": "Luôn nhắc nhở về các mã freeship, voucher, phân tích xem món đồ có thực sự \"đáng tiền\" không.",
    "q1": "Đợi đã, nếu áp mã này vào thứ 6 thì rẻ hơn được 15k! Đừng mua vội!",
    "q2": "Hôm nay tiết kiệm được 20k tiền xe ôm. Tôi bỏ ngay vào ống heo đây!",
    "svg": "<svg viewBox=\"0 0 200 240\" xmlns=\"http://www.w3.org/2000/svg\">\n          <g transform=\"translate(0, 20)\">\n            <!-- Body Blob -->\n            <path d=\"M 40 80 Q 40 30 100 30 Q 160 30 160 80 Q 170 160 100 160 Q 30 160 40 80 Z\" fill=\"#fefcbf\" />\n            <!-- Too large sweater collar (looks handed-down) -->\n            <path d=\"M 60 130 Q 100 160 140 130\" fill=\"none\" stroke=\"#ed8936\" stroke-width=\"12\"\n              stroke-linecap=\"round\" />\n\n            <!-- Eyes (Hyper-focused, wide open) -->\n            <g transform=\"translate(70, 75)\">\n              <circle cx=\"0\" cy=\"0\" r=\"18\" class=\"eye\" />\n              <circle cx=\"3\" cy=\"3\" r=\"8\" class=\"pupil\" />\n              <circle cx=\"5\" cy=\"1\" r=\"3\" class=\"highlight\" />\n            </g>\n            <g transform=\"translate(130, 75)\">\n              <circle cx=\"0\" cy=\"0\" r=\"18\" class=\"eye\" />\n              <circle cx=\"-3\" cy=\"3\" r=\"8\" class=\"pupil\" />\n              <circle cx=\"-1\" cy=\"1\" r=\"3\" class=\"highlight\" />\n            </g>\n\n            <!-- Mouth (Biting lip / nervous concentration) -->\n            <path d=\"M 92 100 Q 100 95 108 100\" fill=\"none\" stroke=\"#2d3748\" stroke-width=\"3\" stroke-linecap=\"round\" />\n            <rect x=\"96\" y=\"100\" width=\"8\" height=\"4\" rx=\"2\" fill=\"#fff\" stroke=\"#2d3748\" stroke-width=\"1\" />\n\n            <!-- Sweat Drop (Working hard to save) -->\n            <path d=\"M 155 45 Q 160 55 155 60 Q 150 55 155 45 Z\" fill=\"#63b3ed\" opacity=\"0.8\" />\n\n            <!-- Prop: Giant Penny clutched tightly -->\n            <g transform=\"translate(100, 140)\">\n              <!-- Arms wrapping around coin -->\n              <circle cx=\"-25\" cy=\"-5\" r=\"8\" fill=\"#f6ad55\" />\n              <circle cx=\"25\" cy=\"-5\" r=\"8\" fill=\"#f6ad55\" />\n              <!-- Giant Coin -->\n              <circle cx=\"0\" cy=\"0\" r=\"22\" fill=\"#ecc94b\" stroke=\"#d69e2e\" stroke-width=\"4\" />\n              <text x=\"0\" y=\"6\" font-family=\"Outfit\" font-weight=\"900\" font-size=\"18\" fill=\"#b7791f\"\n                text-anchor=\"middle\">₫</text>\n              <circle cx=\"-15\" cy=\"10\" r=\"8\" fill=\"#f6ad55\" />\n              <circle cx=\"15\" cy=\"10\" r=\"8\" fill=\"#f6ad55\" />\n            </g>\n          </g>\n        </svg>"
  },
  "sage": {
    "id": "sage",
    "name": "Sage",
    "role": "Người Làm Vườn Nhẫn Nại",
    "range": "1.000.000 – 5.000.000 ₫",
    "tier": "Getting By (1M – 5M ₫)",
    "color": "#38a169",
    "blobColor": "#9ae6b4",
    "accent": "#38a169",
    "min": 1000000,
    "max": 4999999,
    "personality": "Ấm áp, tích cực, kiên nhẫn. Coi tài chính như một cái cây cần được tưới nước mỗi ngày.",
    "finance": "Xây dựng thói quen tốt quan trọng hơn là cắt giảm cực đoan.",
    "advice": "Cân bằng giữa tiết kiệm và tự thưởng. Rất thích khen ngợi khi bạn đạt cột mốc nhỏ.",
    "q1": "Quỹ dự phòng của chúng ta đang nhú mầm rất đẹp rồi. Cuối tuần này tự thưởng nhẹ nhàng nhé!",
    "q2": "Chậm mà chắc. Hôm nay bạn tiêu xài rất có kỷ luật đấy.",
    "svg": "<svg viewBox=\"0 0 200 240\" xmlns=\"http://www.w3.org/2000/svg\">\n          <g transform=\"translate(0, 20)\">\n            <!-- Body Blob (Fresh, upright posture) -->\n            <path d=\"M 45 75 Q 45 25 100 25 Q 155 25 155 75 Q 165 155 100 155 Q 35 155 45 75 Z\" fill=\"#e6fffa\" />\n            <!-- Neat apron/shirt -->\n            <path d=\"M 60 110 L 140 110 L 130 160 L 70 160 Z\" fill=\"#b2f5ea\" />\n\n            <!-- Eyes (Bright, hopeful) -->\n            <g transform=\"translate(70, 75)\">\n              <circle cx=\"0\" cy=\"0\" r=\"14\" class=\"eye\" />\n              <circle cx=\"0\" cy=\"-2\" r=\"7\" class=\"pupil\" />\n              <path d=\"M -5 -8 Q 0 -15 5 -8\" fill=\"none\" stroke=\"#fff\" stroke-width=\"3\" stroke-linecap=\"round\" />\n            </g>\n            <g transform=\"translate(130, 75)\">\n              <circle cx=\"0\" cy=\"0\" r=\"14\" class=\"eye\" />\n              <circle cx=\"0\" cy=\"-2\" r=\"7\" class=\"pupil\" />\n              <path d=\"M -5 -8 Q 0 -15 5 -8\" fill=\"none\" stroke=\"#fff\" stroke-width=\"3\" stroke-linecap=\"round\" />\n            </g>\n            <ellipse cx=\"50\" cy=\"90\" rx=\"10\" ry=\"6\" class=\"blush\" />\n            <ellipse cx=\"150\" cy=\"90\" rx=\"10\" ry=\"6\" class=\"blush\" />\n\n            <!-- Mouth (Gentle Smile) -->\n            <path d=\"M 90 95 Q 100 110 110 95\" fill=\"none\" stroke=\"#2d3748\" stroke-width=\"4\" stroke-linecap=\"round\" />\n\n            <!-- Prop: A sprouting plant in a little pot -->\n            <g transform=\"translate(100, 135)\">\n              <!-- Pot -->\n              <path d=\"M -15 15 L 15 15 L 10 -5 L -10 -5 Z\" fill=\"#ed8936\" />\n              <!-- Soil -->\n              <ellipse cx=\"0\" cy=\"-5\" rx=\"10\" ry=\"3\" fill=\"#744210\" />\n              <!-- Leaves -->\n              <path d=\"M 0 -5 Q -15 -20 -5 -25 Q 5 -15 0 -5\" fill=\"#48bb78\" />\n              <path d=\"M 0 -5 Q 15 -15 20 -5 Q 10 5 0 -5\" fill=\"#38a169\" />\n              <!-- Hands holding the pot -->\n              <circle cx=\"-15\" cy=\"5\" r=\"7\" fill=\"#81e6d9\" />\n              <circle cx=\"15\" cy=\"5\" r=\"7\" fill=\"#81e6d9\" />\n            </g>\n          </g>\n        </svg>"
  },
  "nora": {
    "id": "nora",
    "name": "Nora",
    "role": "Huấn Luyện Viên Đời Sống",
    "range": "5.000.000 – 20.000.000 ₫",
    "tier": "Comfortable (5M – 20M ₫)",
    "color": "#0072d5",
    "blobColor": "#0072d5",
    "accent": "#0055a9",
    "min": 5000000,
    "max": 19999999,
    "personality": "Điềm tĩnh, logic, chuyên nghiệp nhưng vẫn rất thân thiện (chuẩn AI hiện đại).",
    "finance": "Quản lý tài chính theo các quy tắc rõ ràng (ví dụ: 50/30/20). Cân bằng chất lượng cuộc sống.",
    "advice": "Phân tích dữ liệu, đưa ra lời khuyên dựa trên biểu đồ. Cho phép bạn tiêu tiền trong kế hoạch.",
    "q1": "Khoản chi 500k này vẫn nằm trong quỹ \"Giải trí\" của tháng. Bạn hoàn toàn có thể chi trả mà không ảnh hưởng mục tiêu chung.",
    "q2": "Có vẻ dạo này bạn hơi tốn tiền ăn ngoài. Có muốn tôi lên kế hoạch chi tiêu tuần tới không?",
    "svg": "<svg viewBox=\"0 0 200 240\" xmlns=\"http://www.w3.org/2000/svg\">\n          <g transform=\"translate(0, 20)\">\n            <!-- Spark Background Aura -->\n            <circle cx=\"100\" cy=\"90\" r=\"80\" fill=\"#ebf4ff\" opacity=\"0.6\" />\n            <!-- Body Blob (Perfectly symmetrical, futuristic) -->\n            <path d=\"M 40 80 Q 40 30 100 30 Q 160 30 160 80 Q 165 160 100 160 Q 35 160 40 80 Z\" fill=\"#0072d5\" />\n\n            <!-- Face Plate (Screen aesthetic) -->\n            <rect x=\"50\" y=\"50\" width=\"100\" height=\"70\" rx=\"35\" fill=\"#ffffff\" stroke=\"#f7fcff\" stroke-width=\"4\" />\n\n            <!-- Eyes (Digital/Calm) -->\n            <g transform=\"translate(75, 80)\">\n              <circle cx=\"0\" cy=\"0\" r=\"10\" fill=\"#0055a9\" />\n              <circle cx=\"2\" cy=\"-2\" r=\"3\" fill=\"#fff\" />\n            </g>\n            <g transform=\"translate(125, 80)\">\n              <circle cx=\"0\" cy=\"0\" r=\"10\" fill=\"#0055a9\" />\n              <circle cx=\"2\" cy=\"-2\" r=\"3\" fill=\"#fff\" />\n            </g>\n\n            <!-- Mouth (Perfect smile arc) -->\n            <path d=\"M 92 98 Q 100 104 108 98\" fill=\"none\" stroke=\"#0055a9\" stroke-width=\"3\" stroke-linecap=\"round\" />\n\n            <!-- Prop: Finora Spark ✦ (Floating) -->\n            <g transform=\"translate(145, 30)\">\n              <path d=\"M 0 10 Q -10 10 -10 20 Q -10 10 -20 10 Q -10 10 -10 0 Q -10 10 0 10 Z\" fill=\"#f6e05e\" />\n            </g>\n            <g transform=\"translate(57, 120)\">\n              <path d=\"M 0 10 Q -10 10 -10 20 Q -10 10 -20 10 Q -10 10 -10 0 Q -10 10 0 10 Z\" fill=\"#f6e05e\"\n                transform=\"scale(0.6)\" />\n            </g>\n\n            <!-- Clean UI Collar -->\n            <path d=\"M 70 120 L 130 120 L 120 140 L 80 140 Z\" fill=\"#fff\" opacity=\"0.3\" />\n\n            <!-- Prop: Bank Card held in the middle (like Penny holds her coin) -->\n            <g transform=\"translate(100, 140)\">\n              <!-- Hands wrapping around the card -->\n              <circle cx=\"-24\" cy=\"-4\" r=\"9\" fill=\"#d9e6ff\" />\n              <circle cx=\"24\" cy=\"-4\" r=\"9\" fill=\"#d9e6ff\" />\n              <!-- Bank card -->\n              <g transform=\"translate(0, 0) scale(0.72)\">\n                <rect x=\"-24\" y=\"-16\" width=\"48\" height=\"32\" rx=\"6\" fill=\"#ffffff\" stroke=\"#b8c2d4\" stroke-width=\"4\" />\n                <rect x=\"-24\" y=\"-16\" width=\"48\" height=\"13\" rx=\"6\" fill=\"#0072d5\" />\n                <rect x=\"-24\" y=\"-3\" width=\"48\" height=\"4\" fill=\"#c9d3e2\" />\n                <rect x=\"-16\" y=\"-9\" width=\"10\" height=\"8\" rx=\"2\" fill=\"#f5c04a\" />\n                <circle cx=\"8\" cy=\"-7\" r=\"1.6\" fill=\"#8892a6\" />\n                <circle cx=\"15\" cy=\"-7\" r=\"1.6\" fill=\"#8892a6\" />\n                <circle cx=\"22\" cy=\"-7\" r=\"1.6\" fill=\"#8892a6\" />\n              </g>\n            </g>\n          </g>\n        </svg>"
  },
  "jade": {
    "id": "jade",
    "name": "Jade",
    "role": "Chiến Lược Gia Đầu Tư",
    "range": "20.000.000 – 100.000.000 ₫",
    "tier": "Wealthy (20M – 100M ₫)",
    "color": "#059669",
    "blobColor": "#68d391",
    "accent": "#276749",
    "min": 20000000,
    "max": 99999999,
    "personality": "Sắc sảo, thực tế, ghét việc tiền nằm im một chỗ.",
    "finance": "Tiền là công cụ. Phải dùng tiền đẻ ra tiền, và dùng tiền để mua lại thời gian.",
    "advice": "Gợi ý các quỹ đầu tư, gửi tiết kiệm sinh lời. Khuyến khích chi tiền cho các dịch vụ tiện ích.",
    "q1": "Số tiền này để không trong thẻ ATM làm gì? Chuyển ngay 10 triệu vào quỹ tích lũy sinh lời đi.",
    "q2": "Thời gian của bạn kiếm được nhiều tiền hơn thế. Hãy ủy thác các việc vụn vặt!",
    "svg": "<svg viewBox=\"0 0 200 240\" xmlns=\"http://www.w3.org/2000/svg\">\n          <g transform=\"translate(0, 20)\">\n            <!-- Body Blob -->\n            <path d=\"M 40 80 Q 40 30 100 30 Q 160 30 160 80 Q 170 160 100 160 Q 30 160 40 80 Z\" fill=\"#38a169\" />\n\n            <!-- Sharp Blazer -->\n            <path d=\"M 40 100 L 100 150 L 160 100 L 170 160 L 30 160 Z\" fill=\"#22543d\" />\n            <!-- Inner shirt -->\n            <path d=\"M 80 100 L 100 140 L 120 100 Z\" fill=\"#fff\" />\n\n            <!-- Smart Glasses (Thick dark frames) -->\n            <rect x=\"55\" y=\"65\" width=\"40\" height=\"28\" rx=\"6\" fill=\"#fff\" opacity=\"0.9\" stroke=\"#1a202c\"\n              stroke-width=\"4\" />\n            <rect x=\"105\" y=\"65\" width=\"40\" height=\"28\" rx=\"6\" fill=\"#fff\" opacity=\"0.9\" stroke=\"#1a202c\"\n              stroke-width=\"4\" />\n            <line x1=\"95\" y1=\"79\" x2=\"105\" y2=\"79\" stroke=\"#1a202c\" stroke-width=\"4\" />\n\n            <!-- Eyes (Confident, looking up/forward) -->\n            <g transform=\"translate(75, 79)\">\n              <circle cx=\"0\" cy=\"0\" r=\"6\" fill=\"#2d3748\" />\n              <circle cx=\"2\" cy=\"-2\" r=\"2\" fill=\"#fff\" />\n            </g>\n            <g transform=\"translate(125, 79)\">\n              <circle cx=\"0\" cy=\"0\" r=\"6\" fill=\"#2d3748\" />\n              <circle cx=\"2\" cy=\"-2\" r=\"2\" fill=\"#fff\" />\n            </g>\n\n            <!-- Mouth (Confident smirk) -->\n            <path d=\"M 90 105 Q 100 110 112 100\" fill=\"none\" stroke=\"#2d3748\" stroke-width=\"3\" stroke-linecap=\"round\" />\n\n            <!-- Prop: Upward Chart Tablet -->\n            <g transform=\"translate(110, 110) rotate(10)\">\n              <rect x=\"0\" y=\"0\" width=\"40\" height=\"50\" rx=\"4\" fill=\"#f7fafc\" stroke=\"#2d3748\" stroke-width=\"2\" />\n              <!-- Green upward line -->\n              <path d=\"M 5 40 L 15 30 L 25 35 L 35 15 L 35 45 Z\" fill=\"#48bb78\" opacity=\"0.5\" />\n              <path d=\"M 5 40 L 15 30 L 25 35 L 35 15\" fill=\"none\" stroke=\"#2f855a\" stroke-width=\"3\"\n                stroke-linejoin=\"round\" />\n              <!-- Hand holding it -->\n              <circle cx=\"0\" cy=\"40\" r=\"6\" fill=\"#48bb78\" />\n            </g>\n          </g>\n        </svg>"
  },
  "ruby": {
    "id": "ruby",
    "name": "Ruby",
    "role": "Quý Cô Hưởng Thụ",
    "range": "100.000.000 – 500.000.000 ₫",
    "tier": "Rich (100M – 500M ₫)",
    "color": "#ec4899",
    "blobColor": "#feb2b2",
    "accent": "#9b2c2c",
    "min": 100000000,
    "max": 499999999,
    "personality": "Sang chảnh, tinh tế, thích đồ \"Auth\" và trải nghiệm cao cấp.",
    "finance": "Cuộc đời quá ngắn để dùng đồ rẻ tiền. Đầu tư vào bản thân và trải nghiệm là khoản đầu tư tốt nhất.",
    "advice": "Cổ vũ bạn chọn những món đồ chất lượng cao, tối ưu hóa phong cách sống.",
    "q1": "Quẹt thẻ mua hẳn đồ Auth đi cưng, bạn dư sức mà. Chất lượng mới là mãi mãi!",
    "q2": "Kỳ nghỉ này hãy book hạng thương gia nhé. Chúng ta không có thời gian cho việc mệt mỏi đâu.",
    "svg": "<svg viewBox=\"0 0 200 240\" xmlns=\"http://www.w3.org/2000/svg\">\n          <g transform=\"translate(0, 20)\">\n            <!-- Body Blob -->\n            <path d=\"M 35 80 Q 35 30 100 30 Q 165 30 165 80 Q 175 160 100 160 Q 25 160 35 80 Z\" fill=\"#9b2c2c\" />\n\n            <!-- Fur Cape / Boa -->\n            <path d=\"M 20 110 Q 50 80 100 100 Q 150 80 180 110 Q 170 140 100 130 Q 30 140 20 110 Z\" fill=\"#fff5f5\" />\n\n            <!-- Large Gold Crown -->\n            <path d=\"M 70 10 L 80 -15 L 100 5 L 120 -15 L 130 10 Z\" fill=\"#ecc94b\" />\n            <!-- Jewels on Crown -->\n            <circle cx=\"80\" cy=\"-5\" r=\"4\" fill=\"#fc8181\" />\n            <circle cx=\"100\" cy=\"5\" r=\"5\" fill=\"#fc8181\" />\n            <circle cx=\"120\" cy=\"-5\" r=\"4\" fill=\"#fc8181\" />\n\n            <!-- Eyes (Sultry / Elegant) -->\n            <g transform=\"translate(70, 70)\">\n              <circle cx=\"0\" cy=\"0\" r=\"14\" class=\"eye\" />\n              <path d=\"M -15 -5 Q 0 -10 15 -5 L 15 -15 L -15 -15 Z\" fill=\"#742a2a\" /> <!-- Heavy eyelid -->\n              <path d=\"M 12 -8 L 20 -12\" stroke=\"#742a2a\" stroke-width=\"3\" stroke-linecap=\"round\" /> <!-- Eyelash -->\n              <circle cx=\"0\" cy=\"3\" r=\"6\" class=\"pupil\" />\n              <circle cx=\"2\" cy=\"0\" r=\"2\" class=\"highlight\" />\n            </g>\n            <g transform=\"translate(130, 70)\">\n              <circle cx=\"0\" cy=\"0\" r=\"14\" class=\"eye\" />\n              <path d=\"M -15 -5 Q 0 -10 15 -5 L 15 -15 L -15 -15 Z\" fill=\"#742a2a\" />\n              <path d=\"M -12 -8 L -20 -12\" stroke=\"#742a2a\" stroke-width=\"3\" stroke-linecap=\"round\" />\n              <circle cx=\"0\" cy=\"3\" r=\"6\" class=\"pupil\" />\n              <circle cx=\"2\" cy=\"0\" r=\"2\" class=\"highlight\" />\n            </g>\n\n            <!-- Blushes -->\n            <ellipse cx=\"50\" cy=\"85\" rx=\"10\" ry=\"5\" fill=\"#f56565\" opacity=\"0.6\" />\n            <ellipse cx=\"150\" cy=\"85\" rx=\"10\" ry=\"5\" fill=\"#f56565\" opacity=\"0.6\" />\n\n            <!-- Mouth (Sophisticated smirk, red lips) -->\n            <path d=\"M 90 95 Q 100 102 112 90\" fill=\"none\" stroke=\"#742a2a\" stroke-width=\"4\" stroke-linecap=\"round\" />\n            <path d=\"M 98 96 Q 100 93 102 96\" fill=\"none\" stroke=\"#f56565\" stroke-width=\"3\" stroke-linecap=\"round\" />\n\n            <!-- Prop: Giant Diamond Necklace -->\n            <path d=\"M 80 130 L 100 150 L 120 130\" fill=\"none\" stroke=\"#ecc94b\" stroke-width=\"4\" />\n            <polygon points=\"90,150 110,150 100,170\" fill=\"#63b3ed\" />\n            <polygon points=\"90,150 110,150 100,150\" fill=\"#90cdf4\" />\n          </g>\n        </svg>"
  },
  "bellingham": {
    "id": "bellingham",
    "name": "Bellingham",
    "role": "Chủ Tịch Tài Phiệt",
    "range": "≥ 500.000.000 ₫",
    "tier": "Tycoon (500M+ ₫)",
    "color": "#b7791f",
    "blobColor": "#ecc94b",
    "accent": "#1a202c",
    "min": 500000000,
    "max": 999999999999,
    "personality": "Tự mãn, vĩ mô, suy nghĩ kiểu \"tỷ phú\".",
    "finance": "Tiền lẻ không quan trọng, đa dạng hóa danh mục đầu tư mới là chân ái. Tiền là điểm số của một trò chơi.",
    "advice": "Bỏ qua hoàn toàn các phân tích chi tiêu lặt vặt. Luôn hướng bạn tới việc sở hữu tài sản lớn.",
    "q1": "Ly cà phê 100k? Thích thì mua luôn cái chuỗi cà phê đó đi, cấn trừ vào quỹ đầu tư mạo hiểm.",
    "q2": "Cảnh báo: Bạn đang có quá nhiều tiền mặt. Chuyển ngay vài trăm triệu vào bất động sản cho tôi!",
    "svg": "<svg viewBox=\"0 0 200 240\" xmlns=\"http://www.w3.org/2000/svg\">\n          <g transform=\"translate(0, 20)\">\n            <!-- Floating Gold Bars Background -->\n            <g transform=\"translate(20, 20) rotate(-20)\">\n              <rect x=\"0\" y=\"0\" width=\"30\" height=\"15\" rx=\"2\" fill=\"#d69e2e\" />\n              <rect x=\"2\" y=\"2\" width=\"26\" height=\"6\" rx=\"1\" fill=\"#ecc94b\" />\n            </g>\n            <g transform=\"translate(140, 50) rotate(15)\">\n              <rect x=\"0\" y=\"0\" width=\"30\" height=\"15\" rx=\"2\" fill=\"#d69e2e\" />\n              <rect x=\"2\" y=\"2\" width=\"26\" height=\"6\" rx=\"1\" fill=\"#ecc94b\" />\n            </g>\n\n            <!-- Body Blob -->\n            <path d=\"M 30 80 Q 30 30 100 30 Q 170 30 170 80 Q 180 160 100 160 Q 20 160 30 80 Z\" fill=\"#1a202c\" />\n\n            <!-- Pinstripe Suit details -->\n            <line x1=\"60\" y1=\"120\" x2=\"50\" y2=\"160\" stroke=\"#4a5568\" stroke-width=\"2\" />\n            <line x1=\"80\" y1=\"120\" x2=\"70\" y2=\"160\" stroke=\"#4a5568\" stroke-width=\"2\" />\n            <line x1=\"120\" y1=\"120\" x2=\"130\" y2=\"160\" stroke=\"#4a5568\" stroke-width=\"2\" />\n            <line x1=\"140\" y1=\"120\" x2=\"150\" y2=\"160\" stroke=\"#4a5568\" stroke-width=\"2\" />\n\n            <!-- White collar & Gold Tie -->\n            <path d=\"M 80 110 L 100 135 L 120 110 Z\" fill=\"#fff\" />\n            <path d=\"M 95 115 L 105 115 L 100 155 Z\" fill=\"#d69e2e\" />\n\n            <!-- Solid Gold Top Hat -->\n            <path d=\"M 60 25 L 140 25 L 130 -15 L 70 -15 Z\" fill=\"#d69e2e\" />\n            <path d=\"M 50 25 L 150 25 L 150 35 L 50 35 Z\" fill=\"#d69e2e\" />\n            <rect x=\"65\" y=\"15\" width=\"70\" height=\"10\" fill=\"#b7791f\" />\n\n            <!-- Eyes (Cool, sunglasses) -->\n            <g transform=\"translate(100, 70)\">\n              <!-- Aviator sunglasses -->\n              <path d=\"M -40 0 Q -20 -10 0 0 Q 20 -10 40 0 L 35 15 Q 20 25 5 10 L 0 5 L -5 10 Q -20 25 -35 15 Z\"\n                fill=\"#2d3748\" />\n              <!-- Highlight on glasses -->\n              <path d=\"M -30 2 L -15 2\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" opacity=\"0.5\" />\n              <path d=\"M 15 2 L 30 2\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" opacity=\"0.5\" />\n              <!-- Bridge frame -->\n              <path d=\"M -45 -2 Q 0 -15 45 -2\" fill=\"none\" stroke=\"#d69e2e\" stroke-width=\"3\" />\n            </g>\n\n            <!-- Mouth (Very smug) -->\n            <path d=\"M 85 105 Q 100 112 115 98\" fill=\"none\" stroke=\"#fff\" stroke-width=\"3\" stroke-linecap=\"round\" />\n\n            <!-- Prop: Gold cane -->\n            <line x1=\"150\" y1=\"90\" x2=\"165\" y2=\"170\" stroke=\"#d69e2e\" stroke-width=\"6\" stroke-linecap=\"round\" />\n            <circle cx=\"150\" cy=\"90\" r=\"8\" fill=\"#fff\" stroke=\"#d69e2e\" stroke-width=\"2\" />\n            <!-- Hand holding cane -->\n            <circle cx=\"150\" cy=\"110\" r=\"7\" fill=\"#1a202c\" stroke=\"#4a5568\" stroke-width=\"1\" />\n          </g>\n        </svg>"
  }
};
  MASCOTS.sterling = MASCOTS.bellingham; // alias

  var ORDER = ["ash", "penny", "sage", "nora", "jade", "ruby", "bellingham"];

  function getMascotByBalance(balance) {
    var b = Number(balance);
    if (isNaN(b)) b = 5000000;
    if (b < 0) return "ash";
    if (b < 1000000) return "penny";
    if (b < 5000000) return "sage";
    if (b < 20000000) return "nora";
    if (b < 100000000) return "jade";
    if (b < 500000000) return "ruby";
    return "bellingham";
  }

  function formatVND(amount) {
    var n = Number(amount) || 0;
    return n.toLocaleString("vi-VN") + " ₫";
  }

  var STORE_KEY = "finora_onboarding_state";
  var Store = {
    get: function () {
      try {
        var s = localStorage.getItem(STORE_KEY) || sessionStorage.getItem(STORE_KEY);
        if (s) return JSON.parse(s);
      } catch (e) {}
      return {
        name: "Nguyễn Minh",
        language: "vi",
        currency: "VND",
        walletName: "Ví cá nhân",
        accountType: "cash",
        accountLabel: "Tiền mặt",
        balance: 5000000,
        selectedMascot: "nora"
      };
    },
    set: function (patch) {
      var cur = this.get();
      var up = Object.assign({}, cur, patch);
      try {
        localStorage.setItem(STORE_KEY, JSON.stringify(up));
        sessionStorage.setItem(STORE_KEY, JSON.stringify(up));
      } catch (e) {}
      return up;
    }
  };

  global.FinoraMascots = {
    MASCOTS: MASCOTS,
    ORDER: ORDER,
    getMascotByBalance: getMascotByBalance,
    formatVND: formatVND,
    store: Store
  };

})(window);
