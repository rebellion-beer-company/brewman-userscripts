// ==UserScript==
// @name        Brewman v7 - Minimize Outlet Divs
// @match       https://brewman.premiersystems.com/*
// @grant       none
// @version     1.1
// @description Minimize all info boxes on outlet pages when loading - Helps finding the required information quickly easier
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @require     https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==

waitForKeyElements (".bm-card-title", minimizeDivs)

function minimizeDivs (jNode) {
    url = window.location.pathname.split("/")
    console.log(url)
    if (url[1] == "outlet" && url[3] == "crm") {
        jNode.click();
    }
}