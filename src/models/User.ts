import { prop, getModelForClass } from '@typegoose/typegoose';

export class User {
  @prop({ required: true })
  public email!: string;

  @prop({ required: true })
  public password!: string;

  @prop()
  public longitude?: number;

  @prop()
  public latitude?: number;
}

export const UserModel = getModelForClass(User, {
  schemaOptions: {
    timestamps: true,
  },
});
