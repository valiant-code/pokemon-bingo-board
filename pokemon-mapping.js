function generateSeedString() {
    var urlParams = new URLSearchParams(window.location.search);
    var seed = Math.round(Math.random() * new Date().getTime())
    urlParams.set('seed', seed);
    const url = new URL(window.location.href);
    url.searchParams.set('seed', seed);
    window.history.replaceState(null, null, url);
    return seed;
}

var urlParams = new URLSearchParams(window.location.search);
var seed = urlParams.get('seed')

if (!seed) {
    seed = generateSeedString();
}

var mySeededRng = new Math.seedrandom('' + seed);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(mySeededRng() * (max - min + 1)) + min;
}


function randomizeBoard() {
    mySeededRng = new Math.seedrandom('' + seed); // this is inconsistent if you pass a number instead of a string

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
                    var image = chosenPoke['image']
                    if (Math.random() < .007) {
                        image = chosenPoke['image-shiny'];
                        console.log('shiny', chosenPoke.name)
                    }
                    cell.innerHTML = "<img src=\"" + image + "\"/><span>" + chosenPoke.name + "</span>";
                }
            }
        }
    }

    //set cells as marked if they returned to the same seed in a single session
    if (seed === sessionStorage.getItem('seed')) {
        var selectedArray = JSON.parse(sessionStorage.getItem('selectedCells') || '[]')
        selectedArray.forEach(cellId => document.getElementById(cellId).classList.add('marked'))
    } else {
        sessionStorage.setItem('seed', seed);
        sessionStorage.removeItem('selectedCells');
    }

    document.getElementById('seed-label').innerText = 'Seed: ' + seed;

}

function toggleCell(event) {
    var cell = document.getElementById(event);
    cell.classList.toggle('marked');
    var alreadySelected = JSON.parse(sessionStorage.getItem('selectedCells') || '[]');
    if (cell.classList.contains('marked')) {
        sessionStorage.setItem('selectedCells', JSON.stringify([cell.id, ...alreadySelected]))
    } else {
        sessionStorage.setItem('selectedCells', JSON.stringify(alreadySelected.filter(c => c !== cell.id)))
    }
}

function rerollBoard() {
    seed = generateSeedString();
    randomizeBoard();
    document.querySelectorAll('.marked').forEach(ele => ele.classList.remove('marked'))
}

