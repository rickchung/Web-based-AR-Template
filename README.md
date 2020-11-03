# AR Template for CPI101 Fall2020 at ASU Tempe, Arizona

![](https://media.giphy.com/media/mK4R969pndOCnqUUSH/giphy.gif)

You can directly clone or download this repository as template for your project milestone 3. We provide two versions of AR templates: image-based (in the folder *Image-Based*) AR and location-based AR (*Location-Based*). You can choose either one of them for your project as long as you test and make sure the template works on your own device. 

## How to test the template?

You can test the templates here: [https://rickchung.github.io/CPI101F20-Project-AR-Template/](https://rickchung.github.io/CPI101F20-Project-AR-Template/).

How-to:

1. Use your mobile phone to open the above link. **If you are using iPhone, you can only use Safari to see the AR effect. If you are using Android, please use FireFox if your Chrome does not work.**
1. To test the image-based template, click on the link "Go to Image-based Template" and then point your camera toward the images on the home webpage.
1. To test the location-based template, click on the link "Go to Location-based Template" and then take your mobile phone to the places as shown in the images on the home webpage.
1. If you can see a pop-up window when the phone finds a marker, your phone is compatible with the template. 

## Which files do I need?

**Note: Please do not move the existing files around into new folders.** The AR template will not work if files are organized in a different way due to some bugs. We highly recommend that you just clone the whole repository and directly work on the files of the template you'd like to use. 

To use the image-based tracking, you need the following files:

- the three code files `explore_img.html`, `explore_img.js`, `utils.js`
- the CSS file `ar_temp.css`
- the folder `markers` and everything inside there.

To use the location-based tracking, you need the following files:

- the three code files `explore_loc.html`, `explore_loc.js`, `utils.js`
- the CSS file `ar_temp.css`

## Recommended Workflow

1. Clone this repository by your own GitHub account. Or download it as zip file and then import it to GitHub on your computer. Do not include the template into any existing GitHub repository. Otherwise, the website will not work.
1. Add your partners as collaborators into your repository on GitHub
1. Enable GitHub Pages to host the website
1. Read the template HTML file and find the place to fill in your code.

In the templates of both image-based and location-based AR, you should find the following code where you can fill in your HTML or JavaScript code:

```html
<div id="nft-marker1-info" class="info-pane" >
    <h1>Fill in some info about this location.</h1>
</div>
<div id="nft-marker2-info" class="info-pane">
    <h1>Fill in some info about this location.</h1>
</div>
<div id="nft-marker3-info" class="info-pane">
    <h1>Fill in some info about this location.</h1>
</div>
```

Marker1 is the Old Main at ASU, Marker2 is Hayden Library, and Marker3 is ASU Gammage. To make sure your content will show up when a marker is tracked, **you must plug in your content inside those div tags.**

## How to add my own markers?

You are welcomed to customize and add your own markers if you'd like to do something different. For the two templates, you can add your own markers by the following guide.

### How to add a location to the location-based AR template?

It is relatively easy to add a new location marker into the template. In `explore_loc.html`, you should find the following code:

```html
<!-- For Location-based Tracking -->
<a-entity id="nft-location1" gps-entity-place="latitude: 33.4210363; longitude: -111.9340285;" data-info-pane="nft-marker1-info" data-marker-name="Old Main"></a-entity>

<a-entity id="nft-location2" gps-entity-place="latitude: 33.4188262; longitude: -111.935245;" data-info-pane="nft-marker2-info" data-marker-name="Hayden Library"></a-entity>

<a-entity id="nft-location3" gps-entity-place="latitude: 33.4158052; longitude: -111.9382668;" data-info-pane="nft-marker3-info" data-marker-name="ASU Gammage"></a-entity> -->            
```

By reading the code you will find out they are location information of the three predefined markers:

- `gps-entity-place`: the latitude and longitude of the place
- `data-info-pane`: the ID of the HTML panel that will show up when the marker is tracked
- `data-marker-name`: the name of the location marker

To add a new place to track, you can simply edit/modify the current code here, or you can add a new `a-entity` with these three attributes. Latitude and longitude of a place can be found in Google Map. 

### How to add an image to the image-based AR template?

It is a little tricky to add a new image marker. In the template file `explore_img.html`, you should find the following code:

```html
<a-nft type="nft" url="x" id="nft-marker1" data-info-pane="nft-marker1-info" data-marker-name="Old Main"></a-nft>
<a-nft type="nft" url="x" id="nft-marker2" data-info-pane="nft-marker2-info" data-marker-name="Hayden Library"></a-nft>
<a-nft type="nft" url="x" id="nft-marker3" data-info-pane="nft-marker3-info" data-marker-name="ASU Gammage"></a-nft>
```

They are simply information of associated image markers, some of which are the same as those in the location-based template. The most important attribute here is `url` whose content is "x" in HTML but will be set by JavaScript when loaded. Due to a bug in the library, we have to use this weird workaround to make the image-tracking AR works on GitHub Pages. 

To make your development easier, if you'd like to add your own images, we highly recoommend that you modify and replace existing markers instead of adding a new one. To do this, please follow these steps:

1. Rename your image as "marker1", "marker2", or "marker3" (the name of an exising marker to replace).
1. Visit [the marker creator](https://carnaux.github.io/NFT-Marker-Creator/). 
1. In the creator you will find a scale of confidence whcih shows you the quality of your marker. Your marker must be complex enough for the image-based AR to work smoothly. The default images we provide all have 4-5 stars.
1. Upload the image to the creator.
1. Click "Generate" to start the conversion and download the marker files.
1. Unzip the marker files and then copy to the folder `markers`. Overwrite any existing files in that folder.
1. Once you are done, bring up your image and then test it on your website.