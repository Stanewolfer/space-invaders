export let posX = 10;
export let posY = 19;
export let shotpos;

export function setPosX(valueX) {
    posX = valueX;
}
export function setPosY(valueY) {
    posY = valueY;
}
export function setShoot(shotY){
    shotpos = shotY;
}

export const grid = document.querySelector(".grille")

export function createmap(){
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

            if(i == 19){
                newgrill.classList.add("border_bot")
            }

            if(i < 3 && j < 15){
                newgrill.classList.add("alien");

            }



            if (i == posY && j == posX){
                newgrill.classList.add("tireur");
    
            }
            if (i == shotpos && j == posX){
                
                newgrill.classList.add("laser");

            }

            grid.appendChild(newgrill);
        }
    }
}
