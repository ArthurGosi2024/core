/**
 * Generates random serial for [North Carolina](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_North_Carolina#1975_to_present)
 *
 * **Serial format**: `ABC-1234`
 *
 * **Serial range**: `PAA-1001` to `PLA-9999`
 *
 * ```
 * import { northCarolina } from 'license-plate-serial-generator'
 *
 * northCarolina() // 'PHT-1021'
 * ```
 */
export default function northCarolina(): string;
