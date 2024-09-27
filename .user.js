// ==UserScript==
// @name         AutoTrimps-OrkunKocyigit
// @version      6.0.0.0
// @namespace    https://orkunkocyigit.github.io/AutoTrimps
// @downloadURL  https://orkunkocyigit.github.io/AutoTrimps/.user.js
// @updateURL    https://orkunkocyigit.github.io/AutoTrimps/.user.js
// @description  Automate all the trimps!
// @author       zininzinin, spindrjr, Ishkaru, genBTC, Zeker0, Psycho-Ray
// @include      *trimps.github.io*
// @include      *kongregate.com/games/GreenSatellite/trimps
// @connect      *orkunkocyigit.github.io/AutoTrimps*
// @connect      *trimps.github.io*
// @connect      self
// @grant        GM_xmlhttpRequest
// ==/UserScript==

var script = document.createElement('script');
script.id = 'AutoTrimps-OrkunKocyigit';
//This can be edited to point to your own Github Repository URL.
script.src = 'https://orkunkocyigit.github.io/AutoTrimps/AutoTrimps2.js';
//script.setAttribute('crossorigin',"use-credentials");
script.setAttribute('crossorigin',"anonymous");
document.head.appendChild(script);
