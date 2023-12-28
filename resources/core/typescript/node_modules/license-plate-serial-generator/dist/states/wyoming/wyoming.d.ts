/**
 * Generates random serial for [Wyoming](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Wyoming#1975_to_present)
 *
 * **Serial formats**:
 *
 * - `1-12345`
 * - `11-12345`
 *
 * ```
 * import { wyoming } from 'license-plate-serial-generator'
 *
 * wyoming() // '4-62332'
 * ```
 */
export default function wyoming(): string;
