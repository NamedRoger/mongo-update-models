import { replaceAll } from "./replace.ts";

await replaceAll({
    filter: { Modality: "AIR" },
    collectionName: "shipments",
    newModel: {
        ServiceTypes: {
            name: "ServiceType",
            value: {
                _id: "63d2adca9849f3f0d3123a5e",
                Name: "StandardCargo",
                DisplayName: "StandardCargo"
            }
        }
    }
});


console.log("termimo");