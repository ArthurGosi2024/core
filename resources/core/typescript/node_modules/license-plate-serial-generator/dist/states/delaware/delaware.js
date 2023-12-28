"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const random_int_1 = __importDefault(require("random-int"));
/**
 * Generates random serial for [Delaware](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Delaware#1942_to_present)
 *
 * **Serial format**: `123456`
 *
 * **Serial range**: `4` to `999999`
 *
 * ```
 * import { delaware } from 'license-plate-serial-generator'
 *
 * delaware() // '346692'
 * ```
 */
function delaware() {
    return `${(0, random_int_1.default)(4, 999999)}`;
}
exports.default = delaware;
