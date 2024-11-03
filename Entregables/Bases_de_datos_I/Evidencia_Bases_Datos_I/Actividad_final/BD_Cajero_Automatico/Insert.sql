insert INTO cliente VALUES(1234567890, 'Ana Ramirez', 3104562344);
insert INTO cliente VALUES(34567890, 'Javier Valencia', 3115682247);
insert INTO cliente VALUES(123247890, 'Luis Martinez', 3164187965);
insert INTO cliente VALUES(458647523, 'Vanesa Venavides', 3125468515);


insert into cuenta VALUES(235897416, 'Ahorros', 2500000);
insert into cuenta VALUES(897061042, 'Corriente', 6800000);
insert into cuenta VALUES(320156796, 'Ahorros', 5200000);
insert into cuenta VALUES(589762149, 'Corriente', 4500000);

INSERT INTO transaccion VALUES(132545, '2024-10-22', 'Deposito', 800000, 235897416);
INSERT INTO transaccion VALUES(598321, '2024-10-21', 'Retiro', 1000000, 320156796);
INSERT INTO transaccion VALUES(562234, '2024-10-23', 'Retiro', 500000, 897061042);

INSERT into cliente_cuenta VALUES(123247890, 235897416);
INSERT into cliente_cuenta VALUES(34567890, 897061042);
INSERT into cliente_cuenta VALUES(1234567890, 320156796);