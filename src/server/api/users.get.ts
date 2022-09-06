import fs from 'fs'
export const usersFile = './src/assets/users.json'

export default defineEventHandler(() => {
  const users = JSON.parse(fs.readFileSync(usersFile).toString())
  return { ...users }
})
