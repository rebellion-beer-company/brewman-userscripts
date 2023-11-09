// ==UserScript==
// @name        Brewman v7 - New Discount Warning
// @match       https://brewman.premiersystems.com/*
// @grant       none
// @version     1.0
// @downloadURL https://github.com/rebellion-beer-company/brewman-userscripts/blob/master/discountwarning.user.js?raw=true
// @description Show Warning for new discount popup to not select % basis
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @require     https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==

waitForKeyElements ("input[data-qa='discount_basis']", showDiscountWarning)

function showDiscountWarning (jNode) {
    url = window.location.pathname.split("/");
    if (url[1] == "outlet" && url[3] == "pricelists" && url[4] == "pricingcategories") {
        jNode.parents(".col").after($("<h1>SET DISCOUNT BASIS TO <b>£ PER B. BARREL</b>, NOT %!!!!!!!</h1>"))
    }
}