export let posX = 10;
export let posY = 19;

export function setPosX(value) {
    posX = value;
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

            if(i == 19 || i == 16){
            if(i == 19){
                newgrill.classList.add("border_bot")
            }else{
                newgrill.classList.add("border_top")
            }
            }

            if(i < 3 && j < 15){
                newgrill.classList.add("alien");

            }



            if (i == posY && j == posX){
                newgrill.classList.add("tireur");
                posX = j;
                posY = i;
            }

            grid.appendChild(newgrill);
        }
    }
}
