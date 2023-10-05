// ==UserScript==
// @name        Brewman v7 - New Order New Tab
// @match       https://brewman.premiersystems.com/*
// @grant       none
// @version     1.0
// @description Open New Order screen in new tab to be able to reference the outlet while creating order
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @require     https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==

waitForKeyElements (".brewman-footer > div > div:nth-child(2)", addButton);

function addButton (jNode) {
    url = window.location.pathname.split("/");
    console.log(url);
    if (url[1] == "outlet" && (url[3] == "crm" || url[3] == "saleshistory")) {
        outletId = url[2];
        newButton = "<a href='/orders/create?outletId=" + outletId + "' target='_blank' class='v-btn v-btn--outlined theme--light v-size--default bm-btn mr-2 secondarybtn primary--text' style='border: 2px solid!important'><span class='v-btn__content' style='text-transform: none!important;'>Create New Order (New Tab)</span></a>";
        jNode.prepend(newButton);
    }
}