import { json } from "@remix-run/node";
import { Form, useLoaderData, useFetcher } from "@remix-run/react";
import type { FunctionComponent } from "react";
import type { LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/node";
import invariant from "tiny-invariant";
 
import type { ContactRecord } from "../data";
import { getContact, updateContact } from "../data";

export const action = async ({
  params, 
  request
}: ActionFunctionArgs) => {
  invariant(params.contactId, "No se ingresó el contactId")
  const formData = await request.formData(); //caturar la data del formulario de favoritos
  return updateContact(params.contactId, {favorite: formData.get("favorite") === "true"})
}
 
/* busca las variables y las extrae por medio de params(puedo tener varias variables en el nombre del archivo) */
/*se cambiaria getContact por el codigo del backend llamaria la url que deba llamar y ya tendria la data */
export const loader = async ({params}: LoaderFunctionArgs) => {
    invariant(params.contactId, "No se ingreso el contactId") /* valida si existe contactId */
    const contact = await getContact(params.contactId);/* capturo el id de la url y lo paso a la variable para que el backend me traiga la info de acuerdo a ese id*/
    /*validacion de contact en el backend */
    if( !contact) {
        throw new Response("No encontrado", {status: 404} )
    }
    return json({contact})
}

export default function Contact() {
  const {contact} = useLoaderData <typeof loader>();
 
  return (
    <div id="contact">
      <div>
        <img
          alt={`${contact.first} ${contact.last} avatar`}
          key={contact.avatar}
          src={contact.avatar}
        />
      </div>
 
      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite contact={contact} />
        </h1>
 
        {contact.twitter ? (
          <p>
            <a
              href={`https://twitter.com/${contact.twitter}`}
            >
              {contact.twitter}
            </a>
          </p>
        ) : null}
 
        {contact.notes ? <p>{contact.notes}</p> : null}
 
        <div>
        {/* editar */}
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
 
        {/* eliminar */}
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
  const fetcher = useFetcher();//instancia del hook Fetcher
  const favorite = fetcher.formData 
                  ? fetcher.formData.get("favorite") === "true"
                  : contact.favorite;
  return (
    <fetcher.Form method="post">
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
    </fetcher.Form>
  );
};