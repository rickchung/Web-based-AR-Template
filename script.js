function riskRating() {
    var rand = Math.floor(Math.random() * 101);

    if(rand > -1 && rand < 10) {
        document.getElementById('rating').innerHTML = '<span class="badge bg-primary">Primary</span>';
        //document.getElementById('rating').style.color = "#00cc99";
    } else if(rand > 10 && rand < 20) {
        document.getElementById('rating').innerHTML = '<span class="badge bg-primary">Primary</span>';
        //document.getElementById('rating').style.color = "#00ff99";
    } else if(rand > 20 && rand < 30) {
        document.getElementById('rating').innerHTML = '<span class="badge bg-primary">Primary</span>';
        //document.getElementById('rating').style.color = "#66ff99";
    } else if(rand > 30 && rand < 40) {
        document.getElementById('rating').innerHTML = '<span class="badge bg-primary">Primary</span>';
        //document.getElementById('rating').style.color = "#99ff99";
    } else if(rand > 40 && rand < 50) {
        document.getElementById('rating').innerHTML = '<span class="badge bg-primary">Primary</span>';
        //document.getElementById('rating').style.color = "#ccff99";
    } else if(rand > 50 && rand < 60) {
        document.getElementById('rating').innerHTML = '<span class="badge bg-primary">Primary</span>';
        //document.getElementById('rating').style.color = "#ffff99";
    } else if(rand > 60 && rand < 70) {
        document.getElementById('rating').innerHTML = '<span class="badge bg-primary">Primary</span>';
        //document.getElementById('rating').style.color = "#ffcc66";
    } else if(rand > 70 && rand < 80) {
        document.getElementById('rating').innerHTML = '<span class="badge bg-primary">Primary</span>';
        //document.getElementById('rating').style.color = "#ff9933";
    } else if(rand > 80 && rand < 90) {
        document.getElementById('rating').innerHTML = '<span class="badge bg-primary">Primary</span>';
        //document.getElementById('rating').style.color = "#ff3300";
    } else if(rand > 90 && rand < 101) {
        document.getElementById('rating').innerHTML = '<span class="badge bg-primary">Primary</span>';
        //document.getElementById('rating').style.color = "#990000";
    }

}

/*function riskRating2() {
    var rand = Math.floor(Math.random() * 101);

    if(rand >= 0 && rand < 10) {
        document.getElementById('rating').innerHTML = rand;
        document.getElementById('rating').style.color = "#00cc99";
    } else if(rand > 10 && rand < 20) {
        document.getElementById('rating').innerHTML = rand;
        document.getElementById('rating').style.color = "#00ff99";
    } else if(rand > 20 && rand < 30) {
        document.getElementById('rating').innerHTML = rand;
        document.getElementById('rating').style.color = "#66ff99";
    } else if(rand > 30 && rand < 40) {
        document.getElementById('rating').innerHTML = rand;
        document.getElementById('rating').style.color = "#99ff99";
    } else if(rand > 40 && rand < 50) {
        document.getElementById('rating').innerHTML = rand;
        document.getElementById('rating').style.color = "#ccff99";
    } else if(rand > 50 && rand < 60) {
        document.getElementById('rating').innerHTML = rand;
        document.getElementById('rating').style.color = "#ffff99";
    } else if(rand > 60 && rand < 70) {
        document.getElementById('rating').innerHTML = rand;
        document.getElementById('rating').style.color = "#ffcc66";
    } else if(rand > 70 && rand < 80) {
        document.getElementById('rating').innerHTML = rand;
        document.getElementById('rating').style.color = "#ff9933";
    } else if(rand > 80 && rand < 90) {
        document.getElementById('rating').innerHTML = rand;
        document.getElementById('rating').style.color = "#ff3300";
    } else if(rand > 90 && rand <= 100) {
        document.getElementById('rating').innerHTML = rand;
        document.getElementById('rating').style.color = "#990000";
    }

}*/

