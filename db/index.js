const mongoose = require('mongoose')

mongoose
.connect('mongodb+srv://jslempa:bialystok89@student-cluster.m84wwej.mongodb.net/?retryWrites=true&w=majority&appName=student-cluster')
.then(() => {
    console.log('connected to mongodb!')
})
.catch((error) => {
    console.error('Error!', error.message)
})

mongoose.set('debug', true)

const db = mongoose.connection

module.exports = db