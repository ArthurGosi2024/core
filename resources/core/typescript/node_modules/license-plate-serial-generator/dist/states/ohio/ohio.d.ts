/**
 * Generates random serial for [Ohio](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Ohio#1974_to_present)
 *
 * **Serial format**: `ABC 1234`
 *
 * **Serial range**: `FWA 1000` to `HUF 1415`
 *
 * ```
 * import { ohio } from 'license-plate-serial-generator'
 *
 * ohio() // 'GSR 8231'
 * ```
 */
export default function ohio(): string;
