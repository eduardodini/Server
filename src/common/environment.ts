require('dotenv').config();

export const environment = {
    db: {
        url: process.env.MONGODB_URI,
        authSource: process.env.MONGO_AUTHSOURCE,
        user: process.env.MONGO_INITDB_ROOT_USERNAME,
        pass: process.env.MONGO_INITDB_ROOT_PASSWORD,
        name: process.env.MONGO_INITDB_DATABASE,
    },
}