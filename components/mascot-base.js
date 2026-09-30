/* ============================================================
   Finora — device-preview/components/mascot-base.js
   Compatibility Re-export -> device-preview/components/mascot/base.js
   ============================================================ */

if (typeof require === "function" && typeof module !== "undefined" && module.exports) {
  module.exports = require("./mascot/base.js");
} else if (typeof window !== "undefined") {
  // If base.js is not yet loaded, dynamically load it or assume already loaded
  if (!window.FinoraMascots || !window.FinoraMascots.create) {
    var script = document.createElement("script");
    script.src = (function() {
      var scripts = document.getElementsByTagName("script");
      var current = scripts[scripts.length - 1];
      var baseDir = current && current.src ? current.src.substring(0, current.src.lastIndexOf("/") + 1) : "";
      return baseDir + "mascot/base.js";
    })();
    document.head.appendChild(script);
  }
}
