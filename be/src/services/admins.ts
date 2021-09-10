import { Request, Response } from 'express';
import { AdminModel } from '../models/admin';

export async function getAllAdmins(_: Request, res: Response) {
  const item = await AdminModel.find();
  res.send(item);
}
