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
export default function mississippi(): string;
