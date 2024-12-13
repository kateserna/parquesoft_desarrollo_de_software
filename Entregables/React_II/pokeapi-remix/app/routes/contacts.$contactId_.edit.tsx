import type { LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
 
import { getContact,updateContact } from "../data"; //con update en el caso del backend llamaria el endpoint del backend de actualizar

/*En esta funcion action va a modificar la data de un contacto y requiere 
ActionFunctionArgs (es un tipo de dato para las funciones de accion)*/
/* funcion que me ayuda a navegar en el enrutador de la aplicacion que al dar 
guardar en el contacto editado me devuelva a la lista de contactos usando redirect*/

export const action = async ({
    params, request
}: ActionFunctionArgs) => {
    invariant(params.contactId, "No se incluyó el parametro contactID");
    const formData = await request.formData(); //me extraigo toda la data del formulario
    /*me crea un objeto de JS con base en el formulario formato json formData 
    me trae toda la informacion del formulario*/
    const updates = Object.fromEntries(formData)
    await updateContact(params.contactId, updates);
    return redirect(`/contacts/${params.contactId}`)
}

export const loader = async ({
  params,
}: LoaderFunctionArgs) => {
  invariant(params.contactId, "Missing contactId param");
  const contact = await getContact(params.contactId); /*captura en params el id que llega de la url*/
  /*valida que el contacto existe */
  if (!contact) {
    throw new Response("Not Found", { status: 404 });
  }
  return json({ contact });
};
 
export default function EditContact() {
  const { contact } = useLoaderData<typeof loader>();9
 
  return (
    <Form key={contact.id} id="contact-form" method="post">
      <p>
        <span>Name</span>
        <input
          aria-label="First name"
          defaultValue={contact.first}
          name="first"
          placeholder="First"
          type="text"
        />
        <input
          aria-label="Last name"
          defaultValue={contact.last}
          name="last"
          placeholder="Last"
          type="text"
        />
      </p>
      <label>
        <span>Twitter</span>
        <input
          defaultValue={contact.twitter}
          name="twitter"
          placeholder="@jack"
          type="text"
        />
      </label>
      <label>
        <span>Avatar URL</span>
        <input
          aria-label="Avatar URL"
          defaultValue={contact.avatar}
          name="avatar"
          placeholder="https://example.com/avatar.jpg"
          type="text"
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea
          defaultValue={contact.notes}
          name="notes"
          rows={6}
        />
      </label>
      <p>
        <button type="submit">Save</button>
        <button type="button">Cancel</button>
      </p>
    </Form>
  );
} 