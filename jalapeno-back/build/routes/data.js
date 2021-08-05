"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataRouter = void 0;
const express_1 = require("express");
exports.DataRouter = express_1.Router();
exports.DataRouter.get('/', function (req, res, next) {
    res.send({ data: [] });
});
exports.DataRouter.post('/', function (req, res, next) {
    res.send(500); // we don't do that yet
});
