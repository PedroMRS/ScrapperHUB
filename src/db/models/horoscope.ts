import mongoose, { Document, Model } from "mongoose";
const Schema = mongoose.Schema;

const horoscopeSchema = new Schema(
    {
        aries: { type: String },
        taurus: { type: String },
        gemini: { type: String },
        cancer: { type: String },
        leo: { type: String },
        virgo: { type: String },
        libra: { type: String },
        scorpius: { type: String },
        sagittarius: { type: String },
        capricornus: { type: String },
        aquarius: { type: String },
        pisces: { type: String },
        created_at: {
            type: String,
            required: true,
            default: new Date().toLocaleDateString()
        }
    }
);

export interface Ihoroscope extends Document {
    aries: string,
    taurus: string,
    gemini: string,
    cancer: string,
    leo: string,
    virgo: string,
    libra: string,
    scorpius: string,
    sagittarius: string,
    capricornus: string,
    aquarius: string,
    pisces: string,
    created_at: string
}

const horoscope =
    (mongoose.models.horoscope as Model<Ihoroscope>) ||
    mongoose.model<Ihoroscope>("horoscope", horoscopeSchema);
export default horoscope;