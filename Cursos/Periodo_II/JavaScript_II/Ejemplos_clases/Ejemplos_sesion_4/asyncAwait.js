// Las funciones permanecen iguales, ya que son promesas.

// Función que simula una conexión a una base de datos usando una promesa
function conectarABaseDeDatos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Conexión a BD exitosa");
    }, 1000);
  });
}

// Función que simula obtener datos de un usuario usando una promesa
function obtenerUsuario(conexion) {
  return new Promise((resolve, reject) => {
    if (conexion) {
      setTimeout(() => {
        resolve({ userId: 1, nombre: "John" });
      }, 1000);
    } else {
      reject("Error de conexión");
    }
  });
}

// Función que simula obtener un artículo que un usuario ha comprado usando una promesa
function obtenerArticulo(usuario) {
  return new Promise((resolve, reject) => {
    if (usuario) {
      setTimeout(() => {
        resolve({ userId: 1, articulo: "Libro de JavaScript" });
      }, 1000);
    } else {
      reject("Usuario no encontrado");
    }
  });
}

// Nuevo código usando async/await
async function procesarDatos() {
  try {
    const conexion = await conectarABaseDeDatos();
    const usuario = await obtenerUsuario(conexion);
    const articulo = await obtenerArticulo(usuario);
    console.log(articulo);
  } catch (error) {
    console.error(error);
  }
}

procesarDatos();
