/* ============================================================
   Finora — device-preview/components/mascot/index.js
   Master Entry & Barrel Export for all Finora Mascot Components
   Provides all 10 mascots:
     - 7 Core Financial Tier Mascots:
       Ash, Penny, Sage, Nora, Jade, Ruby, Bellingham (Sterling)
     - 2 Legends:
       Ronaldo, Messi
     - 1 Special:
       Huy Sun
   ============================================================ */

(function (global) {
  "use strict";

  // Mascot identifiers
  var TIER_IDS = ["ash", "penny", "sage", "nora", "jade", "ruby", "bellingham"];
  var LEGEND_IDS = ["ronaldo", "messi"];
  var SPECIAL_IDS = ["huysun"];
  var ALL_IDS = TIER_IDS.concat(LEGEND_IDS, SPECIAL_IDS);

  // If running in CommonJS / Bundler environment, require all modules
  if (typeof module !== "undefined" && module.exports && typeof require === "function") {
    var base = require("./base.js");
    var ash = require("./ash.js");
    var penny = require("./penny.js");
    var sage = require("./sage.js");
    var nora = require("./nora.js");
    var jade = require("./jade.js");
    var ruby = require("./ruby.js");
    var bellingham = require("./bellingham.js");
    var sterling = require("./sterling.js");
    var ronaldo = require("./ronaldo.js");
    var messi = require("./messi.js");
    var huysun = require("./huysun.js");

    var bundle = {
      base: base,
      ash: ash,
      penny: penny,
      sage: sage,
      nora: nora,
      jade: jade,
      ruby: ruby,
      bellingham: bellingham,
      sterling: sterling,
      ronaldo: ronaldo,
      messi: messi,
      huysun: huysun,
      FinoraMascots: global.FinoraMascots,
      TIER_IDS: TIER_IDS,
      LEGEND_IDS: LEGEND_IDS,
      SPECIAL_IDS: SPECIAL_IDS,
      ALL_IDS: ALL_IDS,
      get: function (id) {
        return global.FinoraMascots && global.FinoraMascots.registry ? global.FinoraMascots.registry[id] : null;
      },
      getAll: function () {
        return ALL_IDS.map(function (id) { return bundle.get(id); }).filter(Boolean);
      }
    };

    module.exports = bundle;
    return;
  }

  // Browser Global Environment:
  var FinoraMascots = global.FinoraMascots || {};
  global.FinoraMascots = FinoraMascots;
  FinoraMascots.registry = FinoraMascots.registry || {};

  FinoraMascots.TIER_IDS = TIER_IDS;
  FinoraMascots.LEGEND_IDS = LEGEND_IDS;
  FinoraMascots.SPECIAL_IDS = SPECIAL_IDS;
  FinoraMascots.ALL_IDS = ALL_IDS;

  FinoraMascots.get = function (id) {
    return FinoraMascots.registry[id] || FinoraMascots[id] || null;
  };

  FinoraMascots.getAll = function () {
    return ALL_IDS.map(function (id) { return FinoraMascots.get(id); }).filter(Boolean);
  };

  FinoraMascots.getTiers = function () {
    return TIER_IDS.map(function (id) { return FinoraMascots.get(id); }).filter(Boolean);
  };

  FinoraMascots.getLegends = function () {
    return LEGEND_IDS.map(function (id) { return FinoraMascots.get(id); }).filter(Boolean);
  };

  FinoraMascots.getSpecial = function () {
    return SPECIAL_IDS.map(function (id) { return FinoraMascots.get(id); }).filter(Boolean);
  };

})(typeof window !== "undefined" ? window : this);
