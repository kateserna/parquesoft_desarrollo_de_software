-- Tabla Cliente
CREATE table cliente(
codigo_cliente INT,
nombre VARCHAR(50),
direccion VARCHAR(50), 
ciudad VARCHAR(50),
CONSTRAINT pk_cc PRIMARY KEY (codigo_cliente)  
);

-- Tabla Producto
CREATE table producto(
codigo_producto INT,
nombre_producto VARCHAR(50),
CONSTRAINT pk_cp PRIMARY key (codigo_producto)
);

-- Tabla Item_Ventas
CREATE TABLE item_ventas(
numero_factura int,
cantidad INT,
precio money,
codigo_producto1 INT,
CONSTRAINT pk_civ PRIMARY key (numero_factura),
CONSTRAINT fk_fcp1 FOREIGN key (codigo_producto1) REFERENCES producto(codigo_producto)
);


--Tabla Ventas
CREATE TABLE ventas(
fecha DATE,
numero_factura1 INT,
codigo_cliente1 INT,
CONSTRAINT fk_fnf1 FOREIGN KEY (numero_factura1) REFERENCES item_ventas(numero_factura),
CONSTRAINT fk_fcc1 FOREIGN KEY (codigo_cliente1) REFERENCES cliente(codigo_cliente)  
);