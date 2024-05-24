const db = require('./db')
const {Flight, Airport} = require('./models')

const getFlight = async () => {
    const flight = await Flight.findOne()
    console.log(flight.departingAirport)
}

const getAirport = async () => {
    const airport = await Airport.findOne()
    console.log(airport._id)
}





async function main () {
    try {
        await getFlight()
        // await getAirport()
        // await findBook()
        // await createBook()
        // await updateBook()
        // await deleteBook()
    } catch (error) {
        console.log(error)
    } finally {
        await db.close()
    }
}

main()