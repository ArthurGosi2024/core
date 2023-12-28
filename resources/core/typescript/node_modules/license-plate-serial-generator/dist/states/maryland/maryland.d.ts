/**
 * Generates random serial for [Maryland](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Maryland#1970_to_present)
 *
 * **Serial format**: `1AB2345`
 *
 * **Serial range**: `8CN0000` to `9DW2552`
 *
 * ```
 * import { maryland } from 'license-plate-serial-generator'
 *
 * maryland() // '9DL7397'
 * ```
 */
export default function maryland(): string;
