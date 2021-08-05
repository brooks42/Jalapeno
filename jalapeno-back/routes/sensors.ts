import { Router } from 'express'

export const SensorRouter = Router()

SensorRouter.get('/', function(req, res, next) {
  res.send('Express + TypeScript Server from a route :)');
});
