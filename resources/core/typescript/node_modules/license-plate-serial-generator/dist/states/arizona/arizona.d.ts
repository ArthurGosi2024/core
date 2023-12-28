/**
 * Generates random serial for [Arizona](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Arizona#1956_to_present)
 *
 * **Serial format**: `ABC1234`
 *
 * **Serial range**: `AAA00001` to `CPD0898`
 *
 * ```
 * import { arizona } from 'license-plate-serial-generator'
 *
 * arizona() // 'AUT8173'
 * ```
 */
export default function arizona(): string;
