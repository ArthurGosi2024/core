/**
 * Generates random serial for [Wisconsin](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Wisconsin#1968_to_present)
 *
 * **Serial format**: `ABC-1234`
 *
 * **Serial range**: `AAA-1001` to `AFR-2643`
 *
 * ```
 * import { wisconsin } from 'license-plate-serial-generator'
 *
 * wisconsin() // 'AFF-2603'
 * ```
 */
export default function wisconsin(): string;
