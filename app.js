const express = require('express');
const app = express();

app.use(express.json());



app.get("/", (req, res) => {
    res.send("Bem vindo a nossa API.");
});






app.get("/users/:id", (req, res) =>{
const {id} = req.params;
const {sit} = req.query;

return res.json({
    id,
    name: "joao", 
    email: "fernandesjoaopedro622@gmail.com",
    sit
});
})

app.post("/users", (req, res)=> {

    var {name, email, _id, situationId} = req.body;


    return res.json({
        name: name,
        email: email
    });
})

app.put("/users/:id", (req, res) => {

    const { id } = req.params;

    const { _id, name, email, situationId } = req.body;

    return res.json({ id, _id, name, email});
});

app.delete("/users/:id", (req, res) => {

    const { id } = req.params;

    return res.json({id});
})


app.listen(3333, ()=>{
    console.log("servidor iniciando na parte da 3333: http://localhost:3333");
});