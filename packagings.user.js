// ==UserScript==
// @name        Brewman v7 - Packagings
// @match       https://brewman.premiersystems.com/*
// @grant       none
// @version     1.0
// @downloadURL https://github.com/rebellion-beer-company/brewman-userscripts/blob/master/packagings.user.js?raw=true
// @description Rename "Packagings" to "Packaging"
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @require     https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==

waitForKeyElements ("div.v-list-item__title:contains(Packagings),h1[data-qa='page_title']:contains( Packagings )", editPackagings);

function editPackagings (jNode) {
    jNode.text("Packaging");
}