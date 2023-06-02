const server = require('./app')
const PORT = 3001;
const { conn } = require('./DB_connection');
 
 conn.sync({ force: true });//para dropear o eliminar cada vez que se reinicie el servidor

server.listen(PORT, () => console.log(`Listening on port: ${PORT}`));