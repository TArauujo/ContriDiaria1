const express = require("express");

const app = express();

app.get("/home", (req, res) => {
    res.contentType('application/html')
    res.status(200).send("<h1>Hello, World!!</h1>")
});

app.get("/users", (req, res) => {
    const users = [
        {
            name: "John Doe",
            email: "john@doe.com",
        },
        {
            name: "Jane Doe",
            email: "jana@doe.com",
        },
    ];
    res.status(200).json(users);
})

const port = 8080;

app.listen(port, () => console.log(`Rodando com Express na porta ${port}!`));