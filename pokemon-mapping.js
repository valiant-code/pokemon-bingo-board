console.log("we got data:", pokemonData.length)

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var pokemonOnTheBoard = [];

for(var row = 1; row <= 5; row++) {
    for(var col = 1; col <= 5; col++) {
        if (row === 3 && col === 3) {
            //free space
            continue;
        }
        var chosen = false
        while(!chosen) {
            var pokeNum = getRandomInt(1, pokemonData.length) - 1;
            if (pokemonOnTheBoard.indexOf(pokeNum) < 0) {
                chosen = true;
                var chosenPoke = pokemonData[pokeNum]
                pokemonOnTheBoard.push(pokeNum);
                console.log("my stuff", "r" + row + "c" + col);
                var cell = document.getElementById("r"+row+"c"+col);
                console.log("my cell", cell);
                cell.innerText = chosenPoke.name;
            }
        }
    }
}
console.log("done", pokemonOnTheBoard)

