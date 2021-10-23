//Taken from https://pokeapi.co/docs/v2
// TODO maybe add data for other gens - right now only gen 3

var pokemonData = [
  {
    "name": "Bulbasaur",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/1.png"
  },
  {
    "name": "Ivysaur",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/2.png"
  },
  {
    "name": "Venusaur",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/3.png"
  },
  {
    "name": "Charmander",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/4.png"
  },
  {
    "name": "Charmeleon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/5.png"
  },
  {
    "name": "Charizard",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/6.png"
  },
  {
    "name": "Squirtle",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/7.png"
  },
  {
    "name": "Wartortle",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/8.png"
  },
  {
    "name": "Blastoise",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/9.png"
  },
  {
    "name": "Caterpie",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/10.png"
  },
  {
    "name": "Metapod",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/11.png"
  },
  {
    "name": "Butterfree",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/12.png"
  },
  {
    "name": "Weedle",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/13.png"
  },
  {
    "name": "Kakuna",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/14.png"
  },
  {
    "name": "Beedrill",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/15.png"
  },
  {
    "name": "Pidgey",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/16.png"
  },
  {
    "name": "Pidgeotto",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/17.png"
  },
  {
    "name": "Pidgeot",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/18.png"
  },
  {
    "name": "Rattata",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/19.png"
  },
  {
    "name": "Raticate",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/20.png"
  },
  {
    "name": "Spearow",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/21.png"
  },
  {
    "name": "Fearow",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/22.png"
  },
  {
    "name": "Ekans",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/23.png"
  },
  {
    "name": "Arbok",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/24.png"
  },
  {
    "name": "Pikachu",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/25.png"
  },
  {
    "name": "Raichu",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/26.png"
  },
  {
    "name": "Sandshrew",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/27.png"
  },
  {
    "name": "Sandslash",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/28.png"
  },
  {
    "name": "Nidoran-f",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/29.png"
  },
  {
    "name": "Nidorina",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/30.png"
  },
  {
    "name": "Nidoqueen",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/31.png"
  },
  {
    "name": "Nidoran-m",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/32.png"
  },
  {
    "name": "Nidorino",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/33.png"
  },
  {
    "name": "Nidoking",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/34.png"
  },
  {
    "name": "Clefairy",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/35.png"
  },
  {
    "name": "Clefable",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/36.png"
  },
  {
    "name": "Vulpix",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/37.png"
  },
  {
    "name": "Ninetales",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/38.png"
  },
  {
    "name": "Jigglypuff",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/39.png"
  },
  {
    "name": "Wigglytuff",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/40.png"
  },
  {
    "name": "Zubat",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/41.png"
  },
  {
    "name": "Golbat",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/42.png"
  },
  {
    "name": "Oddish",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/43.png"
  },
  {
    "name": "Gloom",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/44.png"
  },
  {
    "name": "Vileplume",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/45.png"
  },
  {
    "name": "Paras",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/46.png"
  },
  {
    "name": "Parasect",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/47.png"
  },
  {
    "name": "Venonat",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/48.png"
  },
  {
    "name": "Venomoth",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/49.png"
  },
  {
    "name": "Diglett",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/50.png"
  },
  {
    "name": "Dugtrio",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/51.png"
  },
  {
    "name": "Meowth",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/52.png"
  },
  {
    "name": "Persian",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/53.png"
  },
  {
    "name": "Psyduck",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/54.png"
  },
  {
    "name": "Golduck",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/55.png"
  },
  {
    "name": "Mankey",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/56.png"
  },
  {
    "name": "Primeape",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/57.png"
  },
  {
    "name": "Growlithe",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/58.png"
  },
  {
    "name": "Arcanine",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/59.png"
  },
  {
    "name": "Poliwag",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/60.png"
  },
  {
    "name": "Poliwhirl",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/61.png"
  },
  {
    "name": "Poliwrath",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/62.png"
  },
  {
    "name": "Abra",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/63.png"
  },
  {
    "name": "Kadabra",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/64.png"
  },
  {
    "name": "Alakazam",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/65.png"
  },
  {
    "name": "Machop",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/66.png"
  },
  {
    "name": "Machoke",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/67.png"
  },
  {
    "name": "Machamp",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/68.png"
  },
  {
    "name": "Bellsprout",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/69.png"
  },
  {
    "name": "Weepinbell",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/70.png"
  },
  {
    "name": "Victreebel",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/71.png"
  },
  {
    "name": "Tentacool",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/72.png"
  },
  {
    "name": "Tentacruel",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/73.png"
  },
  {
    "name": "Geodude",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/74.png"
  },
  {
    "name": "Graveler",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/75.png"
  },
  {
    "name": "Golem",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/76.png"
  },
  {
    "name": "Ponyta",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/77.png"
  },
  {
    "name": "Rapidash",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/78.png"
  },
  {
    "name": "Slowpoke",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/79.png"
  },
  {
    "name": "Slowbro",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/80.png"
  },
  {
    "name": "Magnemite",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/81.png"
  },
  {
    "name": "Magneton",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/82.png"
  },
  {
    "name": "Farfetchd",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/83.png"
  },
  {
    "name": "Doduo",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/84.png"
  },
  {
    "name": "Dodrio",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/85.png"
  },
  {
    "name": "Seel",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/86.png"
  },
  {
    "name": "Dewgong",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/87.png"
  },
  {
    "name": "Grimer",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/88.png"
  },
  {
    "name": "Muk",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/89.png"
  },
  {
    "name": "Shellder",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/90.png"
  },
  {
    "name": "Cloyster",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/91.png"
  },
  {
    "name": "Gastly",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/92.png"
  },
  {
    "name": "Haunter",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/93.png"
  },
  {
    "name": "Gengar",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/94.png"
  },
  {
    "name": "Onix",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/95.png"
  },
  {
    "name": "Drowzee",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/96.png"
  },
  {
    "name": "Hypno",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/97.png"
  },
  {
    "name": "Krabby",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/98.png"
  },
  {
    "name": "Kingler",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/99.png"
  },
  {
    "name": "Voltorb",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/100.png"
  },
  {
    "name": "Electrode",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/101.png"
  },
  {
    "name": "Exeggcute",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/102.png"
  },
  {
    "name": "Exeggutor",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/103.png"
  },
  {
    "name": "Cubone",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/104.png"
  },
  {
    "name": "Marowak",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/105.png"
  },
  {
    "name": "Hitmonlee",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/106.png"
  },
  {
    "name": "Hitmonchan",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/107.png"
  },
  {
    "name": "Lickitung",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/108.png"
  },
  {
    "name": "Koffing",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/109.png"
  },
  {
    "name": "Weezing",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/110.png"
  },
  {
    "name": "Rhyhorn",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/111.png"
  },
  {
    "name": "Rhydon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/112.png"
  },
  {
    "name": "Chansey",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/113.png"
  },
  {
    "name": "Tangela",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/114.png"
  },
  {
    "name": "Kangaskhan",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/115.png"
  },
  {
    "name": "Horsea",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/116.png"
  },
  {
    "name": "Seadra",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/117.png"
  },
  {
    "name": "Goldeen",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/118.png"
  },
  {
    "name": "Seaking",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/119.png"
  },
  {
    "name": "Staryu",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/120.png"
  },
  {
    "name": "Starmie",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/121.png"
  },
  {
    "name": "Mr-mime",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/122.png"
  },
  {
    "name": "Scyther",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/123.png"
  },
  {
    "name": "Jynx",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/124.png"
  },
  {
    "name": "Electabuzz",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/125.png"
  },
  {
    "name": "Magmar",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/126.png"
  },
  {
    "name": "Pinsir",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/127.png"
  },
  {
    "name": "Tauros",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/128.png"
  },
  {
    "name": "Magikarp",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/129.png"
  },
  {
    "name": "Gyarados",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/130.png"
  },
  {
    "name": "Lapras",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/131.png"
  },
  {
    "name": "Ditto",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/132.png"
  },
  {
    "name": "Eevee",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/133.png"
  },
  {
    "name": "Vaporeon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/134.png"
  },
  {
    "name": "Jolteon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/135.png"
  },
  {
    "name": "Flareon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/136.png"
  },
  {
    "name": "Porygon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/137.png"
  },
  {
    "name": "Omanyte",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/138.png"
  },
  {
    "name": "Omastar",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/139.png"
  },
  {
    "name": "Kabuto",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/140.png"
  },
  {
    "name": "Kabutops",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/141.png"
  },
  {
    "name": "Aerodactyl",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/142.png"
  },
  {
    "name": "Snorlax",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/143.png"
  },
  {
    "name": "Articuno",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/144.png"
  },
  {
    "name": "Zapdos",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/145.png"
  },
  {
    "name": "Moltres",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/146.png"
  },
  {
    "name": "Dratini",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/147.png"
  },
  {
    "name": "Dragonair",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/148.png"
  },
  {
    "name": "Dragonite",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/149.png"
  },
  {
    "name": "Mewtwo",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/150.png"
  },
  {
    "name": "Mew",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/151.png"
  },
  {
    "name": "Chikorita",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/152.png"
  },
  {
    "name": "Bayleef",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/153.png"
  },
  {
    "name": "Meganium",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/154.png"
  },
  {
    "name": "Cyndaquil",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/155.png"
  },
  {
    "name": "Quilava",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/156.png"
  },
  {
    "name": "Typhlosion",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/157.png"
  },
  {
    "name": "Totodile",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/158.png"
  },
  {
    "name": "Croconaw",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/159.png"
  },
  {
    "name": "Feraligatr",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/160.png"
  },
  {
    "name": "Sentret",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/161.png"
  },
  {
    "name": "Furret",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/162.png"
  },
  {
    "name": "Hoothoot",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/163.png"
  },
  {
    "name": "Noctowl",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/164.png"
  },
  {
    "name": "Ledyba",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/165.png"
  },
  {
    "name": "Ledian",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/166.png"
  },
  {
    "name": "Spinarak",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/167.png"
  },
  {
    "name": "Ariados",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/168.png"
  },
  {
    "name": "Crobat",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/169.png"
  },
  {
    "name": "Chinchou",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/170.png"
  },
  {
    "name": "Lanturn",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/171.png"
  },
  {
    "name": "Pichu",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/172.png"
  },
  {
    "name": "Cleffa",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/173.png"
  },
  {
    "name": "Igglybuff",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/174.png"
  },
  {
    "name": "Togepi",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/175.png"
  },
  {
    "name": "Togetic",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/176.png"
  },
  {
    "name": "Natu",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/177.png"
  },
  {
    "name": "Xatu",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/178.png"
  },
  {
    "name": "Mareep",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/179.png"
  },
  {
    "name": "Flaaffy",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/180.png"
  },
  {
    "name": "Ampharos",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/181.png"
  },
  {
    "name": "Bellossom",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/182.png"
  },
  {
    "name": "Marill",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/183.png"
  },
  {
    "name": "Azumarill",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/184.png"
  },
  {
    "name": "Sudowoodo",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/185.png"
  },
  {
    "name": "Politoed",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/186.png"
  },
  {
    "name": "Hoppip",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/187.png"
  },
  {
    "name": "Skiploom",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/188.png"
  },
  {
    "name": "Jumpluff",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/189.png"
  },
  {
    "name": "Aipom",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/190.png"
  },
  {
    "name": "Sunkern",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/191.png"
  },
  {
    "name": "Sunflora",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/192.png"
  },
  {
    "name": "Yanma",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/193.png"
  },
  {
    "name": "Wooper",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/194.png"
  },
  {
    "name": "Quagsire",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/195.png"
  },
  {
    "name": "Espeon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/196.png"
  },
  {
    "name": "Umbreon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/197.png"
  },
  {
    "name": "Murkrow",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/198.png"
  },
  {
    "name": "Slowking",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/199.png"
  },
  {
    "name": "Misdreavus",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/200.png"
  },
  {
    "name": "Unown",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/201.png"
  },
  {
    "name": "Wobbuffet",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/202.png"
  },
  {
    "name": "Girafarig",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/203.png"
  },
  {
    "name": "Pineco",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/204.png"
  },
  {
    "name": "Forretress",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/205.png"
  },
  {
    "name": "Dunsparce",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/206.png"
  },
  {
    "name": "Gligar",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/207.png"
  },
  {
    "name": "Steelix",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/208.png"
  },
  {
    "name": "Snubbull",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/209.png"
  },
  {
    "name": "Granbull",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/210.png"
  },
  {
    "name": "Qwilfish",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/211.png"
  },
  {
    "name": "Scizor",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/212.png"
  },
  {
    "name": "Shuckle",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/213.png"
  },
  {
    "name": "Heracross",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/214.png"
  },
  {
    "name": "Sneasel",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/215.png"
  },
  {
    "name": "Teddiursa",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/216.png"
  },
  {
    "name": "Ursaring",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/217.png"
  },
  {
    "name": "Slugma",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/218.png"
  },
  {
    "name": "Magcargo",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/219.png"
  },
  {
    "name": "Swinub",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/220.png"
  },
  {
    "name": "Piloswine",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/221.png"
  },
  {
    "name": "Corsola",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/222.png"
  },
  {
    "name": "Remoraid",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/223.png"
  },
  {
    "name": "Octillery",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/224.png"
  },
  {
    "name": "Delibird",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/225.png"
  },
  {
    "name": "Mantine",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/226.png"
  },
  {
    "name": "Skarmory",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/227.png"
  },
  {
    "name": "Houndour",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/228.png"
  },
  {
    "name": "Houndoom",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/229.png"
  },
  {
    "name": "Kingdra",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/230.png"
  },
  {
    "name": "Phanpy",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/231.png"
  },
  {
    "name": "Donphan",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/232.png"
  },
  {
    "name": "Porygon2",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/233.png"
  },
  {
    "name": "Stantler",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/234.png"
  },
  {
    "name": "Smeargle",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/235.png"
  },
  {
    "name": "Tyrogue",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/236.png"
  },
  {
    "name": "Hitmontop",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/237.png"
  },
  {
    "name": "Smoochum",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/238.png"
  },
  {
    "name": "Elekid",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/239.png"
  },
  {
    "name": "Magby",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/240.png"
  },
  {
    "name": "Miltank",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/241.png"
  },
  {
    "name": "Blissey",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/242.png"
  },
  {
    "name": "Raikou",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/243.png"
  },
  {
    "name": "Entei",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/244.png"
  },
  {
    "name": "Suicune",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/245.png"
  },
  {
    "name": "Larvitar",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/246.png"
  },
  {
    "name": "Pupitar",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/247.png"
  },
  {
    "name": "Tyranitar",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/248.png"
  },
  {
    "name": "Lugia",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/249.png"
  },
  {
    "name": "Ho-oh",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/250.png"
  },
  {
    "name": "Celebi",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/251.png"
  },
  {
    "name": "Treecko",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/252.png"
  },
  {
    "name": "Grovyle",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/253.png"
  },
  {
    "name": "Sceptile",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/254.png"
  },
  {
    "name": "Torchic",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/255.png"
  },
  {
    "name": "Combusken",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/256.png"
  },
  {
    "name": "Blaziken",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/257.png"
  },
  {
    "name": "Mudkip",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/258.png"
  },
  {
    "name": "Marshtomp",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/259.png"
  },
  {
    "name": "Swampert",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/260.png"
  },
  {
    "name": "Poochyena",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/261.png"
  },
  {
    "name": "Mightyena",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/262.png"
  },
  {
    "name": "Zigzagoon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/263.png"
  },
  {
    "name": "Linoone",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/264.png"
  },
  {
    "name": "Wurmple",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/265.png"
  },
  {
    "name": "Silcoon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/266.png"
  },
  {
    "name": "Beautifly",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/267.png"
  },
  {
    "name": "Cascoon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/268.png"
  },
  {
    "name": "Dustox",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/269.png"
  },
  {
    "name": "Lotad",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/270.png"
  },
  {
    "name": "Lombre",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/271.png"
  },
  {
    "name": "Ludicolo",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/272.png"
  },
  {
    "name": "Seedot",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/273.png"
  },
  {
    "name": "Nuzleaf",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/274.png"
  },
  {
    "name": "Shiftry",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/275.png"
  },
  {
    "name": "Taillow",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/276.png"
  },
  {
    "name": "Swellow",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/277.png"
  },
  {
    "name": "Wingull",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/278.png"
  },
  {
    "name": "Pelipper",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/279.png"
  },
  {
    "name": "Ralts",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/280.png"
  },
  {
    "name": "Kirlia",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/281.png"
  },
  {
    "name": "Gardevoir",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/282.png"
  },
  {
    "name": "Surskit",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/283.png"
  },
  {
    "name": "Masquerain",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/284.png"
  },
  {
    "name": "Shroomish",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/285.png"
  },
  {
    "name": "Breloom",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/286.png"
  },
  {
    "name": "Slakoth",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/287.png"
  },
  {
    "name": "Vigoroth",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/288.png"
  },
  {
    "name": "Slaking",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/289.png"
  },
  {
    "name": "Nincada",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/290.png"
  },
  {
    "name": "Ninjask",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/291.png"
  },
  {
    "name": "Shedinja",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/292.png"
  },
  {
    "name": "Whismur",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/293.png"
  },
  {
    "name": "Loudred",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/294.png"
  },
  {
    "name": "Exploud",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/295.png"
  },
  {
    "name": "Makuhita",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/296.png"
  },
  {
    "name": "Hariyama",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/297.png"
  },
  {
    "name": "Azurill",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/298.png"
  },
  {
    "name": "Nosepass",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/299.png"
  },
  {
    "name": "Skitty",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/300.png"
  },
  {
    "name": "Delcatty",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/301.png"
  },
  {
    "name": "Sableye",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/302.png"
  },
  {
    "name": "Mawile",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/303.png"
  },
  {
    "name": "Aron",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/304.png"
  },
  {
    "name": "Lairon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/305.png"
  },
  {
    "name": "Aggron",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/306.png"
  },
  {
    "name": "Meditite",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/307.png"
  },
  {
    "name": "Medicham",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/308.png"
  },
  {
    "name": "Electrike",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/309.png"
  },
  {
    "name": "Manectric",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/310.png"
  },
  {
    "name": "Plusle",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/311.png"
  },
  {
    "name": "Minun",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/312.png"
  },
  {
    "name": "Volbeat",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/313.png"
  },
  {
    "name": "Illumise",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/314.png"
  },
  {
    "name": "Roselia",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/315.png"
  },
  {
    "name": "Gulpin",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/316.png"
  },
  {
    "name": "Swalot",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/317.png"
  },
  {
    "name": "Carvanha",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/318.png"
  },
  {
    "name": "Sharpedo",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/319.png"
  },
  {
    "name": "Wailmer",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/320.png"
  },
  {
    "name": "Wailord",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/321.png"
  },
  {
    "name": "Numel",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/322.png"
  },
  {
    "name": "Camerupt",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/323.png"
  },
  {
    "name": "Torkoal",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/324.png"
  },
  {
    "name": "Spoink",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/325.png"
  },
  {
    "name": "Grumpig",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/326.png"
  },
  {
    "name": "Spinda",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/327.png"
  },
  {
    "name": "Trapinch",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/328.png"
  },
  {
    "name": "Vibrava",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/329.png"
  },
  {
    "name": "Flygon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/330.png"
  },
  {
    "name": "Cacnea",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/331.png"
  },
  {
    "name": "Cacturne",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/332.png"
  },
  {
    "name": "Swablu",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/333.png"
  },
  {
    "name": "Altaria",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/334.png"
  },
  {
    "name": "Zangoose",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/335.png"
  },
  {
    "name": "Seviper",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/336.png"
  },
  {
    "name": "Lunatone",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/337.png"
  },
  {
    "name": "Solrock",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/338.png"
  },
  {
    "name": "Barboach",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/339.png"
  },
  {
    "name": "Whiscash",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/340.png"
  },
  {
    "name": "Corphish",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/341.png"
  },
  {
    "name": "Crawdaunt",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/342.png"
  },
  {
    "name": "Baltoy",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/343.png"
  },
  {
    "name": "Claydol",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/344.png"
  },
  {
    "name": "Lileep",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/345.png"
  },
  {
    "name": "Cradily",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/346.png"
  },
  {
    "name": "Anorith",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/347.png"
  },
  {
    "name": "Armaldo",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/348.png"
  },
  {
    "name": "Feebas",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/349.png"
  },
  {
    "name": "Milotic",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/350.png"
  },
  {
    "name": "Castform",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/351.png"
  },
  {
    "name": "Kecleon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/352.png"
  },
  {
    "name": "Shuppet",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/353.png"
  },
  {
    "name": "Banette",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/354.png"
  },
  {
    "name": "Duskull",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/355.png"
  },
  {
    "name": "Dusclops",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/356.png"
  },
  {
    "name": "Tropius",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/357.png"
  },
  {
    "name": "Chimecho",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/358.png"
  },
  {
    "name": "Absol",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/359.png"
  },
  {
    "name": "Wynaut",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/360.png"
  },
  {
    "name": "Snorunt",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/361.png"
  },
  {
    "name": "Glalie",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/362.png"
  },
  {
    "name": "Spheal",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/363.png"
  },
  {
    "name": "Sealeo",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/364.png"
  },
  {
    "name": "Walrein",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/365.png"
  },
  {
    "name": "Clamperl",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/366.png"
  },
  {
    "name": "Huntail",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/367.png"
  },
  {
    "name": "Gorebyss",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/368.png"
  },
  {
    "name": "Relicanth",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/369.png"
  },
  {
    "name": "Luvdisc",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/370.png"
  },
  {
    "name": "Bagon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/371.png"
  },
  {
    "name": "Shelgon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/372.png"
  },
  {
    "name": "Salamence",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/373.png"
  },
  {
    "name": "Beldum",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/374.png"
  },
  {
    "name": "Metang",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/375.png"
  },
  {
    "name": "Metagross",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/376.png"
  },
  {
    "name": "Regirock",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/377.png"
  },
  {
    "name": "Regice",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/378.png"
  },
  {
    "name": "Registeel",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/379.png"
  },
  {
    "name": "Latias",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/380.png"
  },
  {
    "name": "Latios",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/381.png"
  },
  {
    "name": "Kyogre",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/382.png"
  },
  {
    "name": "Groudon",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/383.png"
  },
  {
    "name": "Rayquaza",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/384.png"
  },
  {
    "name": "Jirachi",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/385.png"
  },
  {
    "name": "Deoxys",
    "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/386.png"
  }
]
