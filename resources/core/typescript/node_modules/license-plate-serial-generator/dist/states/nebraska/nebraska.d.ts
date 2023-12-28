/** @ignore */
export declare function countyCoded(county: number): string;
/** @ignore */
export declare function abc123(): string;
/**
 * Generates random serial for [Nebraska](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Nebraska#1966_to_present)
 *
 * **Serial formats**:
 *
 * - Douglas, Lancaster, and Sarpy counties: `ABC 123`
 * - Other counties:
 *   - `X-A1234`
 *   - `X-AB123`
 *   - `XX-A123`
 *   - `XX-AB12`
 *
 * **Serial ranges**:
 *
 * - Douglas, Lancaster, and Sarpy counties: Mid-`U` series to `WDH 999`
 *
 * ```
 * import {nebraska } from 'license-plate-serial-generator'
 *
 * // Douglas, Lancaster, and Sarpy counties
 * nebraska() // 'VKO 137'
 *
 * // Other counties
 * nebraska() // '14-QD84'
 * ```
 */
export default function nebraska(): string;
