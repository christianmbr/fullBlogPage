import User from '@/data/model/userModel.js'

export const createUser = async ({ name, password, email }) => {
  return await User.create({
    name,
    password,
    email
  })
}
