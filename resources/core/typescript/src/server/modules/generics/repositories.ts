import { DefaultSchemaOptions, Model, ObtainDocumentType, ResolveSchemaOptions, Schema, model } from "mongoose";


export class GenericsRepository<T> {
     private atributes: Model<T>;

     constructor(name: string, schemas: Schema<T, any, any, {}, {}, {}, DefaultSchemaOptions, ObtainDocumentType<any, T, ResolveSchemaOptions<DefaultSchemaOptions>>>) {
          this.atributes = model<T>(name, schemas);
     }

     public async createRepositoriesAtributes<T>({ ...rest }: T) {
          const newAtributes = new this.atributes(rest);
          await newAtributes.save()
     }

     public async findRepositoriesAtributes<T>({ ...rest }: T): Promise<T> {
          return await this.atributes.findOne({ ...rest });
     }

     public async updateRepositoriesAtributes<T>({ ...rest }: T, update: T) {
          await this.atributes.updateOne<T>({
               rest
          }, {
               $set: { ...update }
          })
     }

     public async deleteRepositoriesAtributes<T>({ ...rest }: T): Promise<Boolean> {
          const find = await this.atributes.findOne({ rest });
          if (find) {
               await this.atributes.deleteOne({ rest })
               return true;
          }
          return false;
     }
}
