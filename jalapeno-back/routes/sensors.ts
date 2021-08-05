import { Router } from 'express'

export const SensorRouter = Router()

SensorRouter.get('/', function(req, res) {
  res.send('Express + TypeScript Server from a route :)');
});

// a sensor registered with the system
// has a name for sure
// can also have some information about the type of data it collects and sends Jalapeno
export interface Sensor {
  name: string
  // TODO: metadata
}