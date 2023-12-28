/**
 * Generates random serial for [West Virginia](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_West_Virginia#1970_to_present)
 *
 * **Serial formats**:
 *
 * - `0A 1234`
 * - `0AB 123`
 * - `01A 123`
 * - `AA 1234`
 * - `AAB 123`
 * - `A1A 123`
 *
 * **Restrictions**:
 *
 * - First character corresponds to month of expiration:
 *   - 1-9 indicate Jan-Sep
 *   - O, N, D indicate Oct, Nov, Dec
 * - Series 'S' and 'SA-SZ' reserved for optional Scenic plates
 *
 * ```
 * import { westVirginia } from 'license-plate-serial-generator'
 *
 * westVirginia() // '9VB 602'
 * ```
 */
export default function westVirginia(): string;
