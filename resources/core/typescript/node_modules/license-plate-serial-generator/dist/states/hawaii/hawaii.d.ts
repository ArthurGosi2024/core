/** @ignore */
export declare function hawaiiCounty(): string;
/** @ignore */
export declare function honoluluCounty(): string;
/** @ignore */
export declare function kauaiCounty(): string;
/** @ignore */
export declare function mauiCounty(): string;
/**
 * Generates random serial for [Hawaii](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Hawaii#1953_to_present)
 *
 * **Serial format**:
 *
 * - Hawaiʻi County: `HAB 123` or `ZAB 123`
 * - Honolulu county: `ABC 123`
 *   - First letter is A-G, J, N, P, or R-Y
 *   - Sequence may not include H, K, L, or M in any position
 * - Kauaʻi County: `KAB 123`
 * - Maui County: `MAB 123` or `LAB 123`
 *
 * ```
 * import { hawaii } from 'license-plate-serial-generator'
 *
 * hawaii() // Hawaiʻi County: 'HJM 033'
 * hawaii() // Honolulu County: 'GCN 527'
 * hawaii() // Kauaʻi County: 'KEF 722'
 * hawaii() // Maui County: 'MHQ 397'
 * ```
 */
export default function hawaii(): string;
