/** @format */

export interface IDerrefals {
     defer: () => void;
     update: (reason: string) => void;
     presentCard: (card: object | string, data: object, rawData: string) => void;
     done: (failureReason?: string) => void;
}
