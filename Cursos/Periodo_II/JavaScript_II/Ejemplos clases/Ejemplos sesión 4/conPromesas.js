 //Misma solucion con promesas

// Función que simula una conexión a una base de datos usando una promesa
function conectarABaseDeDatos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Conexión a BD exitosa"); // Se asume que la conexión es exitosa y se resuelve la promesa.
    }, 1000);
  });
}

// Función que simula obtener datos de un usuario usando una promesa
function obtenerUsuario(conexion) {
  return new Promise((resolve, reject) => {
    if (conexion) {
      setTimeout(() => {
        resolve({ userId: 1, nombre: "John" }); // Se asume que se encontró al usuario y se resuelve la promesa.
      }, 1000);
    } else {
      reject("Error de conexión"); // Se rechaza la promesa si no hay conexión.
    }
  });
}

// Función que simula obtener un artículo que un usuario ha comprado usando una promesa
function obtenerArticulo(usuario) {
  return new Promise((resolve, reject) => {
    if (usuario) {
      setTimeout(() => {
        resolve({ userId: 1, articulo: "Libro de JavaScript" }); // Se asume que se encontró el artículo y se resuelve la promesa.
      }, 1000);
    } else {
      reject("Usuario no encontrado"); // Se rechaza la promesa si no se encuentra al usuario.
    }
  });
}

// Uso de las promesas encadenadas para una estructura más clara y legible
conectarABaseDeDatos()
  .then(obtenerUsuario) // Luego de conectar a la BD, se obtiene el usuario
  .then(obtenerArticulo) // Luego de obtener el usuario, se obtiene el artículo
  .then((articulo) => console.log(articulo)) // Finalmente, se muestra el artículo
  .catch((error) => console.error(error)); // Si en algún punto hay un error, se maneja aquí
