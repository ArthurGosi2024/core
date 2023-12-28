import { IBanneds } from "@server/modules/@types/IBanneds";
import { BannedRepository } from "./repositories";

export class BannedController {
     private BannedModel: BannedRepository;

     constructor() {
          this.BannedModel = new BannedRepository();
     }

     public async createBanned(banned: IBanneds): Promise<Boolean> {
          const findNewBanned = await this.BannedModel.findRepositoriesBanned(banned);

          if (findNewBanned.id) return false;
          await this.BannedModel.createRepositoriesBanned(banned)
     }

     public async findBanned({ ...rest }: IBanneds): Promise<IBanneds> | undefined {
          const findBanned = await this.BannedModel.findRepositoriesBanned({ ...rest });
          return findBanned ?? undefined;
     }

     public async deleteBanned({ id }: IBanneds): Promise<Boolean> {
          return await this.BannedModel.deleteRepositoriesBanned({ id })
     }
}
