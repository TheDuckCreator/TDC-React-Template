import UserModel from "../models/User";

export const readAllUser = async () => {
  try {
    const user = await UserModel.find({});
    return user;
  } catch (error) {
    throw Error("DB_FALSE_READ Database fetching have problem", error);
  }
};

export const readOneUser = async (id) => {
  try {
    const user = await UserModel.findById(id);
    return user;
  } catch (error) {
    throw Error("DB_FALSE_READ Database fetching have problem", error);
  }
};

export const createOneUser = async (payload) => {
  try {
    const user = new UserModel(payload);
    await user.save();
    return user;
  } catch (error) {
    throw Error("DB_FALSE_CREATE Database creating have problem", error);
  }
};

export const updateOneUser = async (id, payload) => {
  try {
    const user = await UserModel.findByIdAndUpdate(id, { $set: payload });
    return user;
  } catch (error) {
    throw Error("DB_FALSE_EDIT Database creating have problem", error);
  }
};

export const deleteOneUser = async (id) => {
  try {
    const user = await UserModel.findByIdAndDelete(id);
    return user;
  } catch (error) {
    throw Error("DB_FALSE_DELETE Database creating have problem", error);
  }
};

export default {
  createOneUser,
  readAllUser,
  readOneUser,
  updateOneUser,
  deleteOneUser,
};
