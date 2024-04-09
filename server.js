//import { createServer } from 'node:http';
//const server = createServer(() => {
  //  console.log("oi");
//});

// server.listen(3333);

//const http = require('http');

//const server = http.createServer((request, response) => {
    
  //  response.write("oi")
    //return response.end()
//});

//server.listen(3333);

import  {fastify} from 'fastify'

const server = fastify()

server.get('/', () =>{
    return 'Hello world'
})
server.get('/hello', () =>{
    return 'Hello Pedrogol'
})
server.get('/node', () =>{
    return 'Hello Node'
})

server.listen({
    port : 3333,
})
