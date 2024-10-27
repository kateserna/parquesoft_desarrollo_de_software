//Buscar pokemon por nombre
async function buscarPokemon() {
    const characterId = document.getElementById("pokemonName").value;
    if(characterId === "") {
        alert("Por favor, ingresa un nombre de Pokémon");
        return;
    }

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${characterId}`
        );

        if(!response.ok) {
            throw new Error("Pokémon no encontrado");
        } 

        const data = await response.json();

        const characterCard = document.getElementById("pokemon");

        characterCard.style.display = "block";
        characterCard.innerHTML = `
            <h2>${data.name}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}"/>
            <p><strong>Id: </strong>${data.id}</p>
            <p><strong>Especie: </strong>${data.species.name}</p>
            <p><strong>Altura: </strong>${data.height}</p>
            <p><strong>Peso: </strong>${data.weight}</p>
            <p><strong>Habilidades: </strong>${data.abilities[0].ability.name}</p>
            <p><strong>Tipo: </strong>${data.types[0].type.name}</p>
        `;

    } catch (error) {
        console.error("Error", error);
        const characterCard = document.getElementById("pokemon");
        characterCard.style.display = "block";
        characterCard.innerHTML = "<p>No se encontro el Pokémon</p>"        
    }
}
//evento boton buscar Pokémon 
document.getElementById("buscarBtn").addEventListener("click", buscarPokemon);

//Buscar habilidades de un pokemon especifico
async function habilidadPokemon() {
    const characterId = document.getElementById("pokemonAbility").value;
    if(characterId === "") {
        alert("Por favor, ingresa un id o nombre de Pokémon");
        return;
    }

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${characterId}`
        );

        if(!response.ok) {
            throw new Error("Pokémon no encontrado");
        } 

        const data = await response.json();

        const characterCard = document.getElementById("habilidades");

        let textAbilities = "";
        for (let i = 0; i < data.abilities.length; i++) {
            textAbilities += data.abilities[i].ability.name + ", ";
        }

        characterCard.style.display = "block";
        characterCard.innerHTML = `
            <p><strong>Habilidades: </strong>${textAbilities}</p>
        `;

    } catch (error) {
        console.error("Error", error);
        const characterCard = document.getElementById("habilidades");
        characterCard.style.display = "block";
        characterCard.innerHTML = "<p>No se encontró el Pokémon y sus habilidades</p>"        
    }
}
//evento boton buscar Habilidad 
document.getElementById("buscarBtn1").addEventListener("click", habilidadPokemon);

//Buscar tipos de Pokémon
async function tipoPokemon() {
    const characterType = document.getElementById("pokemonType").value;
    if(characterType === "") {
        alert("Por favor, ingresa un tipo de Pokémon");
        return;
    }

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${characterType}`
        );

        if(!response.ok) {
            throw new Error("Tipo de Pokémon no encontrado");
        } 

        const data = await response.json();

        const characterCard = document.getElementById("tipos");

        let textPokemon = "";
        for (let i = 0; i < data.pokemon.length; i++) {
            textPokemon += data.pokemon[i].pokemon.name + ", ";
        }

        let textMoves = "";
        for (let i = 0; i < data.moves.length; i++) {
            textMoves += data.moves[i].name + ",  ";
        }

        characterCard.style.display = "block";
        characterCard.innerHTML = `
            <h2>${data.name}</h2>
            <p><strong>Clase de daño por movimiento: </strong>${data.move_damage_class.name}</p>
            <p><strong>Pokémon de este tipo: </strong>${textPokemon}</p>
            <p><strong>Movimientos de este tipo: </strong>${textMoves}</p>
        `;

    } catch (error) {
        console.error("Error", error);
        const characterCard = document.getElementById("tipos");
        characterCard.style.display = "block";
        characterCard.innerHTML = "<p>No se encontró el tipo de Pokémon</p>"        
    }
}
//evento boton buscar Pokémon 
document.getElementById("buscarBtnTipo").addEventListener("click", tipoPokemon);

//Buscar pokemon por nombre
async function listaPokemon() {
   
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=50`
        );

        if(!response.ok) {
            throw new Error("Lista de Pokémons no encontrada");
        } 

        const data = await response.json();

        const characterCard = document.getElementById("lista");

        let textNamePokemon = "";
        for (let i = 0; i < data.results.length; i++) {
            textNamePokemon += data.results[i].name + "<br>";
        }

        characterCard.style.display = "block";
        characterCard.innerHTML = `
            <p>${textNamePokemon}</p>
            
        `;

    } catch (error) {
        console.error("Error", error);
        const characterCard = document.getElementById("lista");
        characterCard.style.display = "block";
        characterCard.innerHTML = "<p>No se encontró la lista de los 50 Pokémons</p>"        
    }
}
//evento boton buscar Pokémon 
document.getElementById("buscarBtnLista").addEventListener("click", listaPokemon);


