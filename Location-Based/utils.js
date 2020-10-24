/**
 * Update and show/hide the content of a target at contentPaneID.
 *
 * @param {string} contentPaneID the ID of the panel for current content
 * @param {string} contentTitle the title of current content
 * @param {boolean} show to show the content panel or not
 */
function updateTrackingInfo(contentPaneID, contentTitle, show) {
    let hudTrackerState = $("#markerState");
    if (show) {
        $("#" + contentPaneID).show();
        hudTrackerState.html(contentTitle);
        hudTrackerState.removeClass("danger");
        hudTrackerState.addClass("success");
    } else {
        $("#" + contentPaneID).hide();
        hudTrackerState.html("No marker was found.");
        hudTrackerState.removeClass("success");
        hudTrackerState.addClass("danger");
    }
}

function resetInfoPanes() {
    let hudTrackerState = $("#markerState");
    $(".info-pane").hide();
    hudTrackerState.html("No marker was found.");
    hudTrackerState.removeClass("success");
    hudTrackerState.addClass("danger");
}
