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

let countedOrders = [];

waitForKeyElements ("div[ref='centerContainer'] div[role='row']", getRunningTotal)

function getRunningTotal (jNode) {
    url = window.location.pathname.split("/");
    if (url[1] == "stock" && url[3] == "openorders") {
        // Create totals table if not exists
        if ($("#totals-table").length == 0) {
            console.log("creating table");
            $('<table id="totals-table"></table>').insertAfter($(".bm-tabs").eq(0));
            countedOrders = [];
        }
        // Process table row
        let orderNumber = jNode.children("div[col-id='orders_order_number']").find("p").text().trim();
        let date = jNode.children("div[col-id='orders_despatch_date']").find("p").text().trim().replaceAll("/", "-");
        let qty = parseInt(jNode.children("div[col-id='qty']").find("p").text());
        if (!countedOrders.includes(orderNumber)) {
            if ($("#total-" + date).length == 0) {
                // Create date row if not exists
                let newRow = '<tr><td>' + date + ' - </td><td id="total-' + date + '">0</td></tr>';
                $("#totals-table").append(newRow);
            }
            // Add row quantity to total row
            let totalQty = parseInt($("#total-" + date).text())
            let newTotalQty = totalQty + qty;
            $("#total-" + date).text(newTotalQty.toString());
            // Add order number to array so it is not processed again
            countedOrders.push(orderNumber);
        }
    }
    console.log(jNode);
}