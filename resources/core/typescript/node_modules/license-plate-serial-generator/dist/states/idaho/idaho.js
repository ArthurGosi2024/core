"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const array_shuffle_1 = __importDefault(require("array-shuffle"));
const bb26_1 = require("bb26");
const random_item_1 = __importDefault(require("random-item"));
const lib_1 = require("../../lib");
/**
 * Generates random serial for [Idaho](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Idaho#1968_to_present)
 *
 * **Serial formats**, where `XX` is a county code:
 *
 * - `X 123456`
 * - `XX 12345`
 * - `XX A1234`
 * - `XX A1234`
 * - `XX AB123`
 * - `XX 1A234`
 * - `XX 1234A`
 * - `XX 123AB`
 * - `XXX 1234`
 * - `XXX A123`
 *
 * ```
 * import { idaho } from 'license-plate-serial-generator'
 *
 * idaho() // 'K 066648'
 * ```
 */
function idaho() {
    const counties = [
        { letter: 'A', count: 2 },
        { letter: 'B', count: 10 },
        { letter: 'C', count: 7 },
        { letter: 'E', count: 1 },
        { letter: 'F', count: 2 },
        { letter: 'G', count: 2 },
        { letter: 'I', count: 1 },
        { letter: 'J', count: 2 },
        { letter: 'K', count: 1 },
        { letter: 'L', count: 4 },
        { letter: 'M', count: 2 },
        { letter: 'N', count: 1 },
        { letter: 'O', count: 2 },
        { letter: 'P', count: 2 },
        { letter: 'S', count: 1 },
        { letter: 'T', count: 2 },
        { letter: 'V', count: 1 },
        { letter: 'W', count: 1 }
    ];
    const countyCodes = [];
    let numbers;
    let right = '';
    for (const county of counties) {
        for (let i = 0; i < county.count; i++) {
            const count = county.count;
            const number = count > 1 ? `${i + 1}` : '';
            countyCodes.push(number + county.letter);
        }
    }
    const countyCode = (0, random_item_1.default)(countyCodes);
    switch (countyCode.length) {
        case 1: {
            // There's only one county character, so the format must be
            // `A 123456`
            right = (0, lib_1.randomNumericString)(999999);
            break;
        }
        case 2: {
            // There are two county characters, so the format can be
            // `0A 12345`, `0A A1234`, `0A AB123`, `0A 1A234`, `0A 1234A`, or
            // `0A 123AB`
            numbers = (0, lib_1.randomNumericString)((0, random_item_1.default)([999, 9999, 99999]));
            switch (numbers.length) {
                case 3: {
                    const letters = (0, bb26_1.random)('ZZ');
                    numbers = (0, lib_1.randomNumericString)(999);
                    right =
                        letters.length === 1
                            ? (0, lib_1.randomNumericString)(9) + letters + numbers
                            : (0, array_shuffle_1.default)([letters, numbers]).join('');
                    break;
                }
                case 4: {
                    const letter = (0, bb26_1.random)('Z');
                    numbers = (0, lib_1.randomNumericString)(9999);
                    right = (0, array_shuffle_1.default)([letter, numbers]).join('');
                    break;
                }
                case 5: {
                    right = numbers;
                    break;
                }
                // No default
            }
            break;
        }
        case 3: {
            // There are three county characters, so the format can be
            // `CCC 1234` or `CCC A123`
            numbers = (0, lib_1.randomNumericString)((0, random_item_1.default)([999, 9999]));
            right = numbers.length === 3 ? (0, bb26_1.random)('Z') + numbers : numbers;
            break;
        }
        // No default
    }
    return `${countyCode} ${right}`;
}
exports.default = idaho;
