"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bb26_1 = require("bb26");
const random_item_1 = __importDefault(require("random-item"));
const mississippi_counties_1 = __importDefault(require("./mississippi-counties"));
const lib_1 = require("../../lib");
/**
 * Generates random serial for [Mississippi](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Mississippi#1976_to_present)
 *
 * **Serial format**: `ABC 1234`, where `AB` is county code
 *
 * ```
 * import { mississippi } from 'license-plate-serial-generator'
 *
 * mississippi() // 'CRW 1349'
 * ```
 */
function mississippi() {
    // TODO: Weigh county choice by population
    const county = (0, random_item_1.default)((0, random_item_1.default)(mississippi_counties_1.default).codes);
    const letters = county + (0, bb26_1.random)('Z');
    const numbers = (0, lib_1.randomNumericString)(9999);
    return `${letters} ${numbers}`;
}
exports.default = mississippi;
