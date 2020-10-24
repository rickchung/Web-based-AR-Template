// TODO: A known bug in iOS mobile webpage: the recourses are not loaded correctly probably due to the cache or A-Frame logistics. Maybe rewrite this routine by A-Frame component.

AFRAME.registerComponent("init-img-markers", {
    init: function () {
        initImgMarkers();
    },
});

function initImgMarkers() {
    // Set up the marker url due to a bug in AR.js
    let cwd = window.location.pathname.split("/").slice(0, -1).join("/");
    let markersFolder = cwd + "/markers";
    console.log("CWD", cwd, "markersFolder", markersFolder);

    $("#nft-marker1").attr("url", markersFolder + "/marker1");
    $("#nft-marker2").attr("url", markersFolder + "/marker2");
    $("#nft-marker3").attr("url", markersFolder + "/marker3");

    // Update the HUD info when a marker is detected
    document.addEventListener("markerFound", (e) => {
        // Show the info pane
        updateTrackingInfo(e.target.getAttribute("data-info-pane"), e.target.getAttribute("data-marker-name"), true);
    });
    document.addEventListener("markerLost", (e) => {
        // Hide the info pane
        updateTrackingInfo(e.target.getAttribute("data-info-pane"), e.target.getAttribute("data-marker-name"), false);
    });
}
