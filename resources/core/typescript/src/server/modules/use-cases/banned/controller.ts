import { IBanneds } from "@server/modules/@types/IBanneds";
import { BannedRepository } from "./repositories";

export class BannedController {
     private BannedModel: BannedRepository;

     constructor() {
          this.BannedModel = new BannedRepository();
     }

     public async createBanned(banned: IBanneds): Promise<Boolean> {
          const findNewBanned = await this.BannedModel.findRepositoriesAtributes<IBanneds>(banned);

          if (findNewBanned.id) return false;
          await this.BannedModel.createRepositoriesAtributes(banned)
     }

     public async findBanned({ ...rest }: IBanneds): Promise<IBanneds> | undefined {
          const findBanned = await this.BannedModel.findRepositoriesAtributes<IBanneds>({ ...rest });
          return findBanned ?? undefined;
     }

     public async deleteBanned({ id }: IBanneds): Promise<Boolean> {
          return await this.BannedModel.deleteRepositoriesAtributes<IBanneds>({ id })
     }
}
