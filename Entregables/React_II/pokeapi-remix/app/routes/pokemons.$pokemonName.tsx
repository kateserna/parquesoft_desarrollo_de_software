import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunctionArgs } from "@remix-run/node";
import invariant from "tiny-invariant";
 
/* busca las variables y las extrae por medio de params(puedo tener varias variables en el nombre del archivo) */
export const loader = async ({params}: LoaderFunctionArgs) => {
  invariant(params.pokemonName, "No se ingresó el nombre Pokemon") /* valida si existe el pokemon */
 
  const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${params.pokemonName}/`
  const pokemonResponse = await fetch(urlPokemon);
  
  if (!pokemonResponse.ok){
    throw new Response("No encontrado", {status: 404})
  }
  const pokemonResponseJson = await pokemonResponse.json()
  
  //datos para extraer
  const imagen = pokemonResponseJson.sprites.front_default;
  const id = pokemonResponseJson.id;
  const name = pokemonResponseJson.name;
  const altura = pokemonResponseJson.height;
  const peso = pokemonResponseJson.weight;
  const habilidad = pokemonResponseJson.abilities[0].ability.name
  const sonido = pokemonResponseJson.cries.latest

    return json({imagen, id ,name, altura, peso, habilidad, sonido})
}

export default function Pokemon() {
  const {imagen, id ,name, altura, peso, habilidad, sonido} = useLoaderData <typeof loader>();
 
  return (
    <div id="pokemon">
      <div>
        <img
          alt={`${name}`}
          key={imagen}
          src={imagen}
        />
      </div>
      <div>
        <h1>
          {name ? (
            <>
              {name}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
        </h1>
        {id ? <p>Id: {id}</p> : null}
        {altura ? <p>Altura: {altura}</p> : null}
        {peso ? <p>Peso: {peso}</p> : null}
        {habilidad ? <p>Habilidad: {habilidad}</p> : null}
        <div>
            { sonido && (
              <button onClick={ () => playSound(sonido)}>Play Sonido</button>
            )}
            
        </div>
      </div>
    </div>
  );
}

function playSound (url) {
  let ding = new Audio(url);
  ding.play();
  }

