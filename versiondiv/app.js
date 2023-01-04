
const grid = document.querySelector(".grille")

for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {
        const newgrill = document.createElement("div");

        if(i < 3 && j < 15){
            newgrill.classList.add("alien");

        }

        if (i == 19 && j == 10){
            newgrill.classList.add("tireur");
        }

        grid.appendChild(newgrill);
    }
}

map.createmap();

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
  if(e.keyCode=='71'){
    gagner();
  }
  if(e.keyCode=='80'){
    perdu();
  }
}
function player_left(){
  if(map.posX !== 0){
    map.setPosX(map.posX - 1);

    map.grid.innerHTML = "";
    map.createmap();
  }
}
function player_up(){
  if(map.posY !== 16){
    map.setPosY(map.posY - 1);

    map.grid.innerHTML = "";
    map.createmap();
  }
}
function player_right(){
  if(map.posX !== 19){
    map.setPosX(map.posX + 1);

    map.grid.innerHTML = "";
    map.createmap();
  }
}
function player_down(){
  if(map.posY !==19){
    map.setPosY(map.posY + 1);

    map.grid.innerHTML = "";
    map.createmap();
  }
}
function player_shoot(){


}
function perdu(){
    alert("VOUS AVEZ PERDU !");
    var reset=document.querySelector(".bouton")
    var t=document.createTextNode("REJOUER ?");
    reset.append(t);
    reset.style.width="100px";
    reset.style.height="50px";
    reset.style.color="rgba(255,255,255,0.8)";
    reset.style.backgroundColor="grey";
    reset.style.borderRadius="25px";
}
function gagner(){
  alert("VOUS AVEZ GAGNE !");
  var reset=document.querySelector(".bouton")
  var t=document.createTextNode("REJOUER ?");
  reset.append(t);
  reset.style.width="100px";
  reset.style.height="50px";
  reset.style.color="rgba(255,255,255,0.8)";
  reset.style.backgroundColor="grey";
  reset.style.borderRadius="25px";
}

  map.setShoot(map.posY - 1)
  map.grid.innerHTML = "";
  map.createmap();

