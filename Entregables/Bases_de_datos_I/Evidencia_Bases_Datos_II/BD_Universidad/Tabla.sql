-- Tabla Carrera
CREATE table carrera(
clave_c INT,
nom_c VARCHAR(50),
durac_c FLOAT,
CONSTRAINT pk_cc PRIMARY KEY (clave_c)
);

-- Tabla Materia
CREATE TABLE materia(
clave_m INT, 
nom_m VARCHAR(50),
cred_m FLOAT,
CONSTRAINT pk_cm PRIMARY KEY (clave_m)
);

-- Tabla Profesor
CREATE TABLE profesor(
clave_p INT,
nom_p VARCHAR(50),
dir_p VARCHAR(50),
tel_p BIGINT, 
hor_p TIME,
CONSTRAINT pk_cp PRIMARY KEY(clave_p)  
);

/*Tabla Alumno con
una clave foranea*/
CREATE TABLE alumno(
mat_alu INT,
nom_alu VARCHAR(50),
edad_alu INT,
sem_alu INT,
gen_alu VARCHAR(10),
clave_c1 int, 
CONSTRAINT pk_calu PRIMARY key (mat_alu),
CONSTRAINT fk_fc1 FOREIGN KEY (clave_c1) REFERENCES carrera(clave_c)  
);

/* Tabla intermedia 
Alumno - Profesor*/
CREATE TABLE alu_pro(
mat_alu1 INT,
clave_p1 INT,
CONSTRAINT fk_falu1 FOREIGN KEY (mat_alu1) REFERENCES alumno(mat_alu),
CONSTRAINT fk_fp1 FOREIGN KEY (clave_p1) REFERENCES profesor(clave_p)
);

/*Tabla intermedia 
Alumno - Materia*/
CREATE TABLE alu_mat(
mat_alu2 INT,
clave_m1 INT,
CONSTRAINT fk_falu2 FOREIGN KEY(mat_alu2) REFERENCES alumno(mat_alu),
CONSTRAINT fk_fm1 FOREIGN KEY(clave_m1) REFERENCES materia(clave_m)  
);

/*Tabla intermedia 
Materia - Profesor*/
CREATE TABLE mat_pro(
clave_m2 INT,
clave_p2 INT,
CONSTRAINT fk_fm2 FOREIGN KEY(clave_m2) REFERENCES materia(clave_m),
CONSTRAINT fk_fp2 FOREIGN KEY(clave_p2) REFERENCES profesor(clave_p)  
);




