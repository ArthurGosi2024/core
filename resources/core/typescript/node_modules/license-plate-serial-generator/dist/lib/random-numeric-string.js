"use strict";
/* eslint-disable @typescript-eslint/unified-signatures, no-redeclare */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const random_int_1 = __importDefault(require("random-int"));
/** @ignore */
function randomNumericString(lower, upper, length) {
    const _lower = upper ? lower : 0;
    const _upper = upper !== null && upper !== void 0 ? upper : lower;
    const number = (0, random_int_1.default)(_lower, _upper);
    length = length !== null && length !== void 0 ? length : `${_upper}`.length;
    return `${number}`.padStart(length, '0');
}
exports.default = randomNumericString;
