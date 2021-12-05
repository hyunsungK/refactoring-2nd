"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const invoices_json_1 = __importDefault(require("./data/invoices.json"));
const play_json_1 = __importDefault(require("./data/play.json"));
const logic_1 = require("./logic");
const view_1 = require("./view");
const [invoice] = JSON.parse(JSON.stringify(invoices_json_1.default));
const plays = JSON.parse(JSON.stringify(play_json_1.default));
console.log("invoke statement");
const statement = (0, view_1.renderStatement)((0, logic_1.createStatementData)(invoice, plays));
console.log(statement);
//# sourceMappingURL=app.js.map