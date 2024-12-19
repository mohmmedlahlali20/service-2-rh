import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type RHDocument = RH & Document;

@Schema()
export class RH {
    @Prop({ required: true })
    first_name: string;

    @Prop({ required: true })
    last_name: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true, unique: true })
    phone_number: string; 

    @Prop({ required: true })
    date_of_joining: Date;

    @Prop({ required: true })
    salary: number;

    @Prop({ required: true })
  position: string;

  @Prop({ required: true })
  department: string;
}

export const RHSchema = SchemaFactory.createForClass(RH);
