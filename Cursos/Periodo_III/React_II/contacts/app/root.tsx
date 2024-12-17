import { json,redirect } from "@remix-run/node";
import {
  Form,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  NavLink,
  useNavigation,
  useSubmit
} from "@remix-run/react";

import { useEffect } from "react";

import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
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
export const loader = async ({ request}: LoaderFunctionArgs) => {
  const url = new URL(request.url)
  const q = url.searchParams.get("q");//de esta manera accedemos a las busquedas
  const contacts = await getContacts(q);/* aqui se almacenaria la data que traigo del backend*/
  return json({contacts, q}) /* la data la vuelvo formato json y se retorna*/
}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href:appStylesHref }
]

export default function App() {
  const {contacts, q} = useLoaderData<typeof loader>();/* de esta manera llamo la funcion loader*/
  const navigation = useNavigation(); // hook de navigation para  consultar el estado de navegacion
  const submit = useSubmit(); //instancia el hook submit
  //variable booleana para decirme si estamos realizando una busqueda
  const searching = 
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("q")
  
  useEffect( () => {
    const searchField = document.getElementById("q"); //traigo el input de busqueda para manipularlo
    // verificar que si es una instancia de un input HTML
    if(searchField instanceof HTMLInputElement){
      searchField.value = q || ""
    }
  }, [q])

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
            <Form 
              onChange={ (event) => {
                const isFirstSearch = q === null; // es la primera busqueda
                submit(event.currentTarget, {
                  replace: !isFirstSearch
                })}}
              id="search-form" 
              role="search">
              <input
                className={ searching ? "loading" : ""}
                id="q"
                defaultValue={ q || ""}
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div id="search-spinner" aria-hidden hidden={!searching} /> {/*se muestra o no el spinner*/}
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
        <div 
        className={ navigation.state === "loading" && !searching ? "loading" : "" }
        id="detail">  
          <Outlet/>
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
