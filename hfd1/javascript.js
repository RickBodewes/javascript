
var auto = {
    merk: "ford",
    model: "mustang mach 1",
    jaar: "1969",
    kleur: "zwart en rood"
}



function hi(){
    document.getElementById("a").innerHTML = "hello world";
    document.getElementById("b").innerHTML = "de keur van de auto is: " + auto.kleur;
    for(var i = 0; i<10; i++){
        console.log("i is gelijk aan: " + i);
    }
}

