"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var stores_1 = require("../controllers/stores");
var router = express_1.default.Router();
exports.router = router;
router
    .route('/stores')
    .get(stores_1.getStores)
    .post(stores_1.addStore);
