import { User } from "../models";

export const getAll = async (): Promise<object> => await User.find({});

export const get = async (id: string): Promise<object | null> => await User.findById(id);

export const del = async (id: string): Promise<object> =>
    await User.deleteOne({ _id: id });

export const update = async (id: string, body: object): Promise<object | null> =>
    await User.findByIdAndUpdate(id, body, { new: true });

export const add = async (body: object): Promise<object> => await User.create(body);
