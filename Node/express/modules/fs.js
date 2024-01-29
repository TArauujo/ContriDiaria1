const fs = require('fs');
const path = require('path');

// Criar uma pasta

fs.mkdir(path.join(__dirname, '/test'), (error) => {
    if(error){
        return console.log("Erro: ",error)
    }

    console.log("Pasta criada com sucecsso!!")
})

// Criar um arquivo

fs.writeFile(path.join(__dirname, '/test', 'test.txt'), 'Hello, Node!!', (error) =>{
    if(error){
        return console.log("Erro: ",error)
    }
    console.log("Arquivo criados com sucesso!!")
})