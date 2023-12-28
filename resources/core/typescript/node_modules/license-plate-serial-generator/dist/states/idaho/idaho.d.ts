/**
 * Generates random serial for [Idaho](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Idaho#1968_to_present)
 *
 * **Serial formats**, where `XX` is a county code:
 *
 * - `X 123456`
 * - `XX 12345`
 * - `XX A1234`
 * - `XX A1234`
 * - `XX AB123`
 * - `XX 1A234`
 * - `XX 1234A`
 * - `XX 123AB`
 * - `XXX 1234`
 * - `XXX A123`
 *
 * ```
 * import { idaho } from 'license-plate-serial-generator'
 *
 * idaho() // 'K 066648'
 * ```
 */
export default function idaho(): string;
