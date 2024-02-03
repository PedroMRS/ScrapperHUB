import dotenv from 'dotenv';

dotenv.config();

// DECLARE ALL VARIABLES
const DB_USER = process.env.DB_USER || '';
const DB_PASSWORD = process.env.DB_PASSWORD || '';
const DB_INSTANCE = process.env.DB_INSTANCE || '';
const MONGO_URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_INSTANCE}/CaduDB?retryWrites=true&w=majority`;
const SERVER_PORT = process.env.PORT ? Number(process.env.PORT) : 5000;

//CREATE CONFIG OBJECT
const config = {
    mongo: {
        url: MONGO_URL,
    },
    server: {
        port: SERVER_PORT,
    },
};

// //CHECK FOR ENVIRONMENT
// if (NODE_ENV === 'production') {
    config.mongo.url = MONGO_URL;
    config.server.port = SERVER_PORT;
// } else if (NODE_ENV === 'local') {
//     config.mongo.url = MONGO_URL_LOCAL;
//     config.server.port = SERVER_PORT;
// }

//EXPORT
export default config;