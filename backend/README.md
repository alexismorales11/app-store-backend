# SCRIPT sql
# Creacion de tabla

CREATE TABLE TASK(
	ID SERIAL PRIMARY KEY, 
	TITLE VARCHAR(255) NOT NULL, 
	COMPLETED BOOLEAN DEFAULT FALSE
);

# validación de tabla creada

SELECT *FROM TASK


# Orden de creacion de API
# 1. Creación de servicios/controladores escalables con logica de negocio
# 2. Creación y estructuracion escalable de endpoint's o rutas de api's
# 3. Midelwares a endpoint o rutas de api
# 4. Validacion de tipo de datos a rutas a travez de esquemas
# 5. Validación de cors a rutas