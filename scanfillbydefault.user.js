// ==UserScript==
// @name        Brewman v7 - Scan Fill by Default
// @match       https://brewman.premiersystems.com/*
// @grant       none
// @version     1.0
// @downloadURL https://github.com/rebellion-beer-company/brewman-userscripts/blob/master/scanfillbydefault.user.js?raw=true
// @description Show "Scan and Fill Tracked Containers" screen by default when scanning containers
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @require     https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==

waitForKeyElements ("input[data-qa='assembly_scan_fill_tracked_containers']", switchToFill)

function switchToFill (jNode) {
    jNode.click();
}