var urlParams = new URLSearchParams(window.location.search);
var seed = urlParams.get('seed')

if (!seed) {
    seed = Math.round(Math.random() * new Date().getTime())
    urlParams.set('seed', seed);
    const url = new URL(window.location.href);
    url.searchParams.set('seed', seed);
    window.history.replaceState(null, null, url);
}

var myRng = new Math.seedrandom(seed);


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(myRng.quick() * (max - min + 1)) + min;
}

// TODO add button to re-roll the board
// TODO maybe one day add data for other gens

function randomizeBoard() {
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
                    var cell = document.getElementById("r"+row+"c"+col+"-div");
                    cell.innerHTML = "<img src=\"" + chosenPoke.image + "\"/><span>" + chosenPoke.name + "</span>";
                }
            }
        }
    }
    console.log("done", pokemonOnTheBoard)
}

function toggleCell(event) {
    var cell = document.getElementById(event);
    cell.classList.toggle('marked');
}

