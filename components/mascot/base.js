/* ============================================================
   Finora — device-preview/components/mascot/base.js
   Shared Factory & Web Component Base for Finora AI Mascots
   Provides:
     - FinoraMascotFactory: register and instantiate mascot components
     - Shared styling (float animation, speech bubbles, cards, dialogue, profile)
     - Universal custom element lifecycle (<mascot-ash>, <mascot-nora>, etc.)
     - Global namespace window.FinoraMascots
     - Balance-to-mascot resolution utility (getMascotByBalance)
   ============================================================ */

(function (global) {
  "use strict";

  // Global namespace setup
  var FinoraMascots = global.FinoraMascots || {};
  global.FinoraMascots = FinoraMascots;
  FinoraMascots.registry = FinoraMascots.registry || {};

  /* Inject shared stylesheet once */
  var STYLE_ID = "finora-mascot-shared-styles";
  function ensureStyles() {
    if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
    var style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      @keyframes finora-mascot-float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-8px); }
      }
      @keyframes finora-mascot-pop {
        from { transform: scale(0.7); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
      }
      .finora-mascot-root {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        box-sizing: border-box;
      }
      .finora-mascot-svg-wrap {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: auto;
      }
      .finora-mascot-svg-wrap svg {
        width: 100%;
        height: auto;
        display: block;
        overflow: visible;
      }
      .finora-mascot-float {
        animation: finora-mascot-float 4s ease-in-out infinite;
      }
      .finora-mascot-interactive {
        cursor: pointer;
        transition: transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }
      .finora-mascot-interactive:hover {
        transform: scale(1.06) translateY(-4px);
      }
      .finora-mascot-interactive:active {
        transform: scale(0.95);
      }

      /* Speech bubble (cartoon outline style from ai-mascot) */
      .finora-mascot-bubble {
        position: relative;
        background: #ffffff;
        color: #1a202c;
        border: 2.5px solid #1a1a1a;
        border-radius: 16px;
        padding: 9px 13px;
        font-family: 'Outfit', 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        font-size: 12.5px;
        line-height: 1.45;
        font-weight: 700;
        box-shadow: 3px 4px 0 rgba(0, 0, 0, 0.14);
        margin-bottom: 12px;
        max-width: 240px;
        text-align: center;
        z-index: 2;
        animation: finora-mascot-pop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        word-break: break-word;
      }
      .finora-mascot-bubble::after {
        content: "";
        position: absolute;
        bottom: -9px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-top: 9px solid #1a1a1a;
      }
      .finora-mascot-bubble::before {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 7px solid #ffffff;
        z-index: 1;
      }

      /* Card presentation mode */
      .finora-mascot-card {
        background: #ffffff;
        border-radius: 28px;
        padding: 24px 18px 20px;
        text-align: center;
        position: relative;
        overflow: hidden;
        box-shadow: 0 14px 34px rgba(0, 0, 0, 0.05);
        border: 2px solid transparent;
        transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s;
        box-sizing: border-box;
        cursor: pointer;
        user-select: none;
      }
      .finora-mascot-card:hover {
        transform: translateY(-6px);
        box-shadow: 0 20px 42px rgba(0, 0, 0, 0.09);
      }
      .finora-mascot-card.active {
        border-color: var(--accent-c, #0072d5);
        box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent-c, #0072d5) 25%, transparent), 0 20px 42px rgba(0,0,0,0.1);
      }
      .finora-mascot-card-blob {
        position: absolute;
        top: 32%;
        left: 50%;
        width: 130px;
        height: 130px;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        opacity: 0.35;
        filter: blur(18px);
        pointer-events: none;
        z-index: 0;
      }
      .finora-mascot-card-content {
        position: relative;
        z-index: 1;
      }
      .finora-mascot-card-name {
        font-family: 'Outfit', 'Inter', sans-serif;
        font-size: 19px;
        font-weight: 800;
        color: #1a202c;
        margin: 10px 0 2px;
      }
      .finora-mascot-card-tier {
        font-family: 'Outfit', 'Inter', sans-serif;
        font-size: 11.5px;
        font-weight: 700;
        margin-bottom: 4px;
      }
      .finora-mascot-card-role {
        font-family: 'Outfit', 'Inter', sans-serif;
        font-size: 12px;
        font-weight: 600;
        color: #718096;
        line-height: 1.4;
      }

      /* Dialogue row mode */
      .finora-mascot-dialogue {
        display: flex;
        align-items: center;
        gap: 12px;
        background: #ffffff;
        border-radius: 20px;
        padding: 12px 16px;
        border: 1.5px solid #e2e8f0;
        box-shadow: 0 4px 14px rgba(0,0,0,0.03);
        box-sizing: border-box;
      }
      .finora-mascot-dialogue-avatar {
        flex-shrink: 0;
        width: 52px;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .finora-mascot-dialogue-avatar svg {
        width: 100%;
        height: 100%;
      }
      .finora-mascot-dialogue-bubble {
        flex: 1;
        font-family: 'Outfit', 'Inter', sans-serif;
        font-size: 13px;
        line-height: 1.45;
        font-weight: 600;
        color: #1a202c;
      }

      /* Profile spotlight mode */
      .finora-mascot-profile {
        background: #ffffff;
        border-radius: 24px;
        border: 1.5px solid #e2e8f0;
        overflow: hidden;
        box-shadow: 0 14px 36px rgba(23, 32, 48, 0.08);
        box-sizing: border-box;
        font-family: 'Outfit', 'Inter', sans-serif;
      }
      .finora-mascot-profile-avatar-wrap {
        width: 100%;
        height: 170px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
      }
      .finora-mascot-profile-body {
        padding: 18px 20px;
      }
      .finora-mascot-profile-badge {
        display: inline-block;
        padding: 3px 12px;
        border-radius: 999px;
        font-size: 11px;
        font-weight: 800;
        color: #fff;
        margin-bottom: 6px;
      }
      .finora-mascot-profile-name {
        font-size: 20px;
        font-weight: 800;
        color: #1a202c;
        margin: 0;
      }
      .finora-mascot-profile-range {
        font-size: 12px;
        font-weight: 700;
        color: #94a3b8;
      }
      .finora-mascot-profile-row {
        margin-top: 10px;
      }
      .finora-mascot-profile-row h4 {
        font-size: 10px;
        letter-spacing: .08em;
        text-transform: uppercase;
        color: #94a3b8;
        margin: 0 0 2px;
        font-weight: 800;
      }
      .finora-mascot-profile-row p {
        font-size: 12.5px;
        line-height: 1.45;
        color: #374151;
        margin: 0;
      }
      .finora-mascot-profile-quote {
        margin-top: 10px;
        font-size: 12.5px;
        line-height: 1.45;
        color: #1f2937;
        border-left: 3.5px solid var(--accent-c, #0072d5);
        background: #f8fafc;
        padding: 8px 12px;
        border-radius: 0 10px 10px 0;
        font-weight: 600;
      }

      /* Global SVG classes to ensure proper rendering everywhere */
      .eye { fill: #ffffff; }
      .pupil { fill: #2d3748; }
      .highlight { fill: #ffffff; }
      .blush { fill: #ff8a80; opacity: 0.4; }
    `;
    document.head.appendChild(style);
  }

  function esc(s) {
    return String(s || "").replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function parseSize(s) {
    if (!s) return "100%";
    if (/^\d+$/.test(s)) return s + "px";
    return s;
  }

  /* Mascot Component Definition Factory */
  function createMascotComponent(cfg) {
    ensureStyles();

    var id = cfg.id;
    var tagName = "mascot-" + id;

    // Component Definition Object
    var component = {
      id: cfg.id,
      name: cfg.name,
      role: cfg.role,
      tier: cfg.tier,
      range: cfg.range,
      min: typeof cfg.min === "number" ? cfg.min : -Infinity,
      max: typeof cfg.max === "number" ? cfg.max : Infinity,
      color: cfg.color,
      blobColor: cfg.blobColor || cfg.color,
      accent: cfg.accent || cfg.color,
      personality: cfg.personality || "",
      finance: cfg.finance || "",
      advice: cfg.advice || "",
      quotes: cfg.quotes || [cfg.q1, cfg.q2].filter(Boolean),
      q1: cfg.q1 || (cfg.quotes && cfg.quotes[0]) || "",
      q2: cfg.q2 || (cfg.quotes && cfg.quotes[1]) || "",
      bubbleText: cfg.bubble || cfg.q1 || "",
      svg: (cfg.svg || "").trim(),

      /* Render raw SVG */
      renderSvg: function (opts) {
        opts = opts || {};
        var svgStr = this.svg;
        var style = "";
        if (opts.width) style += "width:" + parseSize(opts.width) + ";";
        if (opts.height) style += "height:" + parseSize(opts.height) + ";";
        if (style) {
          svgStr = svgStr.replace("<svg", '<svg style="' + style + '"');
        }
        return svgStr;
      },

      /* Render avatar with optional bubble and float */
      render: function (opts) {
        opts = opts || {};
        var size = parseSize(opts.size || "100%");
        var floatCls = opts.float ? " finora-mascot-float" : "";
        var interCls = opts.interactive ? " finora-mascot-interactive" : "";
        var bubbleHtml = "";

        if (opts.bubble !== false) {
          var bText = typeof opts.bubble === "string" && opts.bubble ? opts.bubble : (opts.bubble === true ? this.bubbleText : "");
          if (bText) {
            bubbleHtml = '<div class="finora-mascot-bubble">' + esc(bText) + '</div>';
          }
        }

        return (
          '<div class="finora-mascot-root' + interCls + '" style="width:' + size + ';">' +
            bubbleHtml +
            '<div class="finora-mascot-svg-wrap' + floatCls + '">' +
              this.svg +
            '</div>' +
          '</div>'
        );
      },

      /* Render Card mode */
      renderCard: function (opts) {
        opts = opts || {};
        var size = parseSize(opts.size || "110px");
        var activeCls = opts.active ? " active" : "";
        return (
          '<div class="finora-mascot-card' + activeCls + '" style="--accent-c:' + this.accent + ';">' +
            '<div class="finora-mascot-card-blob" style="background:' + this.blobColor + ';"></div>' +
            '<div class="finora-mascot-card-content">' +
              '<div class="finora-mascot-svg-wrap" style="width:' + size + ';margin:0 auto;">' +
                this.svg +
              '</div>' +
              '<h4 class="finora-mascot-card-name">' + esc(this.name) + '</h4>' +
              '<div class="finora-mascot-card-tier" style="color:' + this.accent + ';">' + esc(this.tier) + '</div>' +
              '<div class="finora-mascot-card-role">' + esc(this.role) + '</div>' +
            '</div>' +
          '</div>'
        );
      },

      /* Render Dialogue row mode */
      renderDialogue: function (opts) {
        opts = opts || {};
        var text = opts.text || this.q1 || this.bubbleText || "";
        return (
          '<div class="finora-mascot-dialogue">' +
            '<div class="finora-mascot-dialogue-avatar">' +
              this.svg +
            '</div>' +
            '<div class="finora-mascot-dialogue-bubble">' + esc(text) + '</div>' +
          '</div>'
        );
      },

      /* Render Profile Spotlight mode */
      renderProfile: function (opts) {
        opts = opts || {};
        var q1 = (this.quotes && this.quotes[0]) || this.q1 || "";
        var q2 = (this.quotes && this.quotes[1]) || this.q2 || "";
        return (
          '<div class="finora-mascot-profile" style="--accent-c:' + this.accent + ';">' +
            '<div class="finora-mascot-profile-avatar-wrap" style="background: radial-gradient(circle at 50% 30%, color-mix(in srgb, ' + this.accent + ' 20%, #ffffff), #f4f6f9);">' +
              '<div style="width:140px;" class="finora-mascot-float">' + this.svg + '</div>' +
            '</div>' +
            '<div class="finora-mascot-profile-body">' +
              '<span class="finora-mascot-profile-badge" style="background:' + this.color + ';">' + esc(this.tier) + '</span>' +
              '<h3 class="finora-mascot-profile-name">' + esc(this.name) + '</h3>' +
              '<div class="finora-mascot-profile-range">' + esc(this.range) + '</div>' +
              (this.personality ? '<div class="finora-mascot-profile-row"><h4>VAI TRÒ &amp; TÍNH CÁCH</h4><p>' + esc(this.personality) + '</p></div>' : '') +
              (this.finance ? '<div class="finora-mascot-profile-row"><h4>QUAN ĐIỂM TÀI CHÍNH</h4><p>' + esc(this.finance) + '</p></div>' : '') +
              (this.advice ? '<div class="finora-mascot-profile-row"><h4>LỜI KHUYÊN ĐẶC TRƯNG</h4><p>' + esc(this.advice) + '</p></div>' : '') +
              (q1 ? '<div class="finora-mascot-profile-quote">“' + esc(q1) + '”</div>' : '') +
              (q2 ? '<div class="finora-mascot-profile-quote">“' + esc(q2) + '”</div>' : '') +
            '</div>' +
          '</div>'
        );
      }
    };

    // Register into global store
    FinoraMascots.registry[id] = component;
    FinoraMascots[id] = component;
    var capName = id.charAt(0).toUpperCase() + id.slice(1);
    global["FinoraMascot" + capName] = component;
    if (cfg && typeof cfg === "object") {
      Object.assign(cfg, component);
    }

    // Define Web Component / Custom Element
    if (typeof global.customElements !== "undefined" && !global.customElements.get(tagName)) {
      var MascotElement = function MascotElement() {
        return Reflect.construct(HTMLElement, [], MascotElement);
      };

      MascotElement.observedAttributes = ["size", "float", "bubble", "mode", "interactive", "active"];

      MascotElement.prototype = Object.create(HTMLElement.prototype);
      MascotElement.prototype.constructor = MascotElement;

      MascotElement.prototype.connectedCallback = function () {
        ensureStyles();
        var self = this;
        this.onclick = function (e) {
          self.dispatchEvent(new CustomEvent("mascot-click", {
            bubbles: true,
            composed: true,
            detail: { mascot: component, originalEvent: e }
          }));
        };
        this.render();
      };

      MascotElement.prototype.attributeChangedCallback = function () {
        this.render();
      };

      MascotElement.prototype.render = function () {
        var mode = this.getAttribute("mode") || "avatar";
        var size = this.getAttribute("size") || (mode === "card" ? "90px" : "100%");
        var float = this.hasAttribute("float");
        var interactive = this.hasAttribute("interactive");
        var bubbleAttr = this.getAttribute("bubble");
        var bubble = bubbleAttr !== null ? (bubbleAttr === "" ? true : bubbleAttr) : false;

        if (mode === "card") {
          this.innerHTML = component.renderCard({ size: size, active: this.hasAttribute("active") });
        } else if (mode === "dialogue") {
          this.innerHTML = component.renderDialogue({ text: bubbleAttr || undefined });
        } else if (mode === "profile") {
          this.innerHTML = component.renderProfile();
        } else {
          this.innerHTML = component.render({
            size: size,
            float: float,
            bubble: bubble,
            interactive: interactive
          });
        }
      };

      MascotElement.prototype.setBubble = function (text) {
        this.setAttribute("bubble", text);
      };

      Object.defineProperty(MascotElement.prototype, "mascotData", {
        get: function () { return component; }
      });

      global.customElements.define(tagName, MascotElement);
      component.ElementClass = MascotElement;
    }

    return component;
  }

  /* Balance-to-mascot resolution utility */
  var ORDER = ["ash", "penny", "sage", "nora", "jade", "ruby", "bellingham"];

  function getMascotByBalance(balance) {
    var b = Number(balance);
    if (isNaN(b) || b < 0) return FinoraMascots.registry["ash"] || "ash";
    if (b < 1000000) return FinoraMascots.registry["penny"] || "penny";
    if (b < 5000000) return FinoraMascots.registry["sage"] || "sage";
    if (b < 20000000) return FinoraMascots.registry["nora"] || "nora";
    if (b < 100000000) return FinoraMascots.registry["jade"] || "jade";
    if (b < 500000000) return FinoraMascots.registry["ruby"] || "ruby";
    return FinoraMascots.registry["bellingham"] || "bellingham";
  }

  // Expose Factory & Utilities
  FinoraMascots.create = createMascotComponent;
  FinoraMascots.ensureStyles = ensureStyles;
  FinoraMascots.ORDER = ORDER;
  FinoraMascots.getMascotByBalance = getMascotByBalance;

  // Auto-reconcile any mascots registered before base.js was loaded
  for (var k in FinoraMascots.registry) {
    if (Object.prototype.hasOwnProperty.call(FinoraMascots.registry, k)) {
      var item = FinoraMascots.registry[k];
      if (item && !item.render) {
        createMascotComponent(item);
      }
    }
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = FinoraMascots;
  }
})(typeof window !== "undefined" ? window : this);
