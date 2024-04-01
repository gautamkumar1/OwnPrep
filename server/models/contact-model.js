const {Schema,model} = require('mongoose')

// create a schema

const contactSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

// create a model and collection

const Contact = new model('Contact',contactSchema)

module.exports = Contact;