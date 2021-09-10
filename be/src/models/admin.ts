import { Schema, model } from 'mongoose';

export interface Admin {
  _id: string;
  login: string;
  password: string;
}

const adminSchema = new Schema<Admin>(
  {
    login: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

export const AdminModel = model<Admin>('Admin', adminSchema);
