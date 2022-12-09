import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

const app = express()
dotenv.config()

const PORT = process.env.PORT || 3001
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME


async function init() {
    try {
        await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@photobank.qidx0uu.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
                useFindAndModify: true
            })

        app.listen(3002, () => {
            console.log(`Start server on port ${PORT}`)
        })

    }
    catch(err)
    {
        console.error(err)
    }
}
init()
//