// deno-lint-ignore-file

export type FilterField = {
    [key: string]: any
}

export type NewModelDefinition = {
    name: string,
    value?: () => any
}

export type NewModel = {
    [key: string]: NewModelDefinition
}

export type ReplaceOptions = {
    filter: FilterField,
    collectionName: string,
    newModel: NewModel
}