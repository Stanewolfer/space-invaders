const grid = document.querySelector(".grille")

for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {
        const newgrill = document.createElement("div");

        if(j == 0 || j  == 19){
            if(j ==0){
                newgrill.classList.add("border_left")
            }else{
                newgrill.classList.add("border_right")
            }
        }

        if(i < 3 && j < 15){
            newgrill.classList.add("alien");

        }



        if (i == 19 && j == 10){
            newgrill.classList.add("tireur");
        }

        grid.appendChild(newgrill);
    }
}


window.addEventListener('keydown', (e) => {
    console.log(e);
  
  
  });

document.onkeydown = Spacekey;
function Spacekey(e) {
  e = e || window.event;

  if (e.keyCode == '37') {
    player_left();
  }
  if (e.keyCode == '38') {
    player_up();
  }
  if (e.keyCode == '39') {
    player_right();
  }
  if (e.keyCode == '40') {
    player_down();
  }
  if (e.keyCode == '32') {
    player_shoot();
  }
}
function player_left(){

}
function player_up(){

}
function player_right(){

}
function player_down(){

}
function player_shoot(){

}