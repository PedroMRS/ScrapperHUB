import mongoose, { Document, Model } from "mongoose";
const Schema = mongoose.Schema;

const cs_statsSchema = new Schema(
    {
        steamID: { type: String },
        nickname: { type: String },
        atualRank: { type: Number },
        bestRank: { type: Number },
        allCompWins: { type: Number },
        lastUpdate: { type: String },
        kd: { type: String },
        premierWinrate: { type: String },
        premierPlayed: { type: String },
        premierWins: { type: String },
        premierLoses: { type: String },
        premierDraws: { type: String },
        premierPorcHS: { type: String },
        premierKills: { type: String },
        premierDeaths: { type: String },
        premierAssists: { type: String },
        premierADR: { type: String },
        premierDamage: { type: String },
        premierFlatHS: { type: String },
        premierRounds: { type: String },
        premierMostPlayedMaps: [{
            id: { type: Number },
            map: { type: String },
            count: { type: Number }
        }],
        premierBestWinRatioMaps: [{
            id: { type: Number },
            map: { type: String },
            ratio: { type: String }
        }],
        premierMostUsedGuns: [{
            id: { type: Number },
            gun: { type: String },
            killCount: { type: Number }
        }],
        premierMostHeadshotGuns: [{
            id: { type: Number },
            gun: { type: String },
            ratio: { type: Number }
        }],
        created_at: {
            type: String,
            required: true,
            default: new Date().toLocaleDateString()
        }
    }
);

export interface Ics_stats extends Document {
    steamID: string,
    nickname: string,
    atualRank: number,
    bestRank: number,
    allCompWins: number,
    lastUpdate: string,
    kd: string,
    premierWinrate: string,
    premierPlayed: string,
    premierWins: string,
    premierLoses: string,
    premierDraws: string,
    premierPorcHS: string,
    premierKills: string,
    premierDeaths: string,
    premierAssists: string,
    premierADR: string,
    premierDamage: string,
    premierFlatHS: string,
    premierRounds: string,
    premierMostPlayedMaps: [{
        id: number,
        map: string,
        count: number
    }],
    premierBestWinRatioMaps: [{
        id: number,
        map: string,
        ratio: string
    }],
    premierMostUsedGuns: [{
        id: number,
        gun: string,
        killCount: number
    }],
    premierMostHeadshotGuns: [{
        id: number,
        gun: string,
        ratio: number
    }],
    created_at: string
}


const cs_stats =
    (mongoose.models.cs_stats as Model<Ics_stats>) ||
    mongoose.model<Ics_stats>("cs_stats", cs_statsSchema);
export default cs_stats;