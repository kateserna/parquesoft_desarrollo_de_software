import { json } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  NavLink,
  useNavigate
} from "@remix-run/react";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import appStylesHref from "./app.css?url"; /* para traer solo el css de las url*/

//Tipado de datos:

type Pokemon = {
  name: string;
  url: string;
};

type LoaderData = {
  results: Pokemon[];
  next: string | null;
  previous: string | null;
}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href:appStylesHref }
]

/* la funcion se debe llamar loader para que el hook lo identifique */
export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const apiUrl = url.searchParams.get('url') || 'https://pokeapi.co/api/v2/pokemon'; // URL inicial de la API

  // Fetch de la API
  const apiResponse = await fetch(apiUrl); 
  if (!apiResponse.ok){
    throw new Error("Error al cargar los datos de la API")
  }
  const apiResponseJson: LoaderData = await apiResponse.json() // informacion en json de la api
  const pagAnterior = apiResponseJson.previous; 
  const pagSiguiente = apiResponseJson.next;
  const pokemonsLista: Pokemon[] = apiResponseJson.results//lista de pokemons

  return json({pokemonsLista, pagAnterior, pagSiguiente}) /* la data la vuelvo formato json y se retorna*/
}

export default function App() {
  const {pokemonsLista, pagAnterior, pagSiguiente} = useLoaderData<typeof loader>();/* de esta manera llamo la funcion loader*/
  const navigate = useNavigate();

  const pagination = (url: string | null) => {
    if (url) {
      const adjustedUrl = url.replace(/limit=\d+/, 'limit=20'); // Fuerza el límite a 20
      navigate(`/?url=${encodeURIComponent(adjustedUrl)}`);
    }
  };

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
          <h2>Lista de Pokemons</h2>
          </div>
          <nav>
            {pokemonsLista.length ? (
              <ul>
                {pokemonsLista.map((pokemon) => (
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
            { pagAnterior && (
              <button onClick={ () => pagination(pagAnterior)}>Anterior</button>
            )}
              
            { pagSiguiente && (
              <button onClick={ () => pagination(pagSiguiente)}>Siguiente</button>
            )}
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
