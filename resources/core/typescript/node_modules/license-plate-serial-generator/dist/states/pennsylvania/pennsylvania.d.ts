/**
 * Generates random serial for [Pennsylvania](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Pennsylvania#1958_to_present)
 *
 * **Serial format**: `ABC-1234`
 *
 * **Serial range**: `KLF-0000 to LBP-1791`
 *
 * ```
 * import { pennsylvania } from 'license-plate-serial-generator'
 *
 * pennsylvania() // 'KSS-6213'
 * ```
 */
export default function pennsylvania(): string;
