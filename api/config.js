import env from 'dotenv'
env.config()

export default {
  severPort: process.env.SERVER_PORT,
  frontUrl: process.env.FRONT_URL,
  // Database info.
  user: process.env.USER,
  password: process.env.PASSWORD,
  cluster: process.env.CLUSTER,
  dataBase: process.env.DATABASE
}