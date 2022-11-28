// DOCUMENTACION //

// STACK

Servidor: Node.js y Express
Base de datos: PostgreSQL
ORM: Sequelize
Herramientas: DBeaver y Postman

// PASOS REALIZADOS
Los archivos .csv fueron importados en sus respectivas tablas con "DBeaver", siguiendo los modelos creados. Se agregó una columna "id" para poder manipularlos con mayor facilidad.


// RUTAS:

Para Airlines:
- GET-All: 'http://localhost/4000/airlines'
- GET-ByID: 'http://localhost/4000/airlines/:id'
- POST-CreateAirline: 'http://localhost/4000/airlines/'
- PUT-Update: 'http://localhost/4000/airlines/:id'
- DELTE-DeleteAirline: 'http://localhost/4000/airlines/:id'

Para Airports:
- GET-All: 'http://localhost/4000/airports'
- GET-ByID: 'http://localhost/4000/airports/:id'
- POST-CreateAirport: 'http://localhost/4000/airports/'
- PUT-Update: 'http://localhost/4000/airports/:id'
- DELTE-DeleteAirport: 'http://localhost/4000/airports/:id'

Para Flights:
- GET-All: 'http://localhost/4000/flights'
- GET-ByID: 'http://localhost/4000/flights/:id'
- POST-CreateFlight: 'http://localhost/4000/flights/'
- PUT-Update: 'http://localhost/4000/flights/:id'
- DELTE-DeleteFlight: 'http://localhost/4000/flights/:id'

