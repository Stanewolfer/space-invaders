import * as map from "./map.js";

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
}
function player_left(){
  map.setPosX(map.posX - 1);

  map.grid.innerHTML = "";
  map.createmap();
}
function player_up(){
  map.setPosX(map.posY + 1);

  map.grid.innerHTML = "";
  map.createmap();
}
function player_right(){
  map.setPosX(map.posX + 1);

  map.grid.innerHTML = "";
  map.createmap();
}
function player_down(){
  if()
  map.setPosX(map.posY - 1);

  map.grid.innerHTML = "";
  map.createmap();
}
function player_shoot(){

}
