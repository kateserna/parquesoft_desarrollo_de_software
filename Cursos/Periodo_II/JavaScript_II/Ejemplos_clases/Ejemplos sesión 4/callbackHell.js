/*Supongamos que estás construyendo un sistema
que necesita realizar las siguientes tareas en secuencia:

1.Conectarse a una base de datos.
2.Obtener datos de un usuario.
3.Obtener los detalles de un artículo 
que el usuario ha comprado.*/

// Función que simula una conexión a una base de datos usando un callback
function conectarABaseDeDatos(callback) {
  setTimeout(() => {
    callback(null, "Conexión a BD exitosa"); // Se asume que la conexión es exitosa y se llama al callback sin error.
  }, 1000);
}

// Función que simula obtener datos de un usuario usando un callback
function obtenerUsuario(conexion, callback) {
  if (conexion) {
    setTimeout(() => {
      callback(null, { userId: 1, nombre: "John" }); // Se asume que se encontró al usuario y se devuelve el dato.
    }, 1000);
  } else {
    callback("Error de conexión", null); // Se devuelve un error si no hay conexión.
  }
}

// Función que simula obtener un artículo que un usuario ha comprado usando un callback
function obtenerArticulo(usuario, callback) {
  if (usuario) {
    setTimeout(() => {
      callback(null, { userId: 1, articulo: "Libro de JavaScript" }); // Se asume que se encontró el artículo y se devuelve el dato.
    }, 1000);
  } else {
    callback("Usuario no encontrado", null); // Se devuelve un error si no se encuentra al usuario.
  }
}

// Uso de los callbacks anidados, lo que lleva a "Callback Hell"
conectarABaseDeDatos(function (errorConexion, conexion) {
  if (errorConexion) {
    console.error(errorConexion);
  } else {
    obtenerUsuario(conexion, function (errorUsuario, usuario) {
      if (errorUsuario) {
        console.error(errorUsuario);
      } else {
        obtenerArticulo(usuario, function (errorArticulo, articulo) {
          if (errorArticulo) {
            console.error(errorArticulo);
          } else {
            console.log(articulo);
          }
        });
      }
    });
  }
});
