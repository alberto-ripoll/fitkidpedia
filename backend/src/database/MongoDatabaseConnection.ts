import { configDotenv } from 'dotenv';
import { MongoClient } from 'mongodb';

export default class MongoDatabaseConnection {
    private static instance: MongoClient;
    private static  connectionString: string;
    private constructor() {}
    
    public static getInstance(): MongoClient {
        configDotenv();
        this.connectionString = this.connectionString ?? process.env.MONGO_URI;

        if (!MongoDatabaseConnection.instance) {
            MongoDatabaseConnection.instance = new MongoClient(this.connectionString);
            this.instance.connect();
        }
        return MongoDatabaseConnection.instance;
    }
}