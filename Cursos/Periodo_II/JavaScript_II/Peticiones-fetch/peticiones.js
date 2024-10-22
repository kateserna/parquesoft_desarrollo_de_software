async function obtenerPersonaje(id) {
    try {
        const respuesta = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const personajes = await respuesta.json();
        console.log(personajes);
    } catch (error) {
        console.error(error);
    }
}

obtenerPersonaje(150);