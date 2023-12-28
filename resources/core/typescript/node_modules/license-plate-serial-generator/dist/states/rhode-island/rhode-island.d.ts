/** @ignore */
export declare function alphaNumeric(): string;
/** @ignore */
export declare function numeric(): string;
/**
 * Generates random serial for [Rhode Island](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Rhode_Island#1961_to_present)
 *
 * **Serial formats**:
 *
 * - Numeric: `12345`
 * - Alpha-numeric: `AB-12`, `AB-123`
 *
 * ```
 * import { rhodeIsland } from 'license-plate-serial-generator'
 *
 * // Numeric
 * rhodeIsland() // '56245'
 *
 * // Alpha-numeric
 * rhodeIsland() // 'UX-561'
 * ```
 */
export default function rhodeIsland(): string;
