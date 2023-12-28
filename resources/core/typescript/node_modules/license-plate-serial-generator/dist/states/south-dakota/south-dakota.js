"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bb26_1 = require("bb26");
const get_range_1 = __importDefault(require("get-range"));
const random_int_1 = __importDefault(require("random-int"));
const random_item_1 = __importDefault(require("random-item"));
const lib_1 = require("../../lib");
/**
 * Generates random serial for [South Dakota](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_South_Dakota#1976_to_present)
 *
 * **Serial formats**:
 *
 * - `1A1 234`
 * - `1AB 123`
 * - `10A 123`
 * - First `1`/`10` is county code of issuance (1-67, excluding 66)
 *
 * ```
 * import { southDakota } from 'license-plate-serial-generator'
 *
 * southDakota() // '11K 222'
 * ```
 */
function southDakota() {
    const county = (0, random_item_1.default)(Array.from((0, get_range_1.default)({ start: 1, end: 66 })).concat(67));
    const right = (0, lib_1.randomNumericString)(999);
    let left = `${county}`;
    left += (0, bb26_1.random)('Z');
    if (left.length === 2)
        left += (0, random_int_1.default)(9);
    return `${left} ${right}`;
}
exports.default = southDakota;
