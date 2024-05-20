const server = require('./app');
const config = require('./config/config');

const PORT = config.app.port;

server.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})