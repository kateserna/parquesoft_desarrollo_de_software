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
import { getContacts, createEmptyContact } from "./data"; /* esta funcion se reemplazaria por un llamado al backend*/

/* la funcion se debe llamar action para que el hook lo identifique, cuando 
llegue aca va a crear un contacto */
export const action = async () => {
  const contact = await createEmptyContact();
  /*el return va a un redirect que nos lleva a la edicion del formulario edit 
  para crear el contacto nuevo */
  return redirect(`/contacts/${contact.id}/edit`)
}

/* la funcion se debe llamar loader para que el hook lo identifique */
export const loader = async () => {
  const contacts = await getContacts();/* aqui se almacenaria la data que traigo del backend*/
  return json({contacts}) /* la data la vuelvo formato json y se retorna*/
}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href:appStylesHref }
]

export default function App() {
  const {contacts} = useLoaderData<typeof loader>();/* de esta manera llamo la funcion loader*/
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
          <h1>Remix Contacts</h1>
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
            {contacts.length ? (
              <ul>
                {contacts.map((contact) => (
                  <li key={contact.id}>
                    <  NavLink 
                      className={
                        ({ isActive, isPending }) =>
                          isActive ?
                        "active"
                        : isPending ?
                        "pending" :
                        ""
                       }
                      to={`contacts/${contact.id}`}>
                      {contact.first || contact.last ? (
                        <>
                        {contact.first} {contact.last}
                        </>
                      ) : (
                        <i>Sin Nombre</i>
                      )}{" "}
                      {contact.favorite ? (
                        <span>★</span>
                      ) : null}
                    </NavLink>
                  </li>
                ))}
              </ul>
            ) : (
              <p>
                <i>No contacts</i>
              </p>
            )}
          </nav>
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
