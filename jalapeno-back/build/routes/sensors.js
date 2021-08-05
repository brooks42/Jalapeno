"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensorRouter = void 0;
const express_1 = require("express");
exports.SensorRouter = express_1.Router();
exports.SensorRouter.get('/', function (req, res, next) {
    res.send('Express + TypeScript Server from a route :)');
});
