/** @format */
import { IPlayer } from "@server/modules/@types/IPlayer";
import { PlayerRepository } from "./repositories";

export class PlayerController {
     private PlayerModel: PlayerRepository;

     constructor() {
          this.PlayerModel = new PlayerRepository();
     }

     public async createPlayer(player: IPlayer): Promise<Boolean> {
          const findNewPlayer = await this.PlayerModel.findRepositoriesAtributes<IPlayer>({ license: player.license });

          if (findNewPlayer) return false;
          await this.PlayerModel.createRepositoriesAtributes(player)
     }

     public async findPlayer(license: string): Promise<IPlayer> | undefined {
          const findPlayer = await this.PlayerModel.findRepositoriesAtributes<IPlayer>({license: license});
          return findPlayer ?? undefined;
     }

     public async deletePlayer({ user_id }: IPlayer): Promise<Boolean> {
          return await this.PlayerModel.deleteRepositoriesAtributes<IPlayer>({ user_id })
     }
}
