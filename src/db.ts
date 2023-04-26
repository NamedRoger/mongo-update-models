import { Database, MongoClient } from "https://deno.land/x/mongo@v0.31.1/mod.ts";

interface IMongoConnection {
    client: MongoClient,
    database: Database
}

let monogConnection: IMongoConnection | null = null;

const createConnection = async (connectionString: string, databaesName: string): Promise<IMongoConnection> => {
    const client = new MongoClient();
    await client.connect(connectionString);
    const database = client.database(databaesName);

    return {
        client,
        database
    }
}

const getMongoConnection = async (connectionString: string, databaesName: string): Promise<IMongoConnection> => {
    if (!monogConnection) {
        monogConnection = await createConnection(connectionString, databaesName);
    }

    return monogConnection;
}

export default getMongoConnection;