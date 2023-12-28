/**
 * Generates random serial for [Alaska](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Alaska#1953_to_present)
 *
 * **Serial format**: `ABC 123`
 *
 * **Serial range**: `FUZ 100` to `FUZ 999`, `GAA 100` to `GZZ 999`, `KAA 100` to `KDY 641`
 *
 * ```
 * import { alaska } from 'license-plate-serial-generator'
 *
 * alaska() // 'KCA 245'
 * ```
 */
export default function alaska(): string;
