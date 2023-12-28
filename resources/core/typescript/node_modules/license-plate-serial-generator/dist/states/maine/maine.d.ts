/**
 * Generates random serial for [Maine](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Maine#1950_to_present)
 *
 * **Serial format**: `1234 AB`
 *
 * **Serial range**: `1 GA` to `5252 XK`
 *
 * ```
 * import { maine } from 'license-plate-serial-generator'
 *
 * maine() // '1837 AJ'
 * ```
 */
export default function maine(): string;
