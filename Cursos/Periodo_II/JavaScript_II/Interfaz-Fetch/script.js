async function buscarPersonaje() {
    const characterId = document.getElementById("personajeId").value;
    if(characterId === ""){
      alert("Por favor, ingresa un ID de personaje")
      return;  
    }
    
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${characterId}`); //endpoint de personaje + el id

        if(!response.ok) {
            throw new Error("Personaje no encontrado"); //valida si la respuesta es falsa me da el error
        }

        const data = await response.json(); //convierte la informacion de json a js

        // info de personaje en una tarjeta
        const characterCard = document.getElementById("personaje"); //seleccion el div personaje
        characterCard.style.display = "block"; //para cambiar el stilo del display de none a block
        
        //para crear los elementos de la tarjeta con templates string (innerHTML)
        characterCard.innerHTML = `
            <h2>${data.name}</h2>
            <img src="${data.image}" alt="${data.name}"/>
            <p><strong>Estado:</strong> ${data.status}</p>
            <p><strong>Especie:</strong> ${data.species}</p>
            <p><strong>Género:</strong> ${data.gender}</p>
            <p><strong>Origen:</strong> ${data.origin.name}</p>
        `;

    } catch (error) {
        console.error("Error", error);
        const characterCard = document.getElementById("personaje");
        characterCard.style.display = "block";
        characterCard.innerHTML = "<p>No se encontró el personaje</p>";
    }
}
//asignar el evento buscar personaje al boton 
document.getElementById("buscarBtn").addEventListener("click", buscarPersonaje); 