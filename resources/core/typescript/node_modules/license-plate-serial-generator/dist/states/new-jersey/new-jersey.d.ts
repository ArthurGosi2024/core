/**
 * Generates random serial for [New Jersey](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_New_Jersey#1959_to_present) (as of 2021-21-14)
 *
 * **Serial format**: `A12-BCD`
 *
 * **Serial range**: `A10-EFF` to `U50-PMC`
 *
 * **Restrictions**: `I`, `O`, `Q` not used in any position
 *
 * ```
 * import { newJersey } from 'license-plate-serial-generator'
 *
 * newJersey() // 'L11-HWC'
 * ```
 */
export default function newJersey(): string;
