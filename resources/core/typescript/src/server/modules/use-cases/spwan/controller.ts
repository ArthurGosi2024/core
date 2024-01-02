import { ISpwans } from "@server/modules/@types/ISpwans";
import { SpwanRepository } from "./repositories";

export class SpwanController {
     private spwanModel: SpwanRepository;

     constructor() {
          this.spwanModel = new SpwanRepository();
     }

     public async createSpwan({ ...rest }: ISpwans): Promise<Boolean> {
          const findSpwan = await this.spwanModel.findRepositoriesAtributes<ISpwans>({ id: rest.id });

          if (findSpwan.id === rest.id) {
               return false
          }
          await this.spwanModel.createRepositoriesAtributes<ISpwans>({ ...rest })
          return true
     }

     public async findSpwan({ ...rest }: ISpwans): Promise<ISpwans> | undefined {
          const findSpwan = await this.spwanModel.findRepositoriesAtributes<ISpwans>(rest);
          return findSpwan ?? undefined;
     }

     public async updateSpwan({ ...rest }: ISpwans, information: ISpwans): Promise<Boolean> {
          const findSpwan = await this.spwanModel.findRepositoriesAtributes<ISpwans>(rest);
          if (findSpwan.id) {
               await this.spwanModel.updateRepositoriesAtributes<ISpwans>(rest, information)
               return true;
          }
          return false;
     }

     public async deleteSpwan({ id }: ISpwans): Promise<Boolean> {
          return await this.spwanModel.deleteRepositoriesAtributes<ISpwans>({ id })
     }
}
