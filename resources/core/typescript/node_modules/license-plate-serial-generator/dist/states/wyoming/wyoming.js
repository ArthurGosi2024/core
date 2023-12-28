"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_range_1 = __importDefault(require("get-range"));
const random_item_1 = __importDefault(require("random-item"));
const lib_1 = require("../../lib");
/**
 * Generates random serial for [Wyoming](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Wyoming#1975_to_present)
 *
 * **Serial formats**:
 *
 * - `1-12345`
 * - `11-12345`
 *
 * ```
 * import { wyoming } from 'license-plate-serial-generator'
 *
 * wyoming() // '4-62332'
 * ```
 */
function wyoming() {
    // TODO: Weigh county choice based on population
    const county = (0, random_item_1.default)(Array.from((0, get_range_1.default)({ start: 1, end: 23 })).concat(99));
    const digits = (0, lib_1.randomNumericString)(99999);
    return `${county}-${digits}`;
}
exports.default = wyoming;
