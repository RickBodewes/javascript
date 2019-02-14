var random = 0;
var currentSpeed = 0;

//document.getElementById("speed").innerHTML = currentSpeed;

var auto = {
    merk: "ford",
    model: "mustang mach 1",
    jaar: "1969",
    topspeed: 230,
    gas: function () {
        random = Math.floor(Math.random() * 7 + 3);
        if (currentSpeed + random >= auto.topspeed) {
            currentSpeed = auto.topspeed;
            document.getElementById("speed").innerHTML = currentSpeed;
            alert("je zit op je maximale snelheid!");
        } else {
            currentSpeed += random;
            document.getElementById("speed").innerHTML = currentSpeed;
        }
        console.log(currentSpeed);
        document.getElementById("speed").innerHTML = currentSpeed;
    },
    vertraag: function () {
        random = Math.floor(Math.random() * 7 + 3);
        if (currentSpeed - random <= 0) {
            currentSpeed = 0;
            document.getElementById("speed").innerHTML = currentSpeed;
            alert("je staat al stil!");
        } else {
            currentSpeed -= random;
            document.getElementById("speed").innerHTML = currentSpeed;
        }
        console.log(currentSpeed);


    },
    toet: function(){
        alert("toet toet");
    }
};