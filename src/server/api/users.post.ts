import fs from 'fs'
import { usersFile } from './users.get'

export default defineEventHandler(async (event) => {
  const body = await useBody(event)

  fs.writeFileSync(usersFile, JSON.stringify(body, null, '\t'))
  return {}
})
