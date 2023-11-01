// ==UserScript==
// @name        Brewman v7 - Open Orders Daily Total
// @match       https://brewman.premiersystems.com/*
// @grant       none
// @version     1.0
// @downloadURL https://github.com/rebellion-beer-company/brewman-userscripts/blob/master/openordertotal.user.js?raw=true
// @description Show total for each day on a product's open orders page
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @require     https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==

let total = {};

waitForKeyElements ("div[ref='centerContainer'] div[role='row'], .bm-tabs", getRunningTotal)

function getRunningTotal (jNode) {
    url = window.location.pathname.split("/");
    if (url[1] == "stock" && url[3] == "openorders") {
        if (jNode.attr("class").includes("bm-tabs")) {
            if ($("#totals-table").length == 0) {
                $('<table id="totals-table"></table>').insertAfter(jNode)
            }
        } else {
            let date = jNode.children("div[col-id='orders_despatch_date']").find("p").text().trim().replaceAll("/", "-");
            let qty = jNode.children("div[col-id='qty']").find("p").text().trim();
            console.log(date, qty);
            // let totalTable = 
            if ($("#total-" + date).length == 0) {
                let newRow = '<tr id="total-' + date + '"><td>' + date + '</td><td class="qty">0</td></tr>';
                $("#totals-table").append(newRow);
            }
            console.log($("#total-" + date))
            console.log($("#total-" + date).children())
            console.log($("#total-" + date).children(".qty"))
            let totalQty = parseInt($("#total-" + date).children(".qty").eq(0).text());
            console.log(totalQty)
            let newTotalQty = totalQty + parseInt(qty);
            $("#total-" + date).children(".qty").eq(0).text(newTotalQty.toString());
        }
    }
    console.log(jNode);
}