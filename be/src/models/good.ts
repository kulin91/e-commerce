import { Schema, model } from "mongoose";

export interface Good {
  _id: string;
  title: string;
  description: string;
  category: string;
  imgSrc: string;
  price: number;
  isDelete: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const schema = new Schema<Good>({
  title: String,
  description: String,
  category: String,
  imgSrc: String,
  price: Number,
  isDelete: Boolean,
},
  {
    timestamps: true,
  });

  export const GoodModel = model<Good>("Good", schema);