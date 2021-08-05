import { Router } from 'express'

export const DataRouter = Router()

DataRouter.get('/', function(req, res, next) {
  res.send({ data: []});
});

DataRouter.post('/', function(req, res, next) {
  res.send(500); // we don't do that yet
});

// for now Data is just a timestamp of when the data was sent
// and a `data` which is a string->any map of data from the sensor
export interface Data {
    timestamp: number
    data: [string: any]
}