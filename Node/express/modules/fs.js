const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, '/test'), (error) => {
    if(error){
        return console.log("Erro: ",error)
    }

    console.log("Pasta criada com sucecsso!!")
})