var imgs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var teller = 0;

function next() {
    if(teller <= 7) {
        teller++;
        document.getElementById("cat").src = "imgs/cat" + imgs[teller] + ".jpeg";
        console.log(teller);
    }
}

function back() {
    if(teller >= 1) {
        teller--;
        document.getElementById("cat").src = "imgs/cat" + imgs[teller] + ".jpeg";
        console.log(teller);
    }

}

