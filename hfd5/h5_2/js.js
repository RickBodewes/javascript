game = document.getElementById("game");

var imgs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 22, 32, 42, 52, 62, 72, 82, 92];


for (var i = 0; i < imgs.length; i++) {
    var random = Math.floor(Math.random() * 17 + 1);
    var tmp = imgs[i];
    imgs[i] = imgs[random];
    imgs[random] = tmp;
}
console.log(imgs);

var inTurn = false;

var id1 = "";
var id2 = "";
var count = 1;

var imgId1 = "";
var imgId2 = "";

var fout = 0;
var goed = 0;

createTileHolders();

tileImageCreate();


function createTileHolders() {
    for (var i = 0; i < 18; i++) {
        tileHolder = document.createElement("div");
        tileHolder.className = "tile-holder";
        tileHolder.id = "tileHolder" + i;
        /*tileHolder.addEventListener("click", function () {
            test(this.id);
        });*/
        game.appendChild(tileHolder);
    }

}


function tileImageCreate() {
    tileHolder = document.getElementsByClassName("tile-holder");
    for (var i = 0; i < 18; i++) {
        tile = document.createElement("img");
        tile.id = "cat" + imgs[i];


        if (imgs[i] < 10) {
            imgs[i] = 2 + imgs[i] * 10;
        }

        tile.className = "tile" + imgs[i];

        tile.addEventListener("click", function () {
            test(this.id, this.className);
        });

        tile.src = "imgs/vraag.png";
        tileHolder[i].appendChild(tile);
    }


}


function test(id, klasse) {

    if (inTurn === false) {
        inTurn = true;

        switch (count) {
            case 1:
                imgId1 = id;
                id1 = klasse;
                document.getElementById(imgId1).src = "imgs/" + imgId1 + ".jpeg";

                inTurn = false;
                count++;
                break;
            case 2:
                imgId2 = id;
                id2 = klasse;


                if (id1 === id2) {
                    if (imgId1 !== imgId2) {
                        document.getElementById(imgId2).src = "imgs/" + imgId2 + ".jpeg";
                        goed++;
                        document.getElementById("goed").innerHTML = goed;
                        inTurn = false;
                    } else {
                        document.getElementById(imgId1).src = "imgs/vraag.png";
                        count = 1;
                        inTurn = false;
                    }
                } else {
                    document.getElementById(imgId2).src = "imgs/" + imgId2 + ".jpeg";
                    setTimeout(function () {
                        document.getElementById(imgId1).src = "imgs/vraag.png";
                        document.getElementById(imgId2).src = "imgs/vraag.png";
                        fout++;
                        document.getElementById("fout").innerHTML = fout;
                        inTurn = false;
                    }, 1000);
                }

                //inTurn = false;
                count = 1;
                break;
        }

    }

}


