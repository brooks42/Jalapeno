
export interface DataStore {

    saveDataPoint(): void
}

export class ExampleDataStore implements DataStore {

    connectToDatabase() {
        // TODO: connect to a mongo DB
    }

    saveDataPoint() {
        // TODO: shove the data into the mongo DB
    }
}