/**
 * Generates random serial for [Georgia](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Georgia_(U.S._state)#1971_to_present)
 *
 * **Serial format**: `ABC1234`
 *
 * **Serial range**: `PFA0000` to `PLZ9999`
 *
 * ```
 * import { georgia } from 'license-plate-serial-generator'
 *
 * georgia() // 'PJW3134'
 * ```
 */
export default function georgia(): string;
