// ==UserScript==
// @name        Brewman v7 - Minimize Outlet Divs
// @match       https://brewman.premiersystems.com/*
// @grant       none
// @version     1.5
// @downloadURL https://github.com/rebellion-beer-company/brewman-userscripts/blob/master/minimize.user.js?raw=true
// @description Minimize all info boxes on outlet pages when loading - Helps finding the required information quickly easier
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @require     https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==

waitForKeyElements (".bm-card-title", minimizeDivs)

function minimizeDivs (jNode) {
    url = window.location.pathname.split("/")
    if (
        url[1] == "distribution" && url[2] == "processing" ||
        url[1] == "distribution" && url[2] == "multi-journey-planning" && url[3] == "vehicleplan"
    ) {
        jNode.click();
    } else if (url[1] == "outlet" && url[3] == "crm") {
        let tabTitle = jNode.parent().attr("data-qa");
        if (tabTitle != "crm_log_communication" && tabTitle != "crm_activity_log" && jNode.parent().attr("label") != "Recently Ordered Products") {
            jNode.click();
        }
    }
}


waitForKeyElements ("div[data-qa='crm_communications']", selectCommunicationsTab)

function selectCommunicationsTab (jNode) {
    jNode.click();
}