const grid = document.querySelector(".grille")

for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {
        const newgrill = document.createElement("div");


        if (i == 19 && j == 10){
            newgrill.classList.add("tireur");
        }

        grid.appendChild(newgrill);
    }
}

function gameOver(){
    
}