/**
 * Generates random serial for [Florida](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Florida#1974_to_present)
 *
 * **Serial format**: `Z12 3BC`
 *
 * **Serial range**: `Z00 0AA` to `Z89 0FW`
 *
 * ```
 * import { florida } from 'license-plate-serial-generator'
 *
 * florida() // 'Z36 5BG'
 * ```
 */
export default function florida(): string;
