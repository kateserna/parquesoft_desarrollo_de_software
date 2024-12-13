import { json } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import type { FunctionComponent } from "react";
import type { LoaderFunctionArgs } from "@remix-run/node";
import invariant from "tiny-invariant";
 
import type { ContactRecord } from "../data";
import { getContact } from "../data";
 
/* busca las variables y las extrae por medio de params(puedo tener varias variables en el nombre del archivo) */
/*se cambiaria getContact por el codigo del backend llamaria la url que deba llamar y ya tendria la data */
export const loader = async ({params}: LoaderFunctionArgs) => {
    invariant(params.results, "No se ingreso el nombre Pokemon") /* valida si existe contactId */
    const pokemon = await getContact(params.results);/* capturo el id de la url y lo paso a la variable para que el backend me traiga la info de acuerdo a ese id*/
    /*validacion de contact en el backend */
    if( !pokemon) {
        throw new Response("No encontrado", {status: 404} )
    }
    return json({pokemon})
}

export default function Pokemon() {
  const {pokemon} = useLoaderData <typeof loader>();
 
  return (
    <div id="pokemon">
      <div>
        <img
          alt={`${pokemon.first} ${pokemon.last} avatar`}
          key={pokemon.avatar}
          src={pokemon.avatar}
        />
      </div>
 
      <div>
        <h1>
          {pokemon.first || pokemon.last ? (
            <>
              {pokemon.first} {pokemon.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite pokemon={pokemon} />
        </h1>
 
        {pokemon.twitter ? (
          <p>
            <a
              href={`https://twitter.com/${pokemon.twitter}`}
            >
              {pokemon.twitter}
            </a>
          </p>
        ) : null}
 
        {pokemon.notes ? <p>{pokemon.notes}</p> : null}
 
        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
 
          <Form
            action="destroy"
            method="post"
            onSubmit={(event) => {
              const response = confirm(
                "Please confirm you want to delete this record."
              );
              if (!response) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}
 
const Favorite: FunctionComponent<{
  contact: Pick<ContactRecord, "favorite">;
}> = ({ contact }) => {
  const favorite = contact.favorite;
 
  return (
    <Form method="post">
      <button
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
        name="favorite"
        value={favorite ? "false" : "true"}
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
};