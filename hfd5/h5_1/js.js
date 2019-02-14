pics = document.getElementById("pics");

createpicholders();
createCat();



function createpicholders(){
    for(var i = 0; i<9; i++){
        picHolder = document.createElement("div");
        picHolder.className = "catholder";
        picHolder.id = "picholder"+i;
        pics.appendChild(picHolder);
    }
}


function createCat(){
    picHolder = document.getElementsByClassName("catholder");
    for(var i = 0; i<picHolder.length; i++){
        fav = document.createElement("div");
        fav.className = "fav";
        fav.id = "favoriet" + i;
        catpic = document.createElement("img");
        catpic.src = "imgs/cat" + (i+1) + ".jpeg";
        catpic.id = i;
        catpic.addEventListener("click", function(){
            makeFav(this.id)
        });
        picHolder[i].appendChild(fav);
        picHolder[i].appendChild(catpic);
    }
}

function makeFav(id){
    nofav = document.getElementsByClassName("fav");

    for(var i = 0; i < nofav.length; i++){
        nofav[i].style.backgroundImage = "none";
    }

    fav = document.getElementById("favoriet" + id);
    fav.style.backgroundImage = "url('imgs/hartke.png')";
}


