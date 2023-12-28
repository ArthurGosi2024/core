/**
 * Generates random serial for [Iowa](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Iowa#1972_to_present)
 *
 * **Serial format**: `ABC 123`
 *
 * **Serial range**: `GXV 200` to `IBB 999`
 *
 * ```
 * import { iowa } from 'license-plate-serial-generator'
 *
 * iowa() // 'HML 979'
 * ```
 */
export default function iowa(): string;
