import mongoose from 'mongoose'

const CitySchema = new mongoose.Schema(
    {
        city: { type: String, required: true },
    },
)

export default mongoose.model('City', CitySchema)