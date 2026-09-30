/* Compatibility Re-export -> device-preview/components/mascot/sage.js */
if (typeof require === "function" && typeof module !== "undefined" && module.exports) {
  module.exports = require("./mascot/sage.js");
} else if (typeof window !== "undefined") {
  if (!window.FinoraMascotSage) {
    var s = document.createElement("script");
    s.src = (function() {
      var scripts = document.getElementsByTagName("script");
      var current = scripts[scripts.length - 1];
      var baseDir = current && current.src ? current.src.substring(0, current.src.lastIndexOf("/") + 1) : "";
      return baseDir + "mascot/sage.js";
    })();
    document.head.appendChild(s);
  }
}
