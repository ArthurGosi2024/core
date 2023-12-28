"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mauiCounty = exports.kauaiCounty = exports.honoluluCounty = exports.hawaiiCounty = void 0;
const bb26_1 = require("bb26");
const random_item_1 = __importDefault(require("random-item"));
const lib_1 = require("../../lib");
/** @ignore */
function hawaiiCounty() {
    const letters = (0, random_item_1.default)(['H', 'Z']) + (0, bb26_1.random)('AA', 'AAA');
    const digits = (0, lib_1.randomNumericString)(999);
    return `${letters} ${digits}`;
}
exports.hawaiiCounty = hawaiiCounty;
/** @ignore */
function honoluluCounty() {
    const county = (0, random_item_1.default)(['E', 'F', 'G', 'J', 'N', 'P', 'R', 'S', 'T']);
    const validLetters = (0, bb26_1.range)('AA', county === 'T' ? 'TU' : 'AAA').filter((letters) => !/[HKLM]/.test(letters));
    const letters = (0, random_item_1.default)(validLetters);
    const numbers = (0, lib_1.randomNumericString)(999);
    return `${county}${letters} ${numbers}`;
}
exports.honoluluCounty = honoluluCounty;
/** @ignore */
function kauaiCounty() {
    const letters = (0, bb26_1.random)('AA', 'AAA');
    const numbers = (0, lib_1.randomNumericString)(999);
    return `K${letters} ${numbers}`;
}
exports.kauaiCounty = kauaiCounty;
/** @ignore */
function mauiCounty() {
    const county = (0, random_item_1.default)(['M', 'L']);
    const letters = (0, bb26_1.random)('AA', 'AAA');
    const numbers = (0, lib_1.randomNumericString)(999);
    return `${county}${letters} ${numbers}`;
}
exports.mauiCounty = mauiCounty;
/**
 * Generates random serial for [Hawaii](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Hawaii#1953_to_present)
 *
 * **Serial format**:
 *
 * - Hawaiʻi County: `HAB 123` or `ZAB 123`
 * - Honolulu county: `ABC 123`
 *   - First letter is A-G, J, N, P, or R-Y
 *   - Sequence may not include H, K, L, or M in any position
 * - Kauaʻi County: `KAB 123`
 * - Maui County: `MAB 123` or `LAB 123`
 *
 * ```
 * import { hawaii } from 'license-plate-serial-generator'
 *
 * hawaii() // Hawaiʻi County: 'HJM 033'
 * hawaii() // Honolulu County: 'GCN 527'
 * hawaii() // Kauaʻi County: 'KEF 722'
 * hawaii() // Maui County: 'MHQ 397'
 * ```
 */
function hawaii() {
    // TODO: Weigh county choice based on population
    return (0, random_item_1.default)([hawaiiCounty, honoluluCounty, kauaiCounty, mauiCounty])();
}
exports.default = hawaii;
