/**
 * Generates random serial for [Illinois](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Illinois#1979_to_present)
 *
 * **Serial format**: `AB 12345`
 *
 * **Serial range**: `AQ 11001` to `BP 20703`
 *
 * ```
 * import { illinois } from 'license-plate-serial-generator'
 *
 * illinois() // 'AT 65597'
 * ```
 */
export default function illinois(): string;
