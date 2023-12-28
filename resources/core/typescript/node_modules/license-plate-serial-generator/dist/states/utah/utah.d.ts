/** @ignore */
export declare function arch(): string;
/** @ignore */
export declare function god(): string;
/** @ignore */
export declare function ski(): string;
/**
 * Generates random serial for [Utah](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Utah#1968_to_present)
 *
 * **Serial formats**:
 *
 * - Arches: `A12 3BC`
 * - In God We Trust: `1A2BC`
 * - Skier: `A12 3BC`
 *
 * **Serial ranges**:
 *
 * - Arches: `Z00 1AA` to `V21 5RK` (progressed backwards)
 * - In God We Trust: `0A0AA` to `5E1NY`
 * - Skier: `A00 1AA` to `F76 4TE`
 *
 * ```
 * import { utah } from 'license-plate-serial-generator'
 *
 * // Arches
 * utah() // 'X03 6XV'
 *
 * // In God We Trust
 * utah() // '5D2MY'
 *
 * // Skier
 * utah() // 'D38 1CT'
 * ```
 */
export default function utah(): string;
