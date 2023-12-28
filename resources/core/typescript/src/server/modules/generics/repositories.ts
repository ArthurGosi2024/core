import { DefaultSchemaOptions, Model, ObtainDocumentType, ResolveSchemaOptions, Schema, model } from "mongoose";


export class GenericsRepository<T> {
     private atributes: Model<T>;

     constructor(name: string, schemas: Schema<T, any, any, {}, {}, {}, DefaultSchemaOptions, ObtainDocumentType<any, T, ResolveSchemaOptions<DefaultSchemaOptions>>>) {
          this.atributes = model<T>(name, schemas);
     }

     protected async createRepositoriesAtributes<T>({ ...rest }: T) {
          const newAtributes = new this.atributes(rest);
          await newAtributes.save()
     }

     protected async findRepositoriesAtributes<T>({ ...rest }: T): Promise<T> {
          return await this.atributes.findOne({ ...rest });
     }

     protected async updateRepositoriesAtributes<T>({ ...rest }: T, update: T) {
          await this.atributes.updateOne<T>({
               rest
          }, {
               $set: { ...update }
          })
     }

     protected async deleteRepositoriesAtributes<T>({ ...rest }: T): Promise<Boolean> {
          const find = await this.atributes.findOne({ rest });
          if (find) {
               await this.atributes.deleteOne({ rest })
               return true;
          }
          return false;
     }
}
