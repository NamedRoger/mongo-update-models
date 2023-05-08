import { Db, MongoClient } from "npm:mongodb";

interface IMongoConnection {
    client: MongoClient,
    database: Db
}

let monogConnection: IMongoConnection | null = null;

const createConnection = async (connectionString: string, databaesName: string): Promise<IMongoConnection> => {
    const client = new MongoClient(connectionString);
    await client.connect();
    const database = client.db(databaesName);

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