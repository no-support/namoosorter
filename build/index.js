"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var NamooSorter_1 = __importDefault(require("./NamooSorter"));
var NumbersCollection_1 = __importDefault(require("./NumbersCollection"));
var CharactersCollection_1 = __importDefault(require("./CharactersCollection"));
var CustomerCollection_1 = __importDefault(require("./CustomerCollection"));
var Customer_1 = require("./Customer");
var numCollection = new NumbersCollection_1.default([10, -7, 55, 3, 21]);
var charCollection = new CharactersCollection_1.default('TypeScript');
var customerCollection = new CustomerCollection_1.default([
    new Customer_1.Customer('A111', 'Kim'),
    new Customer_1.Customer('B111', 'Park'),
    new Customer_1.Customer('C111', 'Andy'),
]);
// let sorter = new NamooSorter(numCollection);
// let sorter = new NamooSorter(charCollection);
var sorter = new NamooSorter_1.default(customerCollection);
sorter.sort();
sorter.printCollection();
