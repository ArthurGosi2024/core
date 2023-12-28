/**
 * Generates random serial for [North Dakota](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_North_Dakota#1958_to_present)
 *
 * **Serial format**: `123 ABC`
 *
 * **Serial range**: `000 BTR` to `825 CNK`
 *
 * ```
 * import { northDakota } from 'license-plate-serial-generator'
 *
 * northDakota() // '526 XAF'
 * ```
 */
export default function northDakota(): string;
