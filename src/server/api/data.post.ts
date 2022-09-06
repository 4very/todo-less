import fs from 'fs'
import { dataFile } from './data.get'

export default defineEventHandler(async (event) => {
  const body = await useBody(event)

  fs.writeFileSync(dataFile, JSON.stringify(body, null, '\t'))
  return {}
})
