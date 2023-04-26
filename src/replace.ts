import getMongoConnection from "./db.ts";
import { ReplaceOptions } from "./types.ts";

const mongoConnection = await getMongoConnection(
    'mongodb://localhost:27017/',
    'Dev'
);

// deno-lint-ignore no-explicit-any
const init: { [key: string]: any } = {};

export const replaceAll = async ({ filter, collectionName, newModel }: ReplaceOptions) => {
    const collection = mongoConnection.database.collection(collectionName);
    const keys = Object.keys(newModel);

    const set = keys.reduce((s, key) => {
        const def = newModel[key];
        s[def.name] = def.value ? (def.value)() : `\$${key}`;
        return s;
    }, init);

    await collection.updateMany(
        filter,
        [
            {
                $set: {
                    ...set
                },
            },
            {
                $unset: [
                    ...keys
                ]
            },
        ],
    )
}

export const replaceOne = async ({ filter, collectionName, newModel }: ReplaceOptions) => {
    const collection = mongoConnection.database.collection(collectionName);
    const keys = Object.keys(newModel);

    const set = keys.reduce((s, key) => {
        const def = newModel[key];
        s[def.name] = def.value ? (def.value)() : `\$${key}`;
        return s;
    }, init);

    await collection.updateOne(
        filter,
        [
            {
                $set: {
                    ...set
                },
            },
            {
                $unset: [
                    ...keys
                ]
            },
        ],
    )
};