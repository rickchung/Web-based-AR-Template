// Required: utils.js, jQuery, A-Frame

window.onload = function () {
    // Update the HUD info when the location is close
    let locThreshold = 30; // meters
    let distMap = new Map(); // for tracking the cloest location
    let locEntityIDs = ["nft-location1", "nft-location2", "nft-location3"];

    locEntityIDs.forEach((id) => {
        // Init the tracking state
        distMap.set(id, { dist: -1, distMsg: "", name: "" });
        // Register the update event
        document.querySelector(`#${id}`).addEventListener("gps-entity-place-update-positon", (gpsEntity) => {
            let target = gpsEntity.target;
            let targetID = target.id;
            let targetName = target.getAttribute("data-marker-name");
            let dist = target.getAttribute("distance");
            let distMsg = target.getAttribute("distancemsg");
            let infoPaneID = target.getAttribute("data-info-pane");

            // Update the tracking state
            distMap.set(targetID, { distMsg: distMsg, dist: dist, name: targetName, infoPaneID: infoPaneID });

            // Find any location within the threshold to show
            let cloest = null;
            for (let [key, values] of distMap) {
                if (values.dist <= locThreshold) {
                    cloest = key;
                }
            }
            if (cloest !== null) {
                // If a location is close enough, show the info pane and update the HUD
                let values = distMap.get(cloest);
                updateTrackingInfo(values.infoPaneID, values.name, true);
            } else {
                // Otherwise, just hide everything
                resetInfoPanes();
            }
        });
    });
};
