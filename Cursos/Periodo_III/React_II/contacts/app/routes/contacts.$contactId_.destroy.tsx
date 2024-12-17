import type { ActionFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import invariant from "tiny-invariant";

import { deleteContact } from "~/data";

export const action = async ({params}: ActionFunctionArgs) => {
    invariant(params.contactId, "No se incluyó el paramtro contactId"); //verificar que si viene la info
    await deleteContact(params.contactId); // si llega se procede a borrar el contacto con su id
    return redirect("/")//redireccion a la pagina principal
}