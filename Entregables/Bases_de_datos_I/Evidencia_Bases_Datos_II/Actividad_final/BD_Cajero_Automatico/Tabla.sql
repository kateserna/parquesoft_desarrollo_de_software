-- Tabla Cliente
CREATE TABLE cliente(
cedula BIGINT, 
nombre VARCHAR(50),
tel BIGINT,
CONSTRAINT pk_cc PRIMARY key (cedula)  
);

--Tabla Cuenta
CREATE table cuenta(
num_cuenta BIGINT,
tipo_cuenta VARCHAR(20),
saldo money,
CONSTRAINT pk_nc PRIMARY KEY (num_cuenta)  
);

--Tabla Transaccion
CREATE TABLE transaccion(
num_transaccion BIGINT,
fecha DATE,
tipo_transaccion VARCHAR(20),
monto money,
num_cuenta1 BIGINT,
CONSTRAINT pk_nt PRIMARY key (num_transaccion),
CONSTRAINT fk_nc1 FOREIGN key (num_cuenta1) REFERENCES cuenta(num_cuenta)
);

--Tabla intermedia Cliente - Cuenta
CREATE TABLE cliente_cuenta(
cedula1 BIGINT,
num_cuenta2 BIGINT,
CONSTRAINT fk_cc1 FOREIGN KEY (cedula1) REFERENCES cliente(cedula),
CONSTRAINT fk_nc1 FOREIGN key (num_cuenta2) REFERENCES cuenta(num_cuenta)  
);