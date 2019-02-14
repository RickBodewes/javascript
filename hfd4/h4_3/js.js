var mond = ["imgs/mond/mond1.png", "imgs/mond/mond2.png", "imgs/mond/mond3.png", "imgs/mond/mond4.png", "imgs/mond/mond5.png"];
var neus = ["imgs/neus/neus1.png", "imgs/neus/neus2.png", "imgs/neus/neus3.png", "imgs/neus/neus4.png", "imgs/neus/neus5.png",];
var ogen = ["imgs/ogen/ogen1.png", "imgs/ogen/ogen2.png", "imgs/ogen/ogen3.png", "imgs/ogen/ogen4.png", "imgs/ogen/ogen5.png"];

var tellerMond = 0;
var tellerNeus = 0;
var tellerOgen = 0;

function topnext() {
    if(tellerOgen <= 3) {
        tellerOgen++;
        document.getElementById("ogen").src = ogen[tellerOgen];
    }
}

function topback() {
    if (tellerOgen >= 1) {
        tellerOgen--;
        document.getElementById("ogen").src = ogen[tellerOgen];
    }

}


function botnext() {
    if(tellerMond <= 3) {
        tellerMond++;
        document.getElementById("mond").src = mond[tellerMond];
    }
}

function botback() {
    if (tellerMond >= 1) {
        tellerMond--;
        document.getElementById("mond").src = mond[tellerMond];
    }

}


function midnext() {
    if(tellerNeus <= 3) {
        tellerNeus++;
        document.getElementById("neus").src = neus[tellerNeus];
    }
}

function midback() {
    if (tellerNeus >= 1) {
        tellerNeus--;
        document.getElementById("neus").src = neus[tellerNeus];
    }

}
