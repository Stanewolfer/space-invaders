


window.addEventListener('keydown', (e) => {
    console.log(e);
  
  
  });

document.onkeydown = Spacekey;
function Spacekey(e) {
  e = e || window.event;

  if (e.keyCode == '37') {
    player_left();
  }
  if (e.keyCode == '39') {
    player_right();
  }
  if (e.keyCode == '32') {
    player_shoot();
  }
}
function player_left(){

}
function player_right(){

}
function player_shoot(){

}
