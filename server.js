console.log("running");

let express = require("express"); //load the express library

let app = express(); //activte express and put it in a variable called app

let port = 3000; //porta del server per comunicare

let server = app.listen(port) //listen = wait for imput from (port)

app.use(express.static("public")); //magic line che collega server e client

console.log('running server on http://localhost:' + port)