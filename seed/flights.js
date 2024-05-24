const db = require('../db')
const {Flight, Airport} = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const jfkAirport = await Airport.find({code: 'JFK'})
    const lhrAirport = await Airport.find({code: 'LHR'})
    const berAirport = await Airport.find({code: 'BER'})
    const puyAirport = await Airport.find({code: 'PUY'})

    const flights = [
        {
            airline: 'United',
            flightNumber: 101,
            price: 500,
            numberOfSeats: 300,
            departingAirport: jfkAirport._id,
            arrivalAirport: lhrAirport._id,
            departureDateTime: '2024-05-23T14:30:00Z'
        },
        {
            airline: 'United',
            flightNumber: 102,
            price: 500,
            numberOfSeats: 300,
            departingAirport: lhrAirport._id,
            arrivalAirport: jfkAirport._id,
            departureDateTime: '2024-05-24T14:30:00Z'
        },
        {
            airline: 'Delta',
            flightNumber: 201,
            price: 600,
            numberOfSeats: 300,
            departingAirport: jfkAirport._id,
            arrivalAirport: berAirport._id,
            departureDateTime: '2024-05-25T14:30:00Z'
        },
        {
            airline: 'Delta',
            flightNumber: 202,
            price: 600,
            numberOfSeats: 300,
            departingAirport: berAirport._id,
            arrivalAirport: jfkAirport._id,
            departureDateTime: '2024-05-26T14:30:00Z'
        },
        {
            airline: 'Ryanair',
            flightNumber: 301,
            price: 12,
            numberOfSeats: 150,
            departingAirport: berAirport._id,
            arrivalAirport: puyAirport._id,
            departureDateTime: '2024-05-27T14:30:00Z'
        },
        {
            airline: 'Ryanair',
            flightNumber: 302,
            price: 12,
            numberOfSeats: 150,
            departingAirport: puyAirport._id,
            arrivalAirport: berAirport._id,
            departureDateTime: '2024-05-28T14:30:00Z'
        },
        {
            airline: 'British Airways',
            flightNumber: 401,
            price: 150,
            numberOfSeats: 150,
            departingAirport: puyAirport._id,
            arrivalAirport: lhrAirport._id,
            departureDateTime: '2024-05-29T14:30:00Z'
        },
        {
            airline: 'British Airways',
            flightNumber: 402,
            price: 150,
            numberOfSeats: 150,
            departingAirport: lhrAirport._id,
            arrivalAirport: puyAirport._id,
            departureDateTime: '2024-05-30T14:30:00Z'
        }
    ]

    await Flight.insertMany(flights)
    console.log('created flights')
}

const run = async () => {
    await main()
    db.close()
}

run()