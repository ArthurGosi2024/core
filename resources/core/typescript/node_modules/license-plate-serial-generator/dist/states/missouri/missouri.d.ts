/**
 * Generates random serial for [Missouri](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Missouri#1980_to_present)
 *
 * **Serial format**: `XA1 B2C`, where `X` corresponds to month of expiration
 *
 * ```
 * import { missouri } from 'license-plate-serial-generator'
 *
 * missouri() // 'DB0 A0H'
 * ```
 */
export default function missouri(): string;
