import mongoose, { Document, Model } from "mongoose";
const Schema = mongoose.Schema;

const usersSchema = new Schema(
    {
        ids: {
            cadu: {
                value: { type: String },
                show_only: { type: Number }
            },
            primary_client: {
                value: { type: String },
                show_only: { type: Number }
            },
            steam: {
                value: { type: String },
                show_only: { type: Number }
            },
            riot: {
                value: { type: String },
                show_only: { type: Number }
            },
            discord: {
                value: { type: String },
                show_only: { type: Number }
            },
            whatsapp: {
                value: { type: String },
                show_only: { type: Number }
            },
            telegram: {
                value: { type: String },
                show_only: { type: Number }
            },
            instagram: {
                value: { type: String },
                show_only: { type: Number }
            },
            x: {
                value: { type: String },
                show_only: { type: Number }
            }
        },
        birthday: {
            horoscope_sign: { type: String },
            show_sign: { type: Boolean },
            birthdayDate: {
                value: { type: String },
                show_only: { type: Number }
            }
        },
        usernames: {
            username: { type: String },
            server_name_lock: {
                value: { type: String },
                serverID: { type: String }
            }
        },
        adddress: {
            city: {
                value: { type: String },
                show_only: { type: Number }
            }
        },
        description: {
            value: { type: String },
            show_only: { type: Number }
        },
        spotlightSongs: [{
            sound_name: { type: String },
            producer_name: { type: String },
            url: { type: String }
        }],
        user_badges: [
            {
                value: { type: String },
                show_only: { type: Number }
            }
        ],
        dev_info: {
            cadu_dev: { type: Boolean },
            worker_as_dev: { type: Boolean },
            dev_stacks: [{
                lang: { type: String },
                level: { type: String }
            }]
        },
        games: {
            cs_stats: { type: Boolean },
            orkut_features: { type: Boolean },
            black_mirror_features: { type: Boolean }
        },
        premium: {
            cadu_premium_user: { type: Boolean },
            expdate_premium: { type: String }
        }
    }
);

export interface Iusers extends Document {
    ids: {
        cadu: {
            value: string,
            show_only: Number
        },
        primary_client: {
            value: string,
            show_only: number
        },
        steam: {
            value: string,
            show_only: number
        },
        riot: {
            value: string,
            show_only: number
        },
        discord: {
            value: string,
            show_only: number
        },
        whatsapp: {
            value: string,
            show_only: number
        },
        telegram: {
            value: string,
            show_only: number
        },
        instagram: {
            value: string,
            show_only: number
        },
        x: {
            value: string,
            show_only: number
        }
    },
    birthday: {
        horoscope_sign: string,
        show_sign: boolean,
        birthdayDate: {
            value: string,
            show_only: number
        }
    },
    usernames: {
        username: string,
        server_name_lock: {
            value: string,
            serverID: string
        }
    },
    adddress: {
        city: {
            value: string,
            show_only: number
        }
    },
    description: {
        value: string,
        show_only: number
    },
    spotlightSongs: [{
        sound_name: string,
        producer_name: string,
        url: string
    }],
    user_badges: [
        {
            value: string,
            show_only: number
        }
    ],
    dev_info: {
        cadu_dev: boolean,
        worker_as_dev: boolean,
        dev_stacks: [{
            lang: string,
            level: string
        }]
    },
    games: {
        cs_stats: boolean,
        orkut_features: boolean,
        black_mirror_features: boolean
    },
    premium: {
        cadu_premium_user: boolean,
        expdate_premium: string
    },
}

const users =
    (mongoose.models.users as Model<Iusers>) ||
    mongoose.model<Iusers>("users", usersSchema);
export default users;