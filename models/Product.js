/*const conn = require('../db/conn')

const {ObjectId} = require('mongodb')

class Product {

    constructor(name, image, price, description){

        this.name = name
        this.image = image
        this.price = price
        this.description = description

    }

    save(){

        const product = conn.db().collection('products').insertOne({
            name: this.name,
            image: this.image,
            price: this.price,
            description: this.description
        })

    }

    static getProduct(){

        const products = conn.db().collection('products').find().toArray()

        return products

    }

    static async getProductById(id){

        const product =  conn.db().collection('products').findOne({_id: new ObjectId(id)})

        return product

    }

    static async deleteProductById(id){

        await conn.db().collection('products').deleteOne({_id: new ObjectId(id)})

        return

    }

    updateProduct(id){
        conn.db().collection('products').updateOne({_id: new ObjectId(id)}, {$set: this})

        return
    }
}*/

const mongoose = require('mongoose')

const {Schema} = mongoose

const Product = mongoose.model(
    'Product',
    new Schema({
        name: {type: String, required: true},
        price: {type: Number, required: true},
        description: {type: String, required: true},
        image: {type: String, required: true}
    })
)

module.exports = Product