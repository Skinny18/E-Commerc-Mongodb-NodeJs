/*const { MongoClient } = require('mongodb')
//Porta padrao MongoDb = 27017
const uri = "mongodb://localhost:27017/testemongodb"

const client = new MongoClient(uri)

async function run(){
    try{

        await client.connect()
        console.log("Conectando ao MongoDB!")

    }catch(err){
        console.log(err)
    }
}

run()

module.exports = client */

//mongoose
const mongoose = require('mongoose')

async function main(){
    await mongoose.connect('mongodb://localhost:27017/testemongoose')
    console.log('Conectou ao Banco com Mongoose!')

}

main().catch((err) => console.log(err))

module.exports = mongoose