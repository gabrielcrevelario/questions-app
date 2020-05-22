
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.Promise = global.Promise;
const MONGO_URI = process.env.MONGO_URI || ""
const connection = mongoose.connect(MONGO_URI);

mongoose.set('useCreateIndex', true);

connection
    .then((db:any) => db)
    .catch((err:any) => {
        console.log(err);
    });

export default connection;