
//sirve para llamar a cualquier endpoint
export async function getAllCharacters(url) {
    return new Promise( (resolve, reject) => {
        fetch(url)
            .then( (response) => response.json() ) //convierte la respuesta a formato json
            .then(data => {resolve(data)}) //devuelve, hace el resolve de la data
    } )
    
}