import mongoose from 'mongoose';
import config from '../config';

export function conect() {
    mongoose
        .connect(config.mongo.url, { retryWrites: true, w: 'majority' })
        .then(() => {
            console.log('Connected to mongoDB.');
        })
        .catch((error) => {
            console.log('Unable to connect.');
            console.log(error);
        });
}