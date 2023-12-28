/**
 * Generates random serial for [Virginia](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Virginia#1973_to_present)
 *
 * **Serial format**: `ABC-1234`
 *
 * **Serial ranges**:
 *
 * - `VAA-1000` to `VZZ-9999`
 * - `UZZ-9999` to `UPA-2674` (progressing backwards)
 *
 * ```
 * import { virginia } from 'license-plate-serial-generator'
 *
 * virginia() // 'UTY-3023'
 * ```
 */
export default function virginia(): string;
