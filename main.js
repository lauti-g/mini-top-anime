const { error } = require("console");
const fs = require("fs");
const { url } = require("inspector");
const events = require("events");
const http = require("http");
emitter = new events.EventEmitter();






const crearServidor = (( req, res ) => {
  let statusCode;
  let contentType;
  const {url} = req
//cargamos primero el contenido de index.html para que de esta forma vaya cargando todo
  if(url === "/"){
    // señalamos el tipo de contenido que va a tener el head cuando se mande el response
      contentType = { "Content-Type": "text/html" , "Cache-Control": "no-store"}
    //leemos el archivo deseado
      fs.readFile("./front/index.html", "utf-8", (error, data)=>{
    //contol de errores
      if (error) {
        console.log(error)
      //respondemos con el head mandando el tipo de contenido y el codigo de estado
        res.writeHead(404, { "Content-Type": "text/plain" });
        return res.end("HTML no encontrado");
      }else {
        statusCode = 200
      //respondemos con el head mandando el tipo de contenido y el codigo de estado
        res.writeHead(statusCode, contentType)
        res.end(data)
      }
    })
  }
  //cargamos parte del contenido de css, en especifico la parte del fondo y el titulo, este esta linkeado al index.html, por eso se puede acceder a travez de esa url
  else if(url.startsWith("/fondo")){
    // señalamos el tipo de contenido que va a tener el head cuando se mande el response
    contentType = { "Content-Type": "text/css" , "Cache-Control": "no-store"};
    //leemos el archivo deseado
    fs.readFile("./front/fondoYTitulo.css", "utf-8", (error, data)=>{
    //contol de errores
      if (error) {
        console.log(error)
      //respondemos con el head mandando el tipo de contenido y el codigo de estado
        res.writeHead(404, { "Content-Type": "text/plain" });
        return res.end("CSS no encontrado");
      }else {
        statusCode = 200
      //respondemos con el head mandando el tipo de contenido y el codigo de estado
        res.writeHead(statusCode, contentType)
        res.end(data)
      }
    })
  }
  else if(url.startsWith("/tabla")){
    contentType = { "Content-Type": "text/css" , "Cache-Control": "no-store"};
    fs.readFile("./front/tabla.css", "utf-8", (error, data)=>{
      if (error) {
        console.log(error)
        res.writeHead(404, { "Content-Type": "text/plain" });
        return res.end("CSS no encontrado");
      }else {
        statusCode = 200
        res.writeHead(statusCode, contentType)
        res.end(data)
      }
    })
  }
  else if(url.startsWith("/animes")){
    contentType = { "Content-Type": "text/css" , "Cache-Control": "no-store"};
    fs.readFile("./front/animes.css", "utf-8", (error, data)=>{
      if (error) {
        console.log(error)
        res.writeHead(404, { "Content-Type": "text/plain" });
        return res.end("CSS no encontrado");
      }else {
        statusCode = 200
        res.writeHead(statusCode, contentType)
        res.end(data)
      }
    })
  }
  else if(url.startsWith("/mover")){
    contentType = { "Content-Type": "text/javascript" , "Cache-Control": "no-store"};
    fs.readFile("./front/moverAnimes.js", "utf-8", (error, data)=>{
      if (error) {
        console.log(error)
        res.writeHead(404, { "Content-Type": "text/plain" });
        return res.end("CSS no encontrado");
      }else {
        statusCode = 200
        res.writeHead(statusCode, contentType)
        res.end(data)
      }
    })
  }
  else{
  //por si todo sale mal
    contentType = { "Content-Type": "text/plain" , "Cache-Control": "no-store"}
    statusCode = 404
    res.writeHead(statusCode, contentType)
    res.end()
  }
})



//creando el server
http.createServer(crearServidor).listen(3000);