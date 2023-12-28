/** @format */

export interface IPlayer {
     bank?: number;
     cash?: number;
     license?: string;
     name?: string;
     playerId?: number;
     surname?: string;
     user_id?: string;
     _id?: string;
}


export interface IPlayerServer extends IPlayer {
     playerId?: number;
}