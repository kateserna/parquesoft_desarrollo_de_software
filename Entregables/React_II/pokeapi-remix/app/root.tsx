import { json,redirect } from "@remix-run/node";
import {
  Form,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  Link,
  useLoaderData,
  NavLink
} from "@remix-run/react";

import type { LinksFunction } from "@remix-run/node";
import appStylesHref from "./app.css?url"; /* para traer solo el css de las url*/
import { createEmptyContact } from "./data"; /* esta funcion se reemplazaria por un llamado al backend*/



/* la funcion se debe llamar action para que el hook lo identifique, cuando 
llegue aca va a crear un contacto */
export const action = async () => {
  const pokemon = await createEmptyContact();
  /*el return va a un redirect que nos lleva a la edicion del formulario edit 
  para crear el contacto nuevo */
  return redirect(`/pokemons/${pokemon.name}/edit`)
}

/* la funcion se debe llamar loader para que el hook lo identifique */
export const loader = async ({ request }: { request: Request }) => {
  const url = new URL(request.url);
  const apiUrl = url.searchParams.get('url') || 'https://pokeapi.co/api/v2/pokemon'; // URL inicial de la API

  const response = await fetch(apiUrl); 

  if (!response.ok){
    throw new Error("Error al cargar los datos de la API")
  }

  const infoPokeApi: any[] = await response.json() // informacion en json de la api
  const pagAnterior = infoPokeApi.previous
  const pagSiguiente = infoPokeApi.next
  const pokemons = infoPokeApi.results//lista de pokemons
  console.log("asd", pokemons)
  console.log(pagAnterior)
  console.log(pagSiguiente)
  console.log({pokemons, pagAnterior, pagSiguiente})
  return json({pokemons, pagAnterior, pagSiguiente}) /* la data la vuelvo formato json y se retorna*/
}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href:appStylesHref }
]

export default function App() {
  const {pokemons, pagAnterior, pagSiguiente} = useLoaderData<typeof loader>();/* de esta manera llamo la funcion loader*/

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div id="sidebar">
          <h1>Remix Pokemons</h1>
          <div>
            <Form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div id="search-spinner" aria-hidden hidden={true} />
            </Form>
            <Form method="post">
              <button type="submit">Nuevo</button>
            </Form>
          </div>
          <nav>
            {pokemons.length ? (
              <ul>
                {pokemons.map((pokemon) => (
                  <li key={pokemon.name}>
                    <  NavLink 
                      className={
                        ({ isActive, isPending }) =>
                          isActive ?
                        "active"
                        : isPending ?
                        "pending" :
                        ""
                       }
                      to={`pokemons/${pokemon.name}`}>
                      {pokemon.name ? (
                        <>
                        {pokemon.name}
                        </>
                      ) : (
                        <i>Sin Nombre</i>
                      )}{" "}
                      {pokemon.favorite ? (
                        <span>★</span>
                      ) : null}
                    </NavLink>
                    
                  </li>
                ))}
              </ul>
            ) : (
              <p>
                <i>No pokemons</i>
              </p>
            )}
          </nav>
          <div>
            <p>link {pagAnterior}
              hola {pagSiguiente}
            </p>
            <button onClick={ () => loader(pagSiguiente) }>Incrementar</button>
            <button type="button" >Anterior</button>
            <button type="button" >Siguiente</button>
          </div>
        </div>
        <div id="detail">  
          <Outlet/>
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}