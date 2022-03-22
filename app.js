let mappedPokemon = [];

window.onload = () => {
    init();
    const inputH = document.querySelector("#iSearch")
    inputH.addEventListener("input", ()=> searchPokemon())
}

const init = async () => {
    const pokemons = await getPokemon ();
    mappedPokemon = await mapPokemon(pokemons);
    printPoks(mappedPokemon)
    }

const getPokemon = async () => {
    let datos = [];
    for (let i =1; i <= 151; i++) {
        const api = await fetch('https://pokeapi.co/api/v2/pokemon/' + i)
        const listPoke = await api.json()
        datos.push(listPoke)
    }return datos
}

    
    function mapPokemon(pokemons) {
        const pokeMapeados = pokemons.map(pokemon => {
            return {
                name: pokemon.name,
                img: pokemon.sprites.other.dream_world.front_default,
                height: pokemon.height,
                weight: pokemon.weight,
                id: pokemon.id
            }
        })
        return pokeMapeados
        
    }

    function printPoks (pokemons) {
        const pokeCard = document.querySelector(".containerPoke")?document.querySelector(".containerPoke"):document.createElement('div');
        pokeCard.innerHTML = "";
        pokeCard.className = 'containerPoke';
        pokemons.forEach(pokemon => {
            
            pokeCard.innerHTML += `<div class="card"> 
                <h1>${pokemon.name}</h1>
                <p>${"id: " + pokemon.id}</p>
                <p>${"alt: " + pokemon.height + " dm"}</p>
                <p>${"peso: " + pokemon.weight + " dag"}</p>
                <img src=${pokemon.img} alt=${pokemon.title}/>
                </div>`
        });
        document.body.appendChild(pokeCard);
    }    

const searchPokemon = () => {
    const input = document.querySelector('#iSearch');
    console.log(input.value.toLocaleLowerCase());
    const filterPokemon = mappedPokemon.filter(poke =>(poke.name.toLowerCase().includes(input.value.toLocaleLowerCase())))
    console.log(filterPokemon);
    printPoks(filterPokemon)
}
    