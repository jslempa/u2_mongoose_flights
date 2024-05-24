const db = require('../db')
const {Airport} = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const airports = [
        {
            name: 'John F. Kennedy International Airport',
            location: 'Queens, NY, USA',
            code: 'JFK'
        },
        {
            name: 'London Heathrow Airport',
            location: 'London, UK',
            code: 'LHR'
        },
        {
            name: 'Berlin Brandenburg Airport',
            location: 'Berlin, DE',
            code: 'BER'
        },
        {
            name: 'Pula Airport',
            location: 'Pula, HR',
            code: 'PUY'
        }
    ]

    await Airport.insertMany(airports)
    console.log('created airports')
}

const run = async () => {
    await main()
    db.close()
}

run()