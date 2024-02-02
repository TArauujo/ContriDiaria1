const mongoose = require('mongoose');

const connectToDatabase = async () => {
    await mongoose.connect(
        "mongodb+srv://admin:<password>@cluster0.syfehj8.mongodb.net/?retryWrites=true&w=majority", (error) => {
    (error) => {
        if(error){
            return console.log("Ocorreu um erro ao conectar com o banco de dados: ", error)
        };
    }
    return console.log("Conexão ao banco de dados realizada com sucesso!!");
    })
}

module.exports = connectToDatabase;