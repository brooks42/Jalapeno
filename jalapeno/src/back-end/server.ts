import express from 'express'
    
const app = express()

// TODO: import express, tie back end stuff together
export class JalapenoServer {

    // TODO: initializes the server with some params 
    initialize(port: number) { 
        // rest of the code remains same
        app.get('/', (req, res) => res.send('Express + TypeScript Server'))
        app.listen(port, () => {
        console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
        })
    }
}
